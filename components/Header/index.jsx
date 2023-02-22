import React from 'react'

import styled from 'styled-components'
import SocialBar from '../SocialBar'

const Header = () => {
  return(
    <Content>
      <WrapperImg>
        <Logo src='https://origin.cronosmedia.glr.pe/large/2023/01/27/lg_63d4558adf3bf1086c392bb8.jpg' />
      </WrapperImg>
      <SocialBar />
    </Content>
  )
}

export default Header

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 74px;
  background-color: #D3D3D3;
  border-bottom: red solid 4px;
`
const WrapperImg = styled.div`
  height: auto;
  width: 190px;
  margin-left: 20px;

  @media (max-width: 470px){
    width: 210px;
    margin-left: 10px;
  }
`
const Logo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`