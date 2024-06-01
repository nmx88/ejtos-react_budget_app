import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  //We are using the useState hook to create a state variable called newBudget and initialize it with the current value of budget.
  const { budget } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  //We are defining a function called handleBudgetChange that updates the value of newBudget when the user changes the value of the input field.
  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
  };
  //We are then setting the value attribute of the input field to newBudget and adding an onChange event listener that calls handleBudgetChange when the user changes the value of the input field.
  return (
    <div className="alert alert-secondary">
      <span>Budget: £{budget} </span>

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
