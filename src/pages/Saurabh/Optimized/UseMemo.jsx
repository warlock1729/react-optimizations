import React, { useState, useMemo } from "react";

const OptimizedUseMemo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const expensiveComputation = useMemo(() => {
    console.log("Running expensive computation...");
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    return sum;
  }, []); 

  return (
    <div>
      <h3>Optimized Example</h3>
      <p>Result of Expensive Computation: {expensiveComputation}</p>
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

export default OptimizedUseMemo;
