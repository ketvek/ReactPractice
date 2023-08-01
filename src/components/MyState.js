import react, { useState } from "react";

export default function MyState() {
  const [count, setCount] = useState(0);
  function hendleEvent() {
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={hendleEvent}>Click me to count the number</button>
      <h1> {count}</h1>
    </>
  );
}
