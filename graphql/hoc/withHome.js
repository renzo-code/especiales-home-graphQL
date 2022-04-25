/* eslint-disable react/display-name */
import React from 'react'

import { QUERY_CONTENT_SHOW } from '../querys/contentShow.query'

// const WithHome = (Component, res) => {
//   return class extends React.Component {
//     static async getInitialProps ({apolloClient}){
//       const data = await apolloClient.query({
//         query: QUERY_CONTENT_SHOW
//       }).then(res => res.data)

//       return {
//         data: data || {}
//       }
//     }
//     render() {
//       return <Component {...this.props} />
//     }
//   }
// }
// 
// export default WithHome




// const WithHome = (Component) => {
//   return class extends React.Component {
//     static async getInitialProps (cntx){
//       console.log('cntx', cntx)
//       return {
//         test: 'test'
//       }
//     }
//     render(){
//       return <Component {...this.props} />
//     }
//   }
// }

// export default WithHome