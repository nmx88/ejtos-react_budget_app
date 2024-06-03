import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ChangeCurrency = () => {
  const { currency, dispatch } = useContext(AppContext);

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    dispatch({ type: "CHG_CURRENCY", payload: newCurrency });
  };

  const getCurrencySymbol = (currencyCode) => {
    switch (currencyCode) {
      case "$":
        return "($ Dollar)";
      case "£":
        return "(£ Pound)";
      case "€":
        return "(€ Euro)";
      case "₹":
        return "(₹ Rupee)";
      default:
        return "";
    }
  };

  return (
    <div
      className="alert alert-secondary"
      style={{ backgroundColor: "lightgreen" }}
    >
      <span style={{ color: "white" }}>
        Currency {getCurrencySymbol(currency)}
      </span>

      <select
        className="form-select"
        id="currency"
        value={currency}
        onChange={handleCurrencyChange}
        style={{ backgroundColor: "lightgreen", color: "white" }}
      >
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Rupee</option>
      </select>
    </div>
  );
};

export default ChangeCurrency;
