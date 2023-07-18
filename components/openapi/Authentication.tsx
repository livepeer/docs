import { Code } from 'nextra/components';

import React from 'react';

import Pre from './shared/Pre';

const Authentication: React.FC = () => {
  return (
    <div
      id={'authentication'}
      className="border-t py-14 border-gray-200 dark:border-zinc-800"
    >
      <div className="flex flex-col lg:flex-row">
        <div className=" lg:w-1/2">
          <h2 className="font-medium text-2xl">Authentication</h2>
          <p className="mt-4">
            Livepeer API uses API keys to verify and authorize requests. You can
            manage and review your API keys through Livepeer Studio.
            <br /> <br />
            You need to pass your API key in the header with <Code>
              Bearer
            </Code>{' '}
            prefix while sending a request
            <br /> <br />
            It's important to note that your API keys come with significant
            privileges, so it's essential to keep them safe and secure! Refrain
            from sharing your secret API keys in GitHub or other publicly
            accessible places
          </p>
        </div>
        <div className="mt-2 lg:w-2/5 lg:ml-20">
          <Pre filename="Your API Key">Authorization: Bearer API_KEY</Pre>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
