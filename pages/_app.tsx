import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import MainLayout from '@modules/layouts/MainLayout';
import { NextPage } from 'next'
import ThemeProvider from 'libs/context/ThemeProvider'

import GlobalStyle from 'styles/global'
import '../styles/prism-theme.css';
import '../styles/easings.min.css';

interface CustomAppProps extends AppProps {}

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = CustomAppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactElement) => <MainLayout>{page}</MainLayout>)

  return (
    <ThemeProvider>
      <GlobalStyle />
      { getLayout(<Component {...pageProps} />) }
    </ThemeProvider>
  )
}

export default MyApp
