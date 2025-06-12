import { useState } from "react";
function App() {
  let [count, setCount] = useState(10);
  function addValue() {
    if (count < 20) {
      setCount(count + 1);
    }
  }
  function removeValue() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <>
      <h1>i am a h1</h1>
      <h3>Counter value : {count}</h3>
      <button onClick={addValue}>Add</button>
      <br />
      <button onClick={removeValue}>remove</button>
      <h3>Counter value : {count}</h3>
      <p>Counter value : {count}</p>
    </>
  );
}

export default App;
