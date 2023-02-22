/* eslint-disable @next/next/no-img-element */

import React from 'react'
import styled from 'styled-components'
// import Link from 'next/link'

const NoticeCard = ({ title, redirect, image, mounth, i }) => {
  return (
    <>
      <a target="_blank" rel='noreferrer' href={redirect}>
        <BlockNotice key={i}>
          <WrapperImage>
            <img src={image} alt={title} height="" width=""/>
          </WrapperImage>
          <WrapperText>
            <h3>{mounth}</h3>
            <h2>{title}</h2>
          </WrapperText>
        </BlockNotice>
      </a>
    </>
  )
}

export default NoticeCard

const BlockNotice = styled.div`
  height: auto;
  max-width: 400px;
  width: 100%;
  margin: 0 auto 20px;
  background-color: white;
`
const WrapperImage = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;

  img {
    height: auto;
    width: 100%;
    object-fit: cover;

    &:hover{
      transition: 0.9s;
      transform: scale(1.1);
      filter: grayscale(1);
      cursor: pointer;
    }
  }
`
const WrapperText = styled.div`
  padding: 15px;
  bottom: 0;
  min-height: 130px;
  h2{
    font-size: 20px;
    color: black;
    letter-spacing: 0.5px;
    width: 100%;
    line-height: 22px;
    font-weight: 100;
    /* text-shadow: rgb(0 0 0) 0px 0px 0.2em, rgb(0 0 0) 0px 0px 0.2em, rgb(0 0 0) 0px 0px 0.2em; */
    /* background-color: rgba(0,0,0,0.5); */

    &:hover{
      text-decoration: underline;
      cursor: pointer;
    }

    @media (max-width: 500px) {
      font-size: 16px;
      line-height: 19px;
    }
  }

  h3{
    font-weight: 900;
    font-size: 18px;
    padding-bottom: 10px;
  }
`