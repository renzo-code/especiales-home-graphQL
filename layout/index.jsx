import React from 'react'

import NextHead from 'next/head'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <NextHead>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.larepublica.pe/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.larepublica.pe/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.larepublica.pe/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="https://cdn.larepublica.pe/favicon.ico"></link>
        <link rel="canonical" href="" />
        <title>Especiales LR [Home]</title>
        <meta name="title" content="" />
        <meta name="description" content="" />
        <meta httpEquiv="content-language" content="es" />
        <meta name="author" content="LR Especiales" />

        <meta name="googlebot" content="index,follow" />
        <meta name="bingbot" content="index,follow" />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="alternate" type="application/rss+xml" href="https://cdn.mysitemapgenerator.com/shareapi/rss/2806433641" />

        {/* Metadatos Twitter */}
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:url" content="" />
        <meta property="twitter:image" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@larepublica_pe" />
        <meta name="twitter:creator" content="@larepublica_pe" />
        <meta name="twitter:width" content="828" />
        <meta name="twitter:height" content="450" />

        {/* Metadatos Facebook */}
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="828" />
        <meta property="og:image:height" content="450" />
        <meta property="og:site_name" content="La República" />
        <meta property="fb:pages" content="145820412845" />
        <meta property="fb:app_id" content="602624269799095" />
      </NextHead>
      <Header/>
      <Wrapper>
        <ContainerMain>
          {children}
        </ContainerMain>
      </Wrapper>
      <Footer/>
    </>
  )
}

export default Layout

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`
const ContainerMain = styled.main`
  width: 100%;
  margin: auto;
  padding: 0;
  min-height: calc(100vh - 450px);
  font-family: Arial, Helvetica, sans-serif;
  background-color: white;
`