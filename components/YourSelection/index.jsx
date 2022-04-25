import React from 'react'

import styled from 'styled-components'
import Button from 'components/Button'
import OptionResponse from './Option'
import { isEmpty } from 'ramda'

const YourSelection = ({arrayResponse}) => {
  return(
    <ContainerSelection>
      <Title>TU SELECCIÓN</Title>
      <Wrapper>
        {
          !isEmpty(arrayResponse) &&
            arrayResponse?.map((item, i) => {
              console.log('item', item)
              return(
                <OptionResponse
                  key={i}
                  nameBtn={item?.title}
                  nPregunta={item?.indexTrivia + 1}
                />
              )
            })
        }
      </Wrapper>
    </ContainerSelection>
  )
}

export default YourSelection

const ContainerSelection = styled.div`
  height: auto;
  width: 100%;
  margin: 20px auto;
  /* background-color: green; */
`
const Title = styled.h1`
  padding: 10px 0;
  font-size: 25px;
  text-align: center;
  letter-spacing: -0.2px;
  font-family: 'Roboto', sans-serif;
  &::after {
    display: block;
    content: "";
    height: 4px;
    width: 110px;
    background-color: #DB2237;
    margin: 5px auto 10px;
  }
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: auto;
`