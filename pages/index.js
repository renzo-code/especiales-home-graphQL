import React from 'react'
import styled from 'styled-components'

import { QUERY_CONTENT_SHOW } from '../graphql/querys/contentShow.query'
import { QUERY_CONTENT_GET } from '../graphql/querys/contentGet.query'
import { createApolloClient } from '../graphql/helpers/apollo-client'
import Layout from '../layout'
import ViewHome from '../components/view/home'

const Home = (props) => {
  const { dataShow, dataGet } = props
  // console.log('dataShow', dataShow)
  return (
    <Layout>
      <ViewHome dataShow={dataShow} dataGet={dataGet} />
    </Layout>
  )
}

export default Home

Home.getInitialProps = async (ctx) => {
  let contentShow = null
  let contentGet = null

  try {
    const res = await createApolloClient().query({
      query: QUERY_CONTENT_SHOW
    })
    const response = await createApolloClient().query({
      query: QUERY_CONTENT_GET
    })
    console.log('ctx', ctx)

    contentShow = res
    contentGet = response
  } catch (error) {
    console.log('error', error)
    contentShow = {}
    contentGet = {}
  }

  return {
    dataShow: contentShow.data || {},
    dataGet: contentGet.data || {}
  }
}

