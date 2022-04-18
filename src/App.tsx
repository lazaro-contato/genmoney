import React, {useState} from 'react'
import {GlobalStyle} from './styles/global'
import {Header} from './components/Header'
import {Dashboard} from "./components/Dashboard";
import Modal from "react-modal";

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
    <div className="App">
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalIsOpen}
        onRequestClose={handleCloseNewTransactionModal

        }
      >
        <h1>cadastrar</h1>
      </Modal>
      <GlobalStyle />
    </div>
  )
}

export default App
