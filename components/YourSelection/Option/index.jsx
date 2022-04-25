import React from 'react'
import styled from 'styled-components'

const OptionResponse = ({nameBtn, onClick, nPregunta}) => {
  return(
    <>
      <Btn
        onClick={onClick}
      >
        <TitleButton>Pregunta: {nPregunta}</TitleButton>
        {nameBtn}
      </Btn>
    </>
  )
}

export default OptionResponse


const Btn = styled.div`
  height: auto;
  width: 100%;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 5px;
  outline: none;
  border: 3px solid #BEBEBE;
  max-width: 230px;
  margin-left: 15px;
  padding: 5px;
  text-align: center;
  &&:hover{
    padding-top: 10px;
    background-color: #D82239;
    color: white;
    cursor: pointer;
    border: none;
  }
`
const TitleButton = styled.h2`
  font-size: 18px;
  text-align: center;
  height: auto;
`