import { OpenAPIV3_1 } from 'openapi-types';

import React from 'react';

import { useRequestParameters, useResponseInfo } from 'hooks/openapi';

import Parameters from './Parameters';

import Request from './Request';

import Response from './Response';

import Markdown from './shared/Markdown';

interface EndpointProps {
  path: string;
  method: string;
  methodInfo: OpenAPIV3_1.OperationObject;
  schemas: OpenAPIV3_1.Document;
}

const Endpoint: React.FC<EndpointProps> = ({
  path,
  method,
  methodInfo,
  schemas,
}) => {
  const requestParameters = useRequestParameters(schemas, path, method);
  const response = useResponseInfo(methodInfo, schemas.components?.schemas);

  if (!methodInfo.summary) {
    return null;
  }

  const summaryName = methodInfo.summary.replace(/ /g, '-').toLowerCase();

  return (
    <div
      id={summaryName}
      className="border-t py-14 border-gray-200 dark:border-zinc-800"
    >
      <div className="flex flex-col lg:flex-row">
        <div className=" lg:w-1/2">
          <h2 className="font-medium text-2xl">{methodInfo.summary}</h2>
          {methodInfo.description && (
            <Markdown>{methodInfo.description}</Markdown>
          )}
          <Parameters params={requestParameters?.objectProperties} />
        </div>
        <div className="mt-2  lg:w-2/5 lg:ml-20">
          <Request
            baseUrl={schemas.servers?.[0]?.url}
            path={path}
            method={method}
            params={requestParameters?.objectProperties}
          />
          <Response response={response} />
        </div>
      </div>
    </div>
  );
};

export default Endpoint;
