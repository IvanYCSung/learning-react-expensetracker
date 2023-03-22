import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitile] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  // more common way to do

  // or we can call three states together
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate:''
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitile(event.target.value);

    // or
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })
    // the three states were called together hence we need to update them together. in this case, we only update title, but we still need to input default values for the other two states

    // but we should do
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value};
    // })
    // in order to update the states properly, we use setUserInput to call a function. make sure states will not overwrite each other when we have multiple threads runing at the same time
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // or
    //   setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value
    //   })
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // or
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitile("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  // we use "onSubmit" in form tag instead of button tag in order to catch all the ways to submit the form, not just only click the button. such as hitting enter
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
