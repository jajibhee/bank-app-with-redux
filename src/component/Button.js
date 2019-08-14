import React from "react";

const Button = ({ handleIncrement, handleDecrement }) => {
  return (
    <div>
      <section className="App__buttons">
        <button data-amount={10000} onClick={handleDecrement}>
          WITHDRAW $10,000
        </button>
        <button data-amount={5000} onClick={handleDecrement}>
          WITHDRAW $5,000
        </button>
        <button data-amount={10000} onClick={handleIncrement}>
          ADD $10,000
        </button>
        <button data-amount={5000} onClick={handleIncrement}>
          ADD $5,000
        </button>
      </section>
      <p className="App__giveaway">Give away all your cash to charity</p>
    </div>
  );
};

export default Button;
