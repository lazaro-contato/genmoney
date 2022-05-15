import React, {FormEvent, useState} from "react";
import Modal from 'react-modal'
import {Container, RadioBox, TransactionTypeContainer} from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import {useTransactions} from "../../hooks/useTransactions";

interface NewTransactionsModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export const NewTransactionsModal = ({isOpen, onRequestClose}: NewTransactionsModalProps) => {
  const {createTransaction} = useTransactions()

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault()

    await createTransaction({
      title,
      amount,
      category,
      type
    })
    setTitle('')
    setAmount(0)
    setCategory('')
    setTitle('deposit')
    onRequestClose();
  }




  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose
      }
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={onRequestClose}
      >
        <img
          src={closeImg}
          alt='Fechar modal'
          className='react-modal-close'
        />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
      <h2>Cadastrar transação</h2>
      <input
        placeholder="Título"
        onChange={event => setTitle(event.target.value)}
      />

      <input
        placeholder="Valor"
        type='number'
        value={amount}
        onChange={event => setAmount(Number(event.target.value))}
      />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => {setType('deposit')}}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt='Entrada'/>
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type='button'
            onClick={() => {setType('withdraw')}}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt='Saída'/>
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

      <input
        placeholder="Categoria"
        onChange={event => setCategory(event.target.value)}
      />

        <button type='submit'>
          Cadastrar
        </button>

      </Container>

    </Modal>
      )
}