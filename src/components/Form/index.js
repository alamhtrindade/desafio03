import React from 'react'

import { Container } from './styles'
import { Input } from '../Input'
import { Button } from '../Button'

const Form = () => {
  return (
    <Container>
        <h1>Login</h1>
        <Input PlaceHolder="Usuário" />
        <Input PlaceHolder="Senha" />
        <Button name="Entrar"/>
    </Container>
  )
}

export { Form }