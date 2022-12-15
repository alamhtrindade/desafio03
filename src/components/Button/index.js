import React from 'react'
import {ButtonContainer}  from './styles'

const Button = ({name, onClick}) => {
  return (
    <ButtonContainer>{name}</ButtonContainer>
  )
}

export { Button }