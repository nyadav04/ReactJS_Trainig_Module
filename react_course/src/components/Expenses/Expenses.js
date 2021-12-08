import React, {useState,useEffect} from "react";

import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
    const {items}=props
    const [filteredYear, setFilteredYear] = useState('2021');
    const [filterExpense,setFilterExpense]=useState([])
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }
    useEffect(()=>{
        setFilterExpense(items)
    },[items])
    const filtered=(expense)=>{
        console.log(expense)
        expense && setFilterExpense(expense)
    }
    return(
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} filtered={filtered} items={items}/>
                {filterExpense.length===0?"No transactions in this year":""}
                {
                    filterExpense && filterExpense.map((item)=>{
                        return(
                            <ExpenseItem title={item.title} amount={item.amount} date={item.date}/>
                        )
                    })
                }
            </Card>
        </div>
        
        
    )
}

export default Expenses;