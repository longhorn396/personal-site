import { Container } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'

type DefaultLayoutProps = {
  description: string
  title: string
  children?: React.JSX.Element[]
  sections?: {
    to: string
    display: string
  }[]
}

const DefaultLayout = ({ description, title, children, sections }: DefaultLayoutProps): React.JSX.Element => {
  const pageDesc = description || 'Devin Drawhorn'
  const pageTitle = title || 'Devin Drawhorn'
  return (
    <>
      <Navbar sections={sections} />
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="image" content="/og.png" />
        <meta name="og:title" content={pageTitle} />
        <meta name="og:description" content={pageDesc} />
        <meta name="og:image" content="/og.png" />
        <meta name="og:url" content="https://drawhorn.click" />
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content="/android-chrome-512x512.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Container maxWidth="lg" role="main">
        {children ? children : ''}
      </Container>
    </>
  )
}

export default DefaultLayout
