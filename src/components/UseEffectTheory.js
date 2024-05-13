import { useState, useEffect } from "react";

function UseEffectTheory() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  useEffect(() => {
    console.log("Searching...");
  }, [keyword]);
  return (
    <div className="App">
      <input value={keyword} onChange={onChange} type="text" placeholder="Search" />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click!</button>
    </div>
  );
}

export default UseEffectTheory;
