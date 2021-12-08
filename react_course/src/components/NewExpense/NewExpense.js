import React from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const {data}=props
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    console.log(data)
    const expenseData=(props)=>{
        data(props)
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} expensData={expenseData}/>
        </div>
    )
}

export default NewExpense;