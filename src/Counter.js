import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function Counter() {
  const [count, setCount] = useState(0);
  const countInc = () => {
    let value = count;
    value++;
    setCount(value);
  };
  const countDec = () => {
    let value = count;
    value--;
    if (value > 0) setCount(value);
    else {
      alert("value is negative");
    }
  };
  return (
    <div>
      <h1>Hello Counter</h1>
      <h2 onClick={countInc}>
        <AddIcon />
      </h2>
      <h2 onClick={countDec}>
        <RemoveIcon />
      </h2>
      <h2>{count}</h2>
    </div>
  );
}

export default Counter;
