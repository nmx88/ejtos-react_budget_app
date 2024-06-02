import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>£{props.cost}</td>
      <td>
        <button
          onClick={(event) => increaseAllocation(props.name)}
          style={{
            outline: "none",
            border: "none",
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
            // gap: "100px",
          }}
        >
          <FontAwesomeIcon icon={faPlusCircle} size="2x" color="green" />
        </button>
      </td>
      <td>
        <TiDelete
          size="1.5em"
          onClick={handleDeleteExpense}
          style={{
            // display: "flex",
            color: "red",
            // alignItems: "center",
            // justifyContent: "center",
            // size: "2x",
            width: "50px",
            height: "50px",
          }}
        ></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
