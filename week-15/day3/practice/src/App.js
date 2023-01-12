import React from "react";

function App() {
  const [count ,setCount] = React.useState(0)

  function minus() {
    setCount(prevValue => prevValue -1)
  }

  function plus() {
    setCount(prevValue => prevValue +1)
  }
  return (
    <div className="App">
      <button className="minus" onClick={minus}>-</button>
      <button className="plus" onClick={plus}>+</button>
      <div className="counter">{count}</div>
    </div>
  );
}

export default App;
