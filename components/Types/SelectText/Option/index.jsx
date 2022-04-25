import React from 'react'

import Button from 'components/Button'

const Option = ({nameBtn, onClick}) => {
  return(
    <>
        <Button onClick={onClick} nameBtn={nameBtn}/>
    </>
  )
}

export default Option
