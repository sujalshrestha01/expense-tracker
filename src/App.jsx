import { useState } from 'react'

import './App.css'
import Form from './components/Form'
import Table from './components/Table'
import Header from './components/Header'
import ExpenseData from './ExpenseData'

function App() {
  const [expenses, setExpenses] = useState(ExpenseData)


  return (
    <>
    <Header/>
    <div className='flex justify-around'>

    <Form setExpenses={setExpenses}/>
    <Table expenses={expenses}/>
    </div>
    </>
  )
}

export default App
