import { CacheProvider, EmotionCache } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppProps } from 'next/app'
import React from 'react'
import createEmotionCache from '../components/createEmotionCache'
import { theme } from '../components/DefaultTheme'

const clientSideEmotionCache = createEmotionCache()

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps): React.JSX.Element {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
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
    </CacheProvider>
  )
}
