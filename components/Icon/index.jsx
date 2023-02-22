import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const Icon = ({icon}) => {
  return (
    <WrapperIcon>
      <FontAwesomeIcon
        icon={icon}
      />
    </WrapperIcon>
  )
}

export default Icon

const WrapperIcon = styled.div`
  height: auto;
  width: 30px;
  cursor: pointer;
  margin: 0 auto;

  @media (max-width: 930px){
    width: 20px;
  }
`