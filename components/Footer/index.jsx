import React from 'react'

import styled from 'styled-components'

const Footer = () => {
  return (
    <Content>
      <Wrapper>
        <Tip>Redacción:</Tip><Text>La República</Text>
      </Wrapper>
      <Wrapper>
        <Tip>Desarrollo Web:</Tip><Text>Renzo Neira</Text>
      </Wrapper>
      <br></br>
      <Text>© Grupo La República</Text>
      <br></br>
      <Text>Todos los derechos reservados.</Text>
      <br></br><br></br>
    </Content>
  )
}

export default Footer

const Content = styled.div`
  height: auto;
  width: 100%;
  margin: 0 auto;
  padding: 20px 0 0;
  background-color: #F1F1F0;
`
const Tip = styled.h2`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`
const Text = styled.h2`
  text-align: center;
  font-size: 14.5px;
  font-weight: 100;
  padding-left: 5px;
  color: #545b6a;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 7px;
`