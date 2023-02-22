/* eslint-disable @next/next/no-img-element */
import React from 'react'

import styled from 'styled-components'


const Historys = () => {
  return (
    <Wrapper>
      <NewsBlock>
        <WrapImg>
          <img src='https://imgmedia.larepublica.pe/640x377/larepublica/original/2023/02/17/63d9491542192e4843652adb.webp' alt=''/>
          <h2>
            TITULAR DE LA NOTICIA TITULAR DE LA NOTICIA
            ITULAR DE LA NOTICIA TITULAR DE LA NOTICIA
          </h2>
        </WrapImg>
      </NewsBlock>
      <NewsBlock>
        <WrapImg>
          <img src='https://imgmedia.larepublica.pe/640x377/larepublica/original/2023/02/17/63d9491542192e4843652adb.webp' alt=''/>
          <h2>
            TITULAR DE LA NOTICIA TITULAR DE LA NOTICIA
            ITULAR DE LA NOTICIA TITULAR DE LA NOTICIA
          </h2>
        </WrapImg>
      </NewsBlock>
      <NewsBlock>
        <WrapImg>
          <img src='https://imgmedia.larepublica.pe/640x377/larepublica/original/2023/02/17/63d9491542192e4843652adb.webp' alt=''/>
          <h2>
            TITULAR DE LA NOTICIA TITULAR DE LA NOTICIA
            ITULAR DE LA NOTICIA TITULAR DE LA NOTICIA
          </h2>
        </WrapImg>
      </NewsBlock>
    </Wrapper>
  )
}

export default Historys

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  align-items: center;
  height: auto;
  width: 100%;
  margin: 25px 0;

  @media (max-width: 1020px){
    display: none;
  }
`
const NewsBlock = styled.div`
  height: 350px;
  width: 300px;

  @media (max-width: 940px){
    width: 250px;
    height: 300px;
  }
`
const WrapImg = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  cursor: pointer;
  overflow: hidden;

  img{
    height: 100%;
    width: 100%;
    object-fit: cover;

    &:hover{
      transition: 0.9s;
      transform: scale(1.1);
      filter: grayscale(1);
      cursor: pointer;
    }
  }
  
  h2{
    position: absolute;
    bottom: 0;
    font-size: 17px;
    color: white;
    padding: 10px;
    line-height: 20px;
    
    &:hover{
      text-decoration: underline;
      transition: 0.7s;
    }
  }
`