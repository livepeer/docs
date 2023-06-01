import { useEffect, useState } from 'react';
import { OpenAPIV3_1 } from 'openapi-types';

interface ParameterInfo {
  property: string;
  description: string;
  example: string;
  optional: boolean;
  enums: any[];
  array: boolean;
  object: boolean;
  type: string;
  arraySchema?: any;
  objectProperties?: ParameterInfo[];
}

export function useRequestParameters(
  schemas: OpenAPIV3_1.Document,
  path: string,
): ParameterInfo | null {
  const [requestParameters, setRequestParameters] =
    useState<ParameterInfo | null>(null);

  useEffect(() => {
    const getPathParameters = (schema: any): ParameterInfo[] => {
      const pathParameters: ParameterInfo[] = [];

      if (schema && schema.parameters) {
        for (const parameter of schema.parameters) {
          if (parameter.in === 'path') {
            const resolvedSchema = parameter.schema?.$ref
              ? resolveRef(parameter.schema.$ref)
              : parameter.schema;
            const parameterInfo: ParameterInfo =
              extractParameterInfo(resolvedSchema);
            parameterInfo.property = parameter.name ?? ''; // Set the property name or default to empty string
            parameterInfo.description = parameter.description ?? ''; // Set the description or default to empty string
            pathParameters.push(parameterInfo);
          }
        }
      }

      return pathParameters;
    };

    const getSchemaByPath = (
      schemas: OpenAPIV3_1.Document,
      path: string,
    ): OpenAPIV3_1.PathItemObject | null | undefined => {
      return schemas.paths?.[path] ?? null;
    };

    const getRequestSchema = (
      schema: OpenAPIV3_1.PathItemObject | null | undefined,
    ): OpenAPIV3_1.SchemaObject | null => {
      return (
        schema?.post?.requestBody?.content?.['application/json']?.schema ?? null
      );
    };

    const resolveRef = (ref: string): any => {
      const refPath = ref.split('/').slice(1);
      let currentSchema: any = schemas;

      for (const path of refPath) {
        if (currentSchema && currentSchema[path]) {
          currentSchema = currentSchema[path];
        } else if (
          currentSchema.components &&
          currentSchema.components.schemas &&
          currentSchema.components.schemas[path]
        ) {
          currentSchema = currentSchema.components.schemas[path];
        } else {
          return null;
        }
      }

      return currentSchema;
    };

    const extractParameterInfo = (parameterSchema: any): ParameterInfo => {
      const info: ParameterInfo = {
        property: parameterSchema?.property || '',
        description: parameterSchema?.description || '',
        example: parameterSchema?.example || '',
        optional: !parameterSchema?.required || false,
        enums: parameterSchema?.enum || [],
        array: false,
        object: false,
        type: parameterSchema?.type || '',
      };

      if (parameterSchema?.type === 'array' && parameterSchema?.items) {
        info.array = true;
        const arraySchema = parameterSchema.items.$ref
          ? resolveRef(parameterSchema.items.$ref)
          : parameterSchema.items;
        info.arraySchema = extractParameterInfo(arraySchema);
      }

      if (parameterSchema?.type === 'object' && parameterSchema?.properties) {
        info.object = true;
        info.objectProperties = Object.entries(parameterSchema.properties).map(
          ([property, propertySchema]: [
            property: string,
            propertySchema: any,
          ]) => {
            const resolvedSchema = propertySchema.$ref
              ? resolveRef(propertySchema.$ref)
              : propertySchema;
            resolvedSchema.property = property;
            return extractParameterInfo(resolvedSchema);
          },
        );
      }

      return info;
    };

    // Update the getRequestParameters function
    function getRequestParameters(
      schemas: OpenAPIV3_1.Document,
      path: string,
    ): ParameterInfo | null {
      const schema = getSchemaByPath(schemas, path);
      const requestSchema = getRequestSchema(schema);

      const pathParameters = getPathParameters(schema);

      if (requestSchema || pathParameters.length > 0) {
        const resolvedSchema = requestSchema?.$ref
          ? resolveRef(requestSchema.$ref)
          : requestSchema;
        const requestParameters = extractParameterInfo(resolvedSchema);

        if (pathParameters.length > 0) {
          requestParameters.objectProperties = [
            ...(requestParameters.objectProperties || []),
            ...pathParameters,
          ];
        }

        return requestParameters;
      }

      return null;
    }

    const parameters = getRequestParameters(schemas, path);
    setRequestParameters(parameters);
  }, [schemas, path]);

  return requestParameters;
}
