import React from 'react';

import { ParameterInfo } from './Parameters';

import Pre from './shared/Pre';

interface RequestProps {
  baseUrl: string | undefined;
  params: ParameterInfo[] | undefined;
  method: string;
  path: string;
}

const Request: React.FC<RequestProps> = ({ baseUrl, params, method, path }) => {
  const buildNestedObject = (
    properties: ParameterInfo[],
  ): { [key: string]: any } => {
    const nestedObject: { [key: string]: any } = {};

    properties.forEach((property: ParameterInfo) => {
      nestedObject[property.property] = property.example || null;

      if (property.objectProperties && property.objectProperties.length > 0) {
        const nestedNestedObject = buildNestedObject(property.objectProperties);

        if (Object.keys(nestedNestedObject).length > 0) {
          nestedObject[property.property] = nestedNestedObject;
        }
      }
    });

    return nestedObject;
  };

  const generateCurlCommand = (): string => {
    const curlCommand = `curl -X ${method.toUpperCase()} -H 'content-type: application/json'`;

    const requestBody: { [key: string]: any } = {};

    params?.forEach((property) => {
      if (property.property && property.example) {
        requestBody[property.property] = property.example;
      }

      if (property.objectProperties && property.objectProperties.length > 0) {
        const nestedObject = buildNestedObject(property.objectProperties);

        if (Object.keys(nestedObject).length > 0) {
          requestBody[property.property] = nestedObject;
        }
      }

      if (
        property.array &&
        property.arraySchema &&
        property.arraySchema.length > 0
      ) {
        const nestedArray: { [key: string]: any }[] = [];
        property.arraySchema.forEach((nestedItem: ParameterInfo) => {
          const nestedObject: { [key: string]: any } = {};
          nestedItem.objectProperties?.forEach((nestedProperty) => {
            if (nestedProperty.property && nestedProperty.example) {
              nestedObject[nestedProperty.property] = nestedProperty.example;
            }
          });
          if (Object.keys(nestedObject).length > 0) {
            nestedArray.push(nestedObject);
          }
        });
        if (nestedArray.length > 0) {
          requestBody[property.property] = nestedArray;
        }
      }
    });

    const requestBodyString =
      method !== 'get' && JSON.stringify(requestBody, null, 2);
    const requestUrl = baseUrl ? `${baseUrl}${path}` : path;
    return `${curlCommand} -d '${requestBodyString}' ${requestUrl}`;
  };

  const sampleRequest = generateCurlCommand();

  return (
    <Pre dark method={method} filename={path}>
      {sampleRequest}
    </Pre>
  );
};

export default Request;
