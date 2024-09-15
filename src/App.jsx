import './App.css';
import './css-reset.css';
import FruitCounter from './components/fruit-counter/fruit-counter.jsx';
import { useState } from 'react';
import OrderForm from './components/order-form/order-form.jsx';

function App() {
  const [products, setProducts] = useState([
    { name: 'Aardbeien', emoji: '🍓', counter: 0, id: 0 },
    { name: 'Bananen', emoji: '🍌', counter: 0, id: 1 },
    { name: 'Appels', emoji: '🍏', counter: 0, id: 2 },
    { name: 'Kiwi\'s', emoji: '🥝', counter: 0, id: 3 },
  ]);

  function incrementCounter(id) {
    const newProductList = products.map(aProduct => {
      return aProduct.id === id
             ? { ...aProduct, counter: (aProduct.counter + 1) }
             : aProduct;
    });

    setProducts(newProductList);
  }

  function decrementCounter(id) {
    const newProductList = products.map(aProduct => {
      return aProduct.id === id
             ? { ...aProduct, counter: Math.max(aProduct.counter - 1, 0) }
             : aProduct;
    });

    setProducts(newProductList);
  }

  function resetBaskets() {
    const newProductList = products.map(aProduct => {
      return { ...aProduct, counter: 0 };
    });

    setProducts(newProductList);
  }

  return (
    <div className="app-content">
      <h1>Fruitmand bezorgservice</h1>

      <div className="product-wrapper">
        <FruitCounter product={products[0]}
                      incrementCounter={incrementCounter}
                      decrementCounter={decrementCounter} />
        <FruitCounter product={products[1]}
                      incrementCounter={incrementCounter}
                      decrementCounter={decrementCounter} />
        <FruitCounter product={products[2]}
                      incrementCounter={incrementCounter}
                      decrementCounter={decrementCounter} />
        <FruitCounter product={products[3]}
                      incrementCounter={incrementCounter}
                      decrementCounter={decrementCounter} />
        <button onClick={resetBaskets}>Reset</button>
      </div>

      <OrderForm />
    </div>
  );
}

export default App;
