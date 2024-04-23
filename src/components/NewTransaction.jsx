


import React, { useState } from 'react'

import { Box,Button,TextField,Typography, styled } from '@mui/material'

const Container = styled(Box)`
display: flex;
flex-direction: column;
& > h5, & > div, & > button {
    margin-top: 30px

    }
`

const StyledButton = styled(Button)`
    background: #445A6F;
    color: #fff;
`;

const NewTransaction = ({setTransaction}) => {

    const [text,setText] = useState('');
    const [amount,setAmount] = useState();


    const addTransaction = () =>{
        const transaction = {
            id:Math.floor(Math.random()*10000 + 1),
            text:text,
            amount:+amount
        }
        setTransaction(prevState => [transaction,...prevState]);
    }
  return (
    <Container>
        <Typography variant='h5'>New Transaction</Typography>
        <TextField label="Enter expense" onChange={(e) => setText(e.target.value)} />
        <TextField label="Enter amount" onChange={(e) => setAmount(e.target.value)} />
        <StyledButton variant='contained' onClick={addTransaction}>Add Transaction</StyledButton>
    </Container>
  )
}

export default NewTransaction