import react from "react";

function HelloProp(props) {
  return (
    <h1>
      I love {props.name} with weight of {props.weight}
    </h1>
  );
}
export default HelloProp;
