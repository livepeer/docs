import React from 'react';

import Pre from './shared/Pre';

interface ResponseProps {
  response: any;
}

const Response: React.FC<ResponseProps> = ({ response }) => {
  const formattedResponse = JSON.stringify(response, null, 2);

  return <Pre filename={`RESPONSE`}>{formattedResponse}</Pre>;
};

export default Response;
