import React from 'react'

import styled from 'styled-components'

const Option = ({nameOption, imageLink, onClick}) => {
  return(
    <WrapperBtn onClick={onClick}>
      <WrapperImage>
        <Img src={imageLink}/>
      </WrapperImage>
      <Title>{nameOption}</Title>
    </WrapperBtn>
  )
}

export default Option

const WrapperBtn = styled.div`
  height: 230px;
  width: 300px;
  border-radius: 5px;
  border: solid 1px #BFBFBF;
  margin-bottom: 30px;
  &:hover{
    background-color: #D82239;
    cursor: pointer;
    color: white;
  }
`
const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 180px;
`
const Title = styled.h1`
  font-size: 17px;
  text-align: center;
  margin-top: 10px;
`
const Img = styled.img`
  height: auto;
  width: auto;
`