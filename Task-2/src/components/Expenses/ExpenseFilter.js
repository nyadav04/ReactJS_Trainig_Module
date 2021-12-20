import React from "react";

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
    const dropDoenChangeHandler = (event) => {
        props.onChangeFilter(event.target.value)
    }

    return(
        <div className='expenses-filter'>
            <div className='expenses-filter_control'>
                <label>Filter by year &nbsp;&nbsp;</label>
                <select value={props.selected} onChange={dropDoenChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;