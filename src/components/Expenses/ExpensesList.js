import React from "react"
import ExpenseItem from "./ExpenseItem";

import './ExpensesList.css'


const ExpensesList = (props) => {

      if (props.filteredExpensesprop.length === 0) {
        return <h2 className="expenses-list__fallback">no expense found</h2>;
      }

      return (
        <ul className="expenses-list">
          {props.filteredExpensesprop.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
          ))};
        </ul>
      );

}

export default ExpensesList