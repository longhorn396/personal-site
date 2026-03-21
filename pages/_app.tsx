import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppCacheProvider } from '@mui/material-nextjs/v16-pagesRouter'
import { AppProps } from 'next/app'
import React from 'react'
import { theme } from '../components/DefaultTheme'

export default function MyApp(props: AppProps): React.JSX.Element {
  const { Component, pageProps } = props
  return (
    <AppCacheProvider {...pageProps}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <style>{`
        body {
          margin: 0;
        }
        .center {
          justify-content: center;
          text-align: center;
        }
        .dark-info {
          color: ${theme.palette.info.dark};
        }
        section {
          padding: 100px 0px;
        }
        section:last-child {
          padding-bottom: 25px;
        }
      `}</style>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  )
}
