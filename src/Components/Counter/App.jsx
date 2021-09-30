import React, { useState } from "react";
import Counters from "./Counter";

const AppCounter = () => {
  const initialCounters = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 }
  ];
  const [counters, setCounters] = useState(initialCounters);
  const onIncrement = (counterId) => {
    const updatededCounters = counters.map((counter) => {
      if (counter.id === counterId) {
        counter.value++;
        return counter;
      }
      return counter;
    });
    setCounters(updatededCounters);
  };

  return (
    <>
      <main className="container">
        <Counters counters={counters} onIncrement={onIncrement} />
      </main>
    </>
  );
};

export default AppCounter ;