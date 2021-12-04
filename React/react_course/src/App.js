import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";


const App = () => {

  const expenses = [
    {
      id: 'e1',
      title: 'Paper',
      amount: 94,
      date: new Date(2020, 7, 14),
    },
    {  id: 'e2',
    title: 'Car Insurance',
    amount: 294,
    date: new Date(2020, 7, 18),
  },
  {
    id: 'e3',
    title: 'TV Repair',
    amount: 500,
    date: new Date(2020, 8, 30),
  },
  {
    id: 'e4',
    title: 'Furniture',
    amount: 700,
    date: new Date(2020, 7, 22),
  }


];

const addExpenseHandler = expense => {
  console.log('In app.js')
  console.log(expense)
}

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
