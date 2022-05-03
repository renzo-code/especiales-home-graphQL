import React from 'react'

import styled from 'styled-components'
import Option from './Option'

const SelectOptions = ({ title, typeImage, onClick, index, idQuestion, answerPainted }) => {
  // console.log('typeImage', typeImage)
  return(
    <Content id={`${index + 1}`}>
      <Title>{title}</Title>
      <WrapperOptions>
        {
          typeImage?.map((item, i) => {
            return(
              <>
                <Option
                  answerPainted={answerPainted}
                  idReponse={item?.idReponse}
                  key={i}
                  onClick={() => onClick(index, item, title, idQuestion)}
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
  width: 90%;
  min-height: 400px;
  height: 100%;
  margin: 20px auto;
  @media (max-width: 580px){
    width: 98%;
  }
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