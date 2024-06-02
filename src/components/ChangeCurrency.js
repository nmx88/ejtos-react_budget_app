import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const ChangeCurrency = () => {
  const { currency, setCurrency } = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState(currency);

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    setSelectedCurrency(newCurrency);
    setCurrency(newCurrency);
  };

  const getCurrencySymbol = (currencyCode) => {
    switch (currencyCode) {
      case "USD":
        return "($ Dollar)";
      case "GBP":
        return "(£ Pound)";
      case "EUR":
        return "(€ Euro)";
      case "INR":
        return "(₹ Rupee)";
      default:
        return "";
    }
  };

  return (
    <div className="alert alert-success">
      <span>Currency {getCurrencySymbol(selectedCurrency)}</span>

      <select
        id="currency"
        value={selectedCurrency}
        onChange={handleCurrencyChange}
        className="form-select"
      >
        <option value="USD">$ Dollar</option>
        <option value="GBP">£ Pound</option>
        <option value="EUR">€ Euro</option>
        <option value="INR">₹ Rupee</option>
      </select>
    </div>
  );
};

export default ChangeCurrency;
