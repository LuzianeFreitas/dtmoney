import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';


import closeImg from '../../assets/botao-fechar.svg';
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';
import { useTransactions } from '../hooks/useTransactions';

import { Container, TransactionTypeContainer, RadioBox } from './styles';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose } : NewTransactionModalProps) {
    const { createTransaction } = useTransactions();
    // Input string state
    const [title, setTitle] = useState('');
    // Input number state
    const [amout, setAmout] = useState(0);
    // Input checkbox(RadioBox) state
    const [category, setCategory] = useState('');

    const [type, setType] = useState('deposit');


    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amout,
            category,
            type
        })

        
        setTitle('');
        setAmout(0);
        setCategory('');
        setType('deposit');

        onRequestClose();
        
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input 
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="number" 
                    placeholder="Valor"
                    value={amout}
                    onChange={event => setAmout(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => {setType('deposit')}}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => {setType('withdraw')}}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}