import React, { useState } from "react";

export default function App() {
  const [discountAmount, setdiscountAmount] = useState();
  const [billAmount, setBillAmount] = useState();
  const [discAmount, setdiscAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [sub, setSub] = useState(0);
  const [discPercent, setDiscPercent] = useState(0);

  const calculate = (e) => { e.preventDefault();
    const formValid = +billAmount > 0 && +discountAmount > 0;
    if (!formValid) {
      return;
    }
    const discAmount = +billAmount * (+discountAmount / 100);
    const total = +billAmount * (1 - discountAmount / 100);
    const sub = +billAmount;
    const discPercent = +discountAmount;
    setSub(sub);
    setDiscPercent(discPercent);
    setdiscAmount(discAmount);
    setTotal(total);
  };

  return (
    <div className="App">
    <h1 class="heading">How much do I pay?</h1>

      <form onSubmit={calculate}>
        <div>
          <input type="number" value={billAmount} placeholder="Enter Bill Amount"
            onChange={(e) => setBillAmount(e.target.value)}
          />
        </div>


        <div>
          
          <input
            type="number"
            value={discountAmount}
            placeholder="Enter Discount (%)"
            onChange={(e) => setdiscountAmount(e.target.value)}
          />
        </div>


        <button className="calcButton" type="submit">Calculate Bill </button>

      </form>
      <p className="last0">Actual Bill: {sub}</p>
      <p className="last0">Discount (%): {discPercent}</p>
      <p className="last0">Discount: {discAmount.toFixed(2)}</p>
      <p className="last1">Final Bill: {total.toFixed(2)}</p>
    </div>
  );
}