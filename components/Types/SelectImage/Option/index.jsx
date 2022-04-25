import React from 'react'

import styled from 'styled-components'
import Button from '../../../Button'

const Option = ({ image, alt, nameBtn, onClick }) => {
  return (
    <OptionTrivia>
      <WrapperImage>
        <Image src={image} alt={alt} />
      </WrapperImage>
      <Button
        onClick={onClick}
        nameBtn={nameBtn}
      />
    </OptionTrivia>
  )
}

export default Option

const OptionTrivia = styled.div`
  width: 230px;
  max-height: 300px;
  height: auto;
  /* background-color: green; */
  margin-bottom: 10px;
`
const WrapperImage = styled.div`
  width: 100%;
  height: 200px;
  /* background-color: peru; */
  border-radius: 5px;
`
const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 295px;
  object-fit: cover;
  border-radius: 5px;
  object-position: top;
`