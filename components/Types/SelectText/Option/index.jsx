import React from 'react'

import Button from 'components/Button'

const Option = ({nameBtn, onClick, answerPainted, idReponse}) => {
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

export default Option
