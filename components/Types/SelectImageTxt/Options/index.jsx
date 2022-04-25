import React from 'react'

import styled from 'styled-components'
import Button from 'components/Button'

const Options = ({nameBtn, onClick}) => {
  return(
    <>
        <Button onClick={onClick} nameBtn={nameBtn}/>
    </>
  )
}

export default Options


