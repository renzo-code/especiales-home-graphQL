import React from 'react'

import styled from 'styled-components'
import Option from './Option'

const SelectOptions = ({ title, typeImage, onClick, index }) => {
  // console.log('typeImage', typeImage)
  return(
    <Content>
      <Title>{title}</Title>
      <WrapperOptions>
        {
          typeImage?.map((item, i) => {
            return(
              <>
                <Option
                  key={i}
                  onClick={() => onClick(index, item, i)}
                  nameOption={item?.text} 
                  imageLink={item?.multimedia?.path}
                />
              </>
            )
          })
        }
      </WrapperOptions>
    </Content>
  )
}

export default SelectOptions

const Content = styled.div`
  width: 70%;
  min-height: 400px;
  height: 100%;
  margin: 15px auto;
`
const Title = styled.h1`
  width: 70%;
  font-size: 25px;
  text-align: center;
  margin: 0 auto;
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
  flex-wrap: wrap;
  justify-content: space-around;
  height: auto;
  width: auto;
`