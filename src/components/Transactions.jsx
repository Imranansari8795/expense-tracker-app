

import { Box, Divider, Typography,List } from '@mui/material'
import React from 'react'
import Transaction from './Transaction'

const Transactions = ({transaction,setTransaction}) => {
  return (
    <Box>
        <Typography variant='h5'>Transaction History</Typography>
        <Divider />

        <List>
            {
                transaction.map(tran =>(
                   <Transaction tran = {tran} setTransaction = {setTransaction} transaction={transaction} />
                ))
            }
        </List>
    </Box>
  )
}

export default Transactions