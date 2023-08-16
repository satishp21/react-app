import React, {useState} from "react";

import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter";
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

  let expenseContent = <p>no expense found</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenseContent}
      </Card>
    </div>
  );
}

export default Expenses