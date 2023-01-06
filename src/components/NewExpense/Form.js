import "./Form.css"
import React, {useState} from "react";

function Form(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserinput] = useState({
  //   enteredAmount: "",
  //   enteredDate: "",
  //   enteredTitle:""
  // });

  function titleChangeHandler(title) {
    setEnteredTitle(title.target.value);

    // setUserinput({
    //   ...userInput,
    //   enteredTitle: title.target.value,
    // });

    // setUserinput(function (prevState) {
    //   return {
    //     ...prevState,
    //     enteredTitle: title.target.value,
    //   };
    // });
  };

  function amountChangeHandler(amount) {
    setEnteredAmount(amount.target.value);
    
    // setUserinput({
    //   ...userInput,
    //   enteredAmount: amount.target.value,
    // });
  };

  function dateChangeHandler(date) {
    setEnteredDate(date.target.value);
    
    // setUserinput({
    //   ...userInput,
    //   enteredDate: date.target.value,
    // });
  };

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2024-12-31" onChange={dateChangeHandler} value={enteredDate} />
        </div>
      </div>
      <div>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default Form;