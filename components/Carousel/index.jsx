import React from 'react'

import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import { DataHistorys } from "../../const"


import SwiperCore, {
  Autoplay, Pagination, Navigation
} from 'swiper/core';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Carousel = () => {
  return (
    <div className='wrapper'>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={1}
        
      >
        <SwiperSlide>
          <NewsBlock>
            <WrapImg>
              <img src='https://imgmedia.larepublica.pe/640x377/larepublica/original/2023/02/17/63d9491542192e4843652adb.webp' alt='' />
              <h2>
                TITULAR DE LA NOTICIA TITULAR DE LA NOTICIA
                ITULAR DE LA NOTICIA TITULAR DE LA NOTICIA 111111
              </h2>
            </WrapImg>
          </NewsBlock>
        </SwiperSlide>
        <SwiperSlide>
          <NewsBlock>
            <WrapImg>
              <img src='https://imgmedia.larepublica.pe/640x377/larepublica/original/2023/02/17/63d9491542192e4843652adb.webp' alt='' />
              <h2>
                TITULAR DE LA NOTICIA TITULAR DE LA NOTICIA
                ITULAR DE LA NOTICIA TITULAR DE LA NOTICIA 2222222
              </h2>
            </WrapImg>
          </NewsBlock>
        </SwiperSlide>
        <SwiperSlide>
          <NewsBlock>
            <WrapImg>
              <img src='https://imgmedia.larepublica.pe/640x377/larepublica/original/2023/02/17/63d9491542192e4843652adb.webp' alt='' />
              <h2>
                TITULAR DE LA NOTICIA TITULAR DE LA NOTICIA
                ITULAR DE LA NOTICIA TITULAR DE LA NOTICIA 3333333
              </h2>
            </WrapImg>
          </NewsBlock>
        </SwiperSlide>
        <SwiperSlide>
          <NewsBlock>
            <WrapImg>
              <img src='https://imgmedia.larepublica.pe/640x377/larepublica/original/2023/02/17/63d9491542192e4843652adb.webp' alt='' />
              <h2>
                TITULAR DE LA NOTICIA TITULAR DE LA NOTICIA
                ITULAR DE LA NOTICIA TITULAR DE LA NOTICIA4 44444444
              </h2>
            </WrapImg>
          </NewsBlock>
        </SwiperSlide>
        <SwiperSlide>
          <NewsBlock>
            <WrapImg>
              <img src='https://imgmedia.larepublica.pe/640x377/larepublica/original/2023/02/17/63d9491542192e4843652adb.webp' alt='' />
              <h2>
                TITULAR DE LA NOTICIA TITULAR DE LA NOTICIA
                ITULAR DE LA NOTICIA TITULAR DE LA NOTICIA 55555555
              </h2>
            </WrapImg>
          </NewsBlock>
        </SwiperSlide>
      </Swiper>
      <style jsx>{`
        .wrapper{
          width: 100%;
        }
      `}</style>
    </div>
  )
}

export default Carousel

const NewsBlock = styled.div`
  height: 350px;
  width: 300px;
  display: none;

  @media (max-width: 1020px){
    display: block;
    max-width: 250px;
    width: 100%;
    height: 300px;
    margin: 0 auto;
    /* display: flex;
    justify-content: center; */
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
    font-size: 19px;
    color: white;
    padding: 10px;
    line-height: 25px;
    word-break: normal;
    
    &:hover{
      text-decoration: underline;
      transition: 0.7s;
    }
  }
`