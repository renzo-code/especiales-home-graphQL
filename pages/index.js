import React from 'react'
import styled from 'styled-components'

import { QUERY_CONTENT_GET } from '../graphql/querys/contentGet.query'
import { createApolloClient } from '../graphql/helpers/apollo-client'
import Layout from '../layout'
import ViewHome from '../components/view/home'
import Tabs from 'components/Tabs'
import { prop } from 'ramda'


const Home = (props) => {
  const { dataGet } = props

  const NewsSpecialData = prop( "data", prop("packages", dataGet))  
    
  console.log('NewsSpecialData', NewsSpecialData)
  return (
    <Layout>
      <Tabs NewsSpecialData={NewsSpecialData} />
    </Layout>
  )
}

export default Home

Home.getInitialProps = async (ctx) => {
  let contentGet = null

  try {
    const response = await createApolloClient().query({
      query: QUERY_CONTENT_GET
    })
    console.log('ctx', ctx)

    contentGet = response
  } catch (error) {
    console.log('error', error)
    contentGet = {}
  }

  return {
    dataGet: contentGet.data || {}
  }
}
