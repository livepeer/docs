import React from 'react';

import Pre from './shared/Pre';

interface ResponseProps {
  response: any;
}

const Response: React.FC<ResponseProps> = ({ response }) => {
  const is204Response = response == '204 - No Content';
  const formattedResponse = is204Response
    ? response
    : JSON.stringify(response, null, 2);

  return (
    <Pre
      className={is204Response ? 'italic' : ''}
      filename={`RESPONSE`}
      language="json"
    >
      {formattedResponse}
    </Pre>
  );
};

export default Response;
