import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredTitle,setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const [showform,setShowForm] = useState(false)

    const titleHandler = (event) => {
      setEnteredTitle(event.target.value);
      console.log(event.target.value)
    };

    const amountHandler = (event) => {
      setEnteredAmount(event.target.value);
      console.log(event.target.value);
    };

    const dateHandler = (event) => {
      setEnteredDate(event.target.value);
      console.log(event.target.value);
    };

    const submitHandler = (event) => {
      event.preventDefault()
      console.log("submitted")

      const expenseData = {
        title : enteredTitle,
        amount : +enteredAmount,
        date : new Date(enteredDate)
      }
      console.log(expenseData)
      props.onSaveNewExpense(expenseData);
      setEnteredTitle('')  //this will clear input field after submission
      setEnteredAmount('')
      setEnteredDate('')
      
      setShowForm(false)
    }

    const showformfunction = () => {
      setShowForm(true)
    }

    const hideformfunction = () => {
      setShowForm(false)
    }

    if (showform === false){
      return (
          <div className='new-expense__actions'>
            <button type='submit' onClick={showformfunction}>Add Expense</button>
          </div>
      )
    }

    if (showform === true){
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value = {enteredTitle} onChange={titleHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" max="10.00" value = {enteredAmount} onChange={amountHandler} />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" value = {enteredDate} onChange={dateHandler}/>
          </div>
          <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
          </div>
          <div className='new-expense__actions'>
            <button type='button' onClick={hideformfunction}>Cancel</button>
          </div>
        </div>
      </form>
    );
    }

    // return (
    //   <form onSubmit={submitHandler}>
    //     <div className="new-expense__controls">
    //       <div className="new-expense__control">
    //         <label>Title</label>
    //         <input type="text" value = {enteredTitle} onChange={titleHandler} />
    //       </div>
    //       <div className="new-expense__control">
    //         <label>Amount</label>
    //         <input type="number" min="0.01" max="10.00" value = {enteredAmount} onChange={amountHandler} />
    //       </div>
    //       <div className="new-expense__control">
    //         <label>Date</label>
    //         <input type="date" min="2019-01-01" max="2022-12-31" value = {enteredDate} onChange={dateHandler}/>
    //       </div>
    //       <div className='new-expense__actions'>
    //         <button type='submit'>Add Expense</button>
    //       </div>
    //     </div>
    //   </form>
    // );

}

export default ExpenseForm