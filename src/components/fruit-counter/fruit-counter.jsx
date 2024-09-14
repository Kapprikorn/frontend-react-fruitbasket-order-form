import React from 'react';

import './fruit-counter.css';

export default function FruitCounter({ product, incrementCounter, decrementCounter }) {

  return (
    <div className="wrapper">
      <p className="emoji">{product.emoji}</p>
      <h2 className="name">{product.name}</h2>
      <button className="button-counter"
              onClick={() => decrementCounter(product.id)}>-
      </button>
      <p>{product.counter}</p>
      <button className="button-counter"
              onClick={() => incrementCounter(product.id)}>+
      </button>
    </div>
  );
}