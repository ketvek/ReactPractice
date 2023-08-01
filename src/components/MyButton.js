import react from "react";

function MyButton() {
  function handleClick() {
    alert("You Clicked me...!!!");
  }
  return <button onClick={handleClick}>I am The Button</button>;
}
export default MyButton;
