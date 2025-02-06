import { useState } from "react";
import PropTypes from "prop-types";

import "./index.css";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = (event) => {
    setCounter(counter + 1);
  };
  const handleSub = (event) => {
    setCounter(counter - 1);
  };
  const handleReset = (event) => {
    setCounter(value);
  };
  return (
    <>
      <h1>CounterApp</h1>
      <h2 data-testid="contador">{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSub}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
