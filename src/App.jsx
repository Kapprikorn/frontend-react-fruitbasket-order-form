import './App.css';
import './css-reset.css';
import FruitCounter from './components/fruit-counter/fruit-counter.jsx';
import React, { useState } from 'react';
import OrderForm from './components/order-form/order-form.jsx';

function App() {
  const initialProductState = [
    { name: 'Aardbeien', emoji: '🍓', counter: 0, id: 0 },
    { name: 'Bananen', emoji: '🍌', counter: 0, id: 1 },
    { name: 'Appels', emoji: '🍏', counter: 0, id: 2 },
    { name: 'Kiwi\'s', emoji: '🥝', counter: 0, id: 3 },
  ];
  const initialFormState = {
    voornaam: '',
    achternaam: '',
    leeftijd: '',
    postcode: '',
    bezorgfrequentie: '',
    bezorgtijd: '',
    opmerking: '',
    voorwaarden: false,
  };

  const [products, setProducts] = useState(initialProductState);
  const [form, setForm] = React.useState(initialFormState);

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
    setProducts(initialProductState);
  }

  function resetForm() {
    setForm(initialFormState);
  }

  function changeForm(name, value) {
    setForm({...form, [name]: value});
  }

  function onSubmit(submitEvent) {
    submitEvent.preventDefault();
    console.table(form);

    resetBaskets();
    resetForm();
  }

  return (
    <div className="app-content">
      <h1>Fruitmand bezorgservice</h1>

      <div className="product-wrapper">
        <FruitCounter product={products[0]}
                      incrementCounter={(id) => incrementCounter(id)}
                      decrementCounter={(id) => decrementCounter(id)} />
        <FruitCounter product={products[1]}
                      incrementCounter={(id) => incrementCounter(id)}
                      decrementCounter={(id) => decrementCounter(id)} />
        <FruitCounter product={products[2]}
                      incrementCounter={(id) => incrementCounter(id)}
                      decrementCounter={(id) => decrementCounter(id)} />
        <FruitCounter product={products[3]}
                      incrementCounter={(id) => incrementCounter(id)}
                      decrementCounter={(id) => decrementCounter(id)} />
        <button onClick={resetBaskets}>Reset</button>
      </div>

      <OrderForm form={form}
                 onSubmit={(event) => onSubmit(event)}
                 changeForm={(name, value) => changeForm(name, value)}
      />
    </div>
  );
}

export default App;
