const fetchQuery = async (strQuery) => {
  try {
    const response = await fetch(endPoint, {
      method: 'post',
      body: JSON.stringify({
        query: strQuery
      }),
      headers: {
        'Content-Type': 'application/json',
        'token_id': tokenGraphql
      }
    })
    const json = await response.json()
    if (response?.status !== 200) { throw Error(`query incorrect: ${strQuery}!!`) }
    return json
  } catch (error) {
    console.log('error', error)
  }
}