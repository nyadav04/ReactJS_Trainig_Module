import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Paper",
      amount: 94,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 294,
      date: new Date(2021, 7, 18),
    },
    {
      id: "e3",
      title: "TV Repair",
      amount: 500,
      date: new Date(2020, 8, 30),
    },
    {
      id: "e4",
      title: "Furniture",
      amount: 700,
      date: new Date(2022, 7, 22),
    },
  ]);
  const [newExpense, setNewExpense] = useState()
  // console.log(expenseData);
  const addExpenseHandler = (expense) => {
    // console.log('In app.js')
    // console.log(expense)

    setExpenses(expenses.concat({
      id: Math.random(),
      ...expense
    }));
  };

  console.log(expenses);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
