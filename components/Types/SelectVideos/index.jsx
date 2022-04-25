import React from 'react'

import styled from 'styled-components'
import BlockVideo from './BlockVideo'
import { isEmpty } from 'ramda'

const SelectVideos = ({ title, typeVideo, onClick, index }) => {
  const posterDefault = "https://media.cdn.republica.gt/032022/1647294957034.webp?cw=753&ch=423&extw=jpg"

  return(
    <Content>
      <Title>{title}</Title>
      <WrapperVideos>
        {
          !isEmpty(typeVideo) &&
            typeVideo.map((item, i) => {
              return(
                <>
                  <BlockVideo
                    key={i}
                    onClick={() => onClick(index, item, i)}
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
const WrapperVideos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  height: auto;
`