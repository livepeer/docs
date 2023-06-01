import { OpenAPIV3_1 } from 'openapi-types';

import React from 'react';

import Endpoint from './openapi/Endpoint';

import Pre from './openapi/shared/Pre';

interface APIReferenceProps {
  openApiData?: OpenAPIV3_1.Document;
}

const APIReference: React.FC<APIReferenceProps> = ({ openApiData }) => {
  const renderEndpoints = () => {
    if (!openApiData || !openApiData.paths) return null;

    return Object.entries(openApiData.paths).map(([path, pathInfo]) => {
      if (!pathInfo) return null;

      return Object.entries(pathInfo).map(([method, methodInfo]) => {
        if (methodInfo && typeof methodInfo === 'object') {
          const operationInfo = methodInfo as OpenAPIV3_1.OperationObject;
          const key = `${path}-${method}`;

          return (
            <Endpoint
              key={key}
              path={path}
              schemas={openApiData}
              method={method}
              methodInfo={operationInfo}
            />
          );
        }

        return null;
      });
    });
  };

  const renderGettingStarted = () => {
    if (!openApiData || !openApiData.servers) return null;

    const baseUrl = openApiData.servers[0]?.url;

    return (
      <div className="flex mb-20">
        <div className="w-1/2">
          <h1 className="text-3xl font-semibold">Livepeer API Reference</h1>
          <p className="mt-4">
            Welcome to the Livepeer API reference docs. Here you'll find all the
            endpoints exposed on the standard Livepeer API, learn how to use
            them and what they return.
          </p>
          <p className="mt-4">
            The Livepeer API is organized around REST, has predictable
            resource-oriented URLs, accepts form-encoded request bodies, returns
            JSON-encoded responses, and uses standard HTTP response codes,
            authentication, and verbs.
          </p>
        </div>
        <div className="mt-2 w-2/5 ml-20">
          <h3 className="font-semibold uppercase">Just Getting Started?</h3>
          <p className="mt-2">
            Head over to livepeer.studio, create an account and start building
            with Livepeer.
          </p>
          <Pre filename="BASE URL">{baseUrl}</Pre>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-8">
      {openApiData && (
        <>
          {renderGettingStarted()}
          {renderEndpoints()}
        </>
      )}
    </div>
  );
};

export default APIReference;
