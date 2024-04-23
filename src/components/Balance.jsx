
import React from 'react'
import {Box, Typography, styled} from '@mui/material'

const BalanceText = styled(Typography)`
font-size: 25px;
margin-bottom: 20px;
`

const Balance = ({transaction}) => {

    const amount = transaction.map(transaction => transaction.amount);

    const total = amount.reduce((amount,item) =>(amount + item),0).toFixed(2);
  return (
    <BalanceText>Balance:₹{total}</BalanceText>
  )
}

export default Balance