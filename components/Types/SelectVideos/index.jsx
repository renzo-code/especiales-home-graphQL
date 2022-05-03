import React from 'react'

import styled from 'styled-components'
import BlockVideo from './BlockVideo'
import { isEmpty } from 'ramda'

const SelectVideos = ({ title, typeVideo, onClick, index, idQuestion, answerPainted }) => {
  const posterDefault = "https://media.cdn.republica.gt/032022/1647294957034.webp?cw=753&ch=423&extw=jpg"

  return(
    <Content id={`${index + 1}`}>
      <Title>{title}</Title>
      <WrapperVideos>
        {
          !isEmpty(typeVideo) &&
            typeVideo.map((item, i) => {
              return(
                <>
                  <BlockVideo
                    answerPainted={answerPainted}
                    idReponse={item?.idReponse}
                    key={i}
                    onClick={() => onClick(index, item, title, idQuestion)}
                    url={item?.multimedia?.path}
                    poster={posterDefault}
                    nameButton={item?.text}
                  />
                </>
              )
            })
        }
      </WrapperVideos>
    </Content>
  )
}

export default SelectVideos

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
  width: 100%;
  font-size: 25px;
  text-align: center;
  margin: 25px auto 10px;
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
const WrapperVideos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  height: auto;
`