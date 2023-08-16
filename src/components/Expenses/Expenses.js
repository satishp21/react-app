import React, {useState} from "react";

import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";

const Expenses = (props) => {

  const [filteredYear,SetFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    console.log(selectedYear)
    SetFilteredYear(selectedYear)
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList filteredExpensesprop = {filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses