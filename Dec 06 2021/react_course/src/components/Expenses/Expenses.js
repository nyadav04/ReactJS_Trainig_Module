import React, { useState, useEffect } from 'react';

import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    setFilteredItems(
      items.filter(
        (element) => element.date.getFullYear() === Number(filteredYear)
      )
    );
  }, [filteredYear, items]);

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredItems.length > 0 ? (
          filteredItems.map((element, index) => (
            <ExpenseItem
              key={index}
              title={element.title}
              amount={element.amount}
              date={element.date}
            ></ExpenseItem>
          ))
        ) : (
          <p>Add new expense.</p>
        )}
      </Card>
    </div>
  );
};

export default Expenses;
