import { useTheme } from '@mui/material'
import { documentGetInitialProps, DocumentHeadTags, DocumentHeadTagsProps } from '@mui/material-nextjs/v16-pagesRouter'
import { DocumentContext, DocumentProps, Head, Html, Main, NextScript } from 'next/document'
import * as React from 'react'

export default function MyDocument(props: DocumentProps & DocumentHeadTagsProps): React.JSX.Element {
  const theme = useTheme()
  return (
    <Html lang="en">
      <Head>
        {/* PWA primary color */}
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => await documentGetInitialProps(ctx)
