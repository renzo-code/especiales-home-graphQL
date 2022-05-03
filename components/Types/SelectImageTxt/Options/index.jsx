import React from 'react'

import styled from 'styled-components'
import Button from 'components/Button'

const Options = ({nameBtn, onClick, idReponse, answerPainted}) => {
  return(
    <>
        <Button
          answerPainted={answerPainted}
          idReponse={idReponse}
          onClick={onClick} 
          nameBtn={nameBtn}
        />
    </>
  )
}

export default Options


