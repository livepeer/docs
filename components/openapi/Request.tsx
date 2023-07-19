import React from 'react';

import useCodeSnippets from 'hooks/openapi/useCodeSnippets';

import { ParameterInfo } from './Parameters';

import Pre from './shared/Pre';

interface RequestProps {
  baseUrl: string | undefined;
  params: ParameterInfo[] | undefined;
  method: string;
  path: string;
}

const Request: React.FC<RequestProps> = ({
  baseUrl,
  params,
  method,
  path,
}: RequestProps) => {
  const codeSnippets = useCodeSnippets(baseUrl, params, method, path);

  return (
    <Pre
      method={method}
      filename={path}
      fromRequest={true}
      requestSamples={codeSnippets}
    />
  );
};

export default Request;
