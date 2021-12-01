import React, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enetredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })
    const titleChangeHandler = (event) => {
      // console.log(event)
        setEnteredTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enetredTitle: event.target.value,
        // });
        // setUserInput((prevState) => {
        //    return {...prevState, enetredTitle: event.target.value}
        // });
    }

    const amountChangeHandler = (event) => {
        console.log(event)
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    }

    const dateChangeHandler = (event) => {
        console.log(event)
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense_controls'>
                <div className='new-expense_control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense_control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense_control'>
                    <label>Date</label>
                    <input type='date' min='2021-11-27' value={enteredDate} max='2024-12-31' onChange={dateChangeHandler} />
                </div>
                <div className='new-expense_action'>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default  ExpenseForm;