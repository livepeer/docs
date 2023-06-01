import { useState, useEffect } from 'react';
import { OpenAPIV3_1 } from 'openapi-types';

export function useResponseInfo(
  methodInfo: OpenAPIV3_1.OperationObject,
  schemas: OpenAPIV3_1.ComponentsObject['schemas'],
): { [responseCode: string]: any }[] {
  const [responseArray, setResponseArray] = useState<
    { responseCode: string; response: any }[]
  >([]);

  useEffect(() => {
    const generateResponse = (): { [responseCode: string]: any } => {
      const response: { [responseCode: string]: any } = {};

      for (const responseCode in methodInfo?.responses) {
        const responseInfo = methodInfo.responses[responseCode];
        const content = responseInfo.content?.['application/json'];
        const schema = content?.schema;

        if (schema?.type === 'array' && schema.items?.$ref) {
          const refSchema = getSchemaFromRef(schema.items.$ref, schemas);
          response[responseCode] = [generateSampleObject(refSchema)];
        } else if (schema?.$ref) {
          const refSchema = getSchemaFromRef(schema.$ref, schemas);
          response[responseCode] = generateSampleObject(refSchema);
        }
      }

      return response;
    };

    const getSchemaFromRef = (
      ref: string,
      schemas: OpenAPIV3_1.ComponentsObject['schemas'],
    ): OpenAPIV3_1.SchemaObject => {
      const schemaName = ref.split('/').pop();
      return schemas[schemaName];
    };

    const generateSampleObject = (
      schema: OpenAPIV3_1.SchemaObject,
    ): { [propName: string]: any } => {
      const sampleObject: { [propName: string]: any } = {};

      for (const propName in schema.properties) {
        const propSchema = schema.properties[propName];
        sampleObject[propName] = generateSampleValue(propSchema);
      }

      return sampleObject;
    };

    const generateSampleValue = (propSchema: OpenAPIV3_1.SchemaObject): any => {
      if (propSchema.example) {
        return propSchema.example;
      }

      if (propSchema.type === 'object') {
        return generateSampleObject(propSchema);
      }

      if (propSchema.type === 'array') {
        if (propSchema.items?.$ref) {
          const refSchema = getSchemaFromRef(propSchema.items.$ref, schemas);
          return [generateSampleObject(refSchema)];
        }
        if (propSchema.items?.type) {
          return [generateSampleValue(propSchema.items)];
        }
      }

      // Handle other types here if needed
      return null;
    };

    const responses = generateResponse();
    const responseArray = Object.entries(responses).map(
      ([responseCode, response]) => ({
        responseCode,
        response,
      }),
    );
    setResponseArray(responseArray?.[0]?.response);
  }, [methodInfo, schemas]);

  return responseArray;
}
