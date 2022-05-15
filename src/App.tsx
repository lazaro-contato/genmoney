import React, {useState} from 'react'
import {GlobalStyle} from './styles/global'
import {Header} from './components/Header'
import {Dashboard} from "./components/Dashboard";
import Modal from "react-modal";
import {NewTransactionsModal} from "./components/NewTransactionsModal";
import {TransactionsProvider} from "./hooks/useTransactions";

Modal.setAppElement('#root')

const App = (): JSX.Element => {

  const [isNewTransactionModalIsOpen, setIsNewTransactionModalIsOpen] = useState(false)

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalIsOpen(true)
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalIsOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionsModal
        isOpen={isNewTransactionModalIsOpen}
        onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle />
    </TransactionsProvider>
  )
}

export default App
