import React, {useState,useEffect} from "react";

import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');
const [exp,setExp]=useState([]);

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
     
    }
  useEffect(()=>{

      console.log(filteredYear)

      const filteredList=props.items.filter((f)=>f.date.getFullYear()==filteredYear);
      console.log(filteredList)
     setExp(filteredList)


  },[filteredYear])

    return(
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {exp.map((i)=><ExpenseItem key={i.id}
                    title={i.title}
                    amount={i.amount}
                    date={i.date}>
                    </ExpenseItem>)}
                
                    
            </Card>
        </div>
        
        
    )
}

export default Expenses;