import React, {useState} from 'react'
import logo from '../../assets/logo.svg'
import Modal from 'react-modal'
import {Container, Content} from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export const Header = ({onOpenNewTransactionModal}: HeaderProps) => {

  return (
    <Container>
      <Content>
        <img src={logo} alt="genmoney" />
        <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
      </Content>
    </Container>
  )
}
