import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0); // state variable
    // let counter = 0;
    // function handleIncrease(){
    //     counter++;
    //     console.log("🚀 ~ handleIncrease ~ counter:", counter)
    // }

    // function handleDecrease(){
    //     counter--;
    //     console.log("🚀 ~ handleDecrease ~ counter:", counter)
    // }
    
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count+1) }>
        Increase
      </button>

      <button onClick={() => setCount(count-1)}>
        Decrease
      </button>
    </div>
  );
}

export default Counter;