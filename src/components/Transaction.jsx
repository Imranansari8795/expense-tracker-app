


import { ListItem, ListItemText, styled, ListItemIcon } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'

const List = styled(ListItem)`
    display: flex;
    margin-top: 10px;
    border: 1px solid #F6F6F6;
`;


const Transaction = ({ tran,setTransaction ,transaction}) => {


    const color = tran.amount > 0 ? 'green' : 'red';

    const deleteTransaction = (id) => {
        setTransaction(transaction.filter(item => item.id !== id));
    }
    return (
      
        <List style={{ background: `${color}`, color: '#fff' }}>
            <ListItemIcon>
                <DeleteIcon onClick={() => deleteTransaction(tran.id)} />
            </ListItemIcon>
            <ListItemText primary={tran.text} />
            <ListItemText primary={tran.amount} />
        </List>
    )
}

export default Transaction