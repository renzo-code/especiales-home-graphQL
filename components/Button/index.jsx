import React from 'react'

import styled from 'styled-components'

const Button = ({nameBtn, onClick}) => {
  return(
    <Btn
      onClick={onClick}
    >
      {nameBtn}
    </Btn>
  )
}

export default Button

const Btn = styled.button`
  height: 55px;
  width: 100%;
  /* background-color: aliceblue; */
  margin-top: 40px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 5px;
  outline: none;
  border: 3px solid #BEBEBE;
  max-width: 230px;
  &&:hover{
    background-color: #D82239;
    color: white;
    cursor: pointer;
    border: none;
  }
`