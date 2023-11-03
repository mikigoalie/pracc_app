
import './App.css'
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpenses from './Components/IncomeExpenses';
import Transaction from './Components/Transaction';
import TransactionList from './Components/TransactionList';
import { useState, useEffect } from 'preact/hooks';

export default function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
  ])


  const deleteTransaction = (tran) => {
    if (!tran) return;
    const newTransactions = transactions.filter((trans) => trans.id !== tran.id);
    setTransactions(newTransactions);
  }
  
  const addNewTransaction = (props) => {
    if (!props.item || !props.price) return;

    const newTransaction = { id: Math.floor(Math.random() * 9999999), text: props.item, amount: props.price };
    const newTransactions = [...transactions, newTransaction];
  
    setTransactions(newTransactions);
  }

  

  return (
    <div>
      <Header />
      <div className="container">
        <Balance TRANSACTIONS={transactions}/>
        <IncomeExpenses TRANSACTIONS={transactions}/>
        <TransactionList TRANSACTIONS={transactions} deleteTransaction={deleteTransaction}/>
        <Transaction addNewTransaction={addNewTransaction}/>
      </div>
    </div>

  )
}
