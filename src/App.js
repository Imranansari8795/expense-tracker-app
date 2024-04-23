
import './App.css';
import Balance from './components/Balance';
import {Typography,styled,Box} from '@mui/material'
import ExpenseCard from './components/ExpenseCard';
import NewTransaction from './components/NewTransaction';
import Transactions from './components/Transactions';
import { useState } from 'react';

const Header = styled(Typography)`
  margin:10px 0;
  font-size:36px;
  color:blue;
  text-transform:uppercase;
`

const Component = styled(Box)`
background: #FFF;
padding: 10px;
border-radius: 20px;
display: flex;
margin:auto;
width: 800px;
& > div {
  padding: 10px;
  width: 50%;
  height: 70vh;
    }
`
function App() {


  const [transaction,setTransaction] = useState([
    {id:1,text:'Momos',amount:-20},
    {id:2,text:'Salary',amount:3000},
    {id:3,text:'Book',amount:-100},
    {id:1,text:'Bonus',amount:1500}
  ]);
  return (
    <Box className='App'>
      <Header >Expence tracker</Header>
      <Component>
        <Box>
          <Balance transaction = {transaction} />
          <ExpenseCard transaction = {transaction} />
          <NewTransaction setTransaction = {setTransaction} />
        </Box>

        <Box>
          <Transactions transaction = {transaction} setTransaction = {setTransaction} />
        </Box>
      </Component>
    </Box>
  );
}

export default App;
