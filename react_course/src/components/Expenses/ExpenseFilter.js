import React, { useState } from "react";

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
    const {filtered,items}=props
    const [value,setValue]=useState("")

    const filter=(value)=>{
        const data=items.filter((ele)=>{
            return(value==ele.date.getFullYear())
        })
        console.log(data)
        filtered(data)
    }

    const dropDoenChangeHandler = (event) => {
        setValue(event.target.value)
        filter(event.target.value)
    }

    return(
        <div className='expenses-filter'>
            <div className='expenses-filter_control'>
                <label>Filter by year</label>
                <select value={value} onChange={dropDoenChangeHandler}>
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