import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {count}
      <button onClick={increment}>click</button>
    </div>
  );
}
export default App;
