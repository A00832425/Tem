import "./Styles/App.css";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Tabl from './Tabl.js'; 
import M from './M.js'; 

function App(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
    };

    axios
      .post("http://localhost:5000/api/matches/add", expenseData)
      .then(function (response) {
        console.log(response);
        //props.onSaveExpenseData();
      });

    console.log(expenseData);

    };
  return (
    <div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Enter Text</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
      </div>
      <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
      <div className="new-expense__actions">
        <Button variant="primary" type="submit" onClick={submitHandler}>
          Post
        </Button>
      </div>
      <M />
      <Tabl />
    </div> 
  );
}
export default App;