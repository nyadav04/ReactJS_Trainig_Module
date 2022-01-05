import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };


  const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {filteredExpenses.length === 0 ? (<p>Good, you saved some money in this year</p>) : filteredExpenses.map((expense, index) =>  (
            <ExpenseItem 
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;