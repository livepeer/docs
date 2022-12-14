import type { AppProps } from 'next/app';

import * as React from 'react';

import { Providers } from '../components/core';

import '../styles/globals.css';

function App({ Component, pageProps }: AppProps<{ dehydratedState: string }>) {
  const getLayout =
    (Component as any).getLayout || ((page: React.ReactElement) => page);

  return (
    <Providers dehydratedState={pageProps?.dehydratedState}>
      {getLayout(<Component {...pageProps} />)}
    </Providers>
  );
}

export default App;
