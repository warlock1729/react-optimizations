import React, { useState } from "react";

const UnoptimizedUseMemo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const expensiveComputation = () => {
    console.log("Running expensive computation...");
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    return sum;
  };

  const result = expensiveComputation(); // Recalculates on every render

  return (
    <div>
      <h3>Unoptimized Example</h3>
      <p>Result of Expensive Computation: {result}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
      <p>Count: {count}</p>
    </div>
  );
};

export default UnoptimizedUseMemo;
