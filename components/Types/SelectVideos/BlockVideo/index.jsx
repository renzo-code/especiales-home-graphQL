import React from 'react'

import ReactPlayer from 'react-player'
import styled from 'styled-components'

const BlockVideo = ({url, poster, nameButton, onClick}) => {
  return (
    <WrapperVideo>
      <ReactPlayer
        url={url}
        playing
        width="100%"
        height="70%"
        light={poster}
        controls="true"
      />
      <BlockBtn>
        <ButtonVideo onClick={onClick}>{nameButton}</ButtonVideo>
      </BlockBtn>
    </WrapperVideo>
  )
}

export default BlockVideo

const WrapperVideo = styled.div`
  width: 350px;
  height: 280px;
`
const BlockBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  width: 100%;
  height: auto;
`
const ButtonVideo = styled.button`
  height: 55px;
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  border-radius: 5px;
  outline: none;
  border: 3px solid #BEBEBE;
  &&:hover{
    background-color: #D82239;
    color: white;
    cursor: pointer;
    border: none;
  }
`