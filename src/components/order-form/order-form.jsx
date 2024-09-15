import React from 'react';

import './order-form.css';

export default function OrderForm() {

  return (
    <form onSubmit={(event) => console.log(event)}
          className="wrapper-order-form">
      <h2>Bestelgegevens</h2>
      <label htmlFor="voornaam">Voornaam
        <input id="voornaam" />
      </label>
      <label htmlFor="achternaam">Achternaam
        <input id="achternaam" />
      </label>
      <label htmlFor="leeftijd">Leeftijd
        <input id="leeftijd" />
      </label>
      <label htmlFor="postcode">Postcode
        <input id="postcode" />
      </label>

      <label htmlFor="bezorgfrequentie">
        <b>BezorgFrequentie</b>
      </label>
      <select name="bezorgfrequentie" id="bezorgfrequentie">
        <option value="Iedere week">Iedere week</option>
        <option value="Iedere tweede week">Iedere tweede week</option>
        <option value="Iedere maand">Iedere maand</option>
        <option value="Ieder jaar">Iedere jaar</option>
      </select>

      <div className="radio-button">
        <input type="radio"
               id="overdag" />
        <label htmlFor="overdag">Overdag</label>
        <input type="radio"
               id="savonds" />
        <label htmlFor="savonds">&#39;s Avonds</label>
      </div>

      <label htmlFor="opmerking">Opmerking</label>
      <textarea id="opmerking" rows="4" cols="50"></textarea>

      <div className="radio-button">
        <input id="voorwaarden" type="checkbox" />
        <label htmlFor="voorwaarden">Ik ga akkoord met de voorwaarden</label>
      </div>

      <button type="submit">
        Verzend
      </button>
    </form>
  );
}