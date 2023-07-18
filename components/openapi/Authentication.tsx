import { Code } from 'nextra/components';

import React from 'react';

import Pre from './shared/Pre';
import Link from 'next/link';

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
            Livepeer API uses API keys (
            <Link
              href={
                'https://swagger.io/docs/specification/authentication/bearer-authentication/'
              }
              className="dark:text-green-400 text-blue-500"
            >
              Bearer Authentication
            </Link>
            ) to verify and authorize requests. You can manage and review your
            API keys through Livepeer Studio. You need to pass your API key in
            the header with <Code>Bearer</Code> prefix while sending a request
          </p>
          <p className="mt-4">
            It's important to note that your API keys come with significant
            privileges, so it's essential to keep them safe and secure! Refrain
            from sharing your secret API keys in GitHub or other publicly
            accessible places
          </p>
          <p className="mt-4">
            By default, API keys can only be used from a backend server. This is
            to ensure maximum security and prevent that you accidentally expose
            your account by including the secret API key in some public web
            page. More info about enabling CORS can be found{' '}
            <Link
              className="dark:text-green-400 text-blue-500"
              href={
                'https://docs.livepeer.org/guides/developing/quickstart.en-US#enable-cors-optional'
              }
            >
              here.
            </Link>
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
