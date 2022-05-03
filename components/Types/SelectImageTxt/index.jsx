import React from 'react'

import styled from 'styled-components'
import Options from './Options'
import { isEmpty } from 'ramda'

const SelectImageTxt = ({ title, typeImageText, dataImg, onClick, index, idQuestion, answerPainted }) => {
  return (
    <Content id={`${index + 1}`}>
      <WrapperContent>
        <Title>{title}</Title>
        <WrapperImage>
          <Image src={dataImg?.path} alt='imagen' />
        </WrapperImage>
        <WrapperBtn>
          {
            !isEmpty(typeImageText) &&
            typeImageText?.map((item, i) => {
              return (
                <>
                  <Options
                    answerPainted={answerPainted}
                    idReponse={item?.idReponse}
                    key={i}
                    onClick={() => onClick(index, item, title, idQuestion)}
                    nameBtn={item?.text}
                  />
                </>
              )
            })
          }
        </WrapperBtn>
      </WrapperContent>
    </Content>
  )
}

export default SelectImageTxt

const Content = styled.div`
  width: 90%;
  min-height: 400px;
  height: 100%;
  margin: 20px auto;
`
const WrapperContent = styled.div`
  height: 100%;
  margin: 15px auto;
`
const Title = styled.h1`
  width: 100%;
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
const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  width: auto;
  margin-bottom: 10px;
`
const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
`
const WrapperBtn = styled.div`
  display: flex;
  justify-content: space-around;
`