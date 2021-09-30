import React from "react";
import AppCounter from "./App";
const Counters = ({ counters, onIncrement }) => {
  return (
    <>
      {counters.map((counter) => (
        <div key={counter.id}>
          <p>My counter : {counter.value}</p>
          <button onClick={() => onIncrement(counter.id)}>Increment</button>
        </div>
      ))}
    </>
  );
};
export default Counters;
