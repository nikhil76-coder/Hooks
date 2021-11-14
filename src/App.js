// import React, { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       {count}
//       <button onClick={increment}>click</button>
//     </div>
//   );
// }
// export default App;
//example for input
import React, { useState } from "react";

function App() {
  const [inputvalue, setInputvalue] = useState("name");
 
  let onChange = (event) => {
      const newValue = event.target.value;
      setInputvalue(newValue);
  }

  return (
    <div>
      
     <input placeholder="enter something ..." onChange={onChange}/>
     {inputvalue}
    </div>
  );
}
export default App;
