import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  //We are using the useState hook to create a state variable called newBudget and initialize it with the current value of budget.
  const { budget, currency, dispatch, expenses } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  //Calculation of total Expenses
  const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

  //We are defining a function called handleBudgetChange that updates the value of newBudget when the user changes the value of the input field.

  const handleBudgetChange = (event) => {
    const value = parseInt(event.target.value);
    if (value > 20000) {
      alert("The value cannot exceed " + currency + "20,000");
      setNewBudget(budget); // Resets to the current budget
    } else if (value < totalExpenses) {
      alert("You cannot reduce the budget value lower than spending!");
      setNewBudget(budget); // Resets to the current budget
    } else {
      setNewBudget(value);
      dispatch({ type: "SET_BUDGET", payload: value });
    }
  };

  //We are then setting the value attribute of the input field to newBudget and adding an onChange event listener that calls handleBudgetChange when the user changes the value of the input field.
  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>

      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};

export default Budget;
