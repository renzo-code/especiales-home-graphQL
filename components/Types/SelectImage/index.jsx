import React from 'react'

import styled from 'styled-components'
import Option from './Option'
import { isEmpty } from 'ramda'
import { SEND_RESPONSE_DATA } from 'graphql/mutation'
import { useMutation } from '@apollo/client'


const SelectImage = ({ title, typetxtImageBox, onClick, index }) => {
  
  const [addResponse, { data, loading, error, reset }] = useMutation(SEND_RESPONSE_DATA)
  if (loading) return 'Enviando...'
  if (error) return `Error de envio ${error.message}`
  
  return (
    <Content>
      <Title>{title}</Title>
      <WrapperOptions>
      {
        !isEmpty(typetxtImageBox) &&
          typetxtImageBox.map((item, i) => {
            return(
              <Option
                onClick={() => onClick(index, item, i)}
                key={i}
                image={item?.multimedia?.path}
                alt={item?.multimedia?.data?.alt}
                nameBtn={item?.multimedia?.data?.title}
              />
            )
          })
      }
      </WrapperOptions>
    </Content>
  )
}

export default SelectImage

const Content = styled.div`
  width: 90%;
  min-height: 400px;
  height: 100%;
  /* background-color: blue; */
  margin: 0 auto;
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
const WrapperOptions = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  /* background-color: yellow; */
  min-height: 350px;
  padding-top: 10px;
`