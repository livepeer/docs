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
  method: string,
): ParameterInfo | null {
  const [requestParameters, setRequestParameters] =
    useState<ParameterInfo | null>(null);

  useEffect(() => {
    const getPathParameters = (schema: any): ParameterInfo[] => {
      const pathParameters: ParameterInfo[] = [];
      const addedProperties = new Set();

      const parameterLocations = [
        'parameters',
        'get.parameters',
        'post.parameters',
        'patch.parameters',
        'delete.parameters',
      ];

      for (const location of parameterLocations) {
        const locationParts = location.split('.');
        let currentObject = schema;

        for (const part of locationParts) {
          if (!currentObject || !currentObject[part]) {
            currentObject = undefined;
            break;
          }
          currentObject = currentObject[part];
        }

        if (currentObject) {
          for (const parameter of currentObject) {
            const resolvedSchema = parameter.schema?.$ref
              ? resolveRef(parameter.schema.$ref)
              : parameter.schema;
            const parameterInfo: ParameterInfo =
              extractParameterInfo(resolvedSchema);

            const property = parameter.name ?? '';
            if (addedProperties.has(property)) {
              continue; // Skip this parameter if the property is already added
            }

            parameterInfo.property = property;
            parameterInfo.description = parameter.description ?? '';

            pathParameters.push(parameterInfo);
            addedProperties.add(property);
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
      method: string,
    ): OpenAPIV3_1.SchemaObject | null => {
      return (
        schema?.[method]?.requestBody?.content?.['application/json']?.schema ?? null
      );
    };

    const resolveRef = (ref: string): any => {
      let refPath = ref.split('/').slice(1);
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

      // Check if there are any $ref in the current schema
      if (containsRef(currentSchema)) {
        for (const key in currentSchema) {
          if (currentSchema[key] && typeof currentSchema[key] === 'object') {
            currentSchema[key] = resolveNestedRefs(currentSchema[key]);
          }
        }
      }

      return currentSchema;
    };

    function containsRef(schema: any): boolean {
      if (!schema || typeof schema !== 'object') {
        return false;
      }

      for (const key in schema) {
        if (
          key === '$ref' ||
          (schema[key] &&
            typeof schema[key] === 'object' &&
            containsRef(schema[key]))
        ) {
          return true;
        }
      }

      return false;
    }

    function resolveNestedRefs(schema: any): any {
      if (Array.isArray(schema)) {
        return schema.map((item) => resolveNestedRefs(item));
      }

      if (schema && typeof schema === 'object') {
        if (schema.$ref) {
          return resolveRef(schema.$ref);
        }

        for (const key in schema) {
          schema[key] = resolveNestedRefs(schema[key]);
        }
      }

      return schema;
    }

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

      if (parameterSchema?.properties) {
        info.object = true;
        info.objectProperties = Object.entries(parameterSchema.properties)
          .filter(([property, propertySchema]: [string, any]) => {
            return !propertySchema.readOnly; // Filter out readOnly properties
          })
          .map(([property, propertySchema]: [string, any]) => {
            const resolvedSchema = propertySchema.$ref
              ? resolveRef(propertySchema.$ref)
              : propertySchema;
            resolvedSchema.property = property;
            return extractParameterInfo(resolvedSchema);
          });
      }

      return info;
    };

    // Update the getRequestParameters function
    function getRequestParameters(
      schemas: OpenAPIV3_1.Document,
      path: string,
      method: string,
    ): ParameterInfo | null {
      const schema = getSchemaByPath(schemas, path);
      const requestSchema = getRequestSchema(schema, method);

      const pathParameters = getPathParameters(schema);

      if (requestSchema || pathParameters.length > 0) {
        const resolvedSchema = requestSchema?.$ref
          ? resolveRef(requestSchema.$ref)
          : requestSchema;
        if (path === '/asset/upload/url') {
          console.log(resolvedSchema);
        }
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

    const parameters = getRequestParameters(schemas, path, method);
    setRequestParameters(parameters);
  }, [schemas, path]);

  return requestParameters;
}
