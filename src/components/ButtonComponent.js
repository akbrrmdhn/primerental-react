import React from "react";

function ButtonComponent({ decreaseNum, value, increaseNum }) {
  return (
    <div className="row add-vehicle-nominal">
      <button className="btn minus-button" onClick={decreaseNum}>
        -
      </button>
      <p className="vehicle-qty">{value}</p>
      <button className="btn plus-button" onClick={increaseNum}>
        +
      </button>
    </div>
  );
}

export default ButtonComponent;
