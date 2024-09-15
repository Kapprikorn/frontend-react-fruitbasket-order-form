import React from 'react';

import './order-form.css';

export default function OrderForm({form, changeForm, onSubmit}) {
  return (
    <form onSubmit={(event) => onSubmit(event)}
          className="wrapper-order-form">
      <h2>Bestelgegevens</h2>
      <label htmlFor="voornaam">Voornaam
        <input type="text"
               id="form-input-voornaam"
               name="voornaam"
               value={form.voornaam}
               placeholder="Piet"
               onChange={(e) => changeForm('voornaam', e.target.value)}
        />
      </label>
      <label htmlFor="achternaam">Achternaam
        <input type="text"
               id="form-input-achternaam"
               name="achternaam"
               value={form.achternaam}
               placeholder="Pierterszoon"
               onChange={(e) => changeForm('achternaam', e.target.value)}
        />
      </label>
      <label htmlFor="leeftijd">Leeftijd
        <input type="number"
               id="form-input-leeftijd"
               name="leeftijd"
               value={form.leeftijd}
               placeholder="42"
               onChange={(e) => changeForm('leeftijd', e.target.value)}
        />
      </label>
      <label htmlFor="postcode">Postcode
        <input type="text"
               id="postcode"
               name="form-input-postcode"
               value={form.postcode}
               placeholder="1234AB"
               onChange={(e) => changeForm('postcode', e.target.value)}
        />
      </label>

      <label htmlFor="bezorgfrequentie">
        <b>BezorgFrequentie</b>
      </label>
      <select value={form.bezorgfrequentie}
              onChange={(e) => changeForm('bezorgfrequentie', e.target.value)}
              name="bezorgfrequentie"
              id="bezorgfrequentie">
        <option value="Iedere week">Iedere week</option>
        <option value="Iedere tweede week">Iedere tweede week</option>
        <option value="Iedere maand">Iedere maand</option>
        <option value="Ieder jaar">Iedere jaar</option>
      </select>

      <div className="input-button">
        <input type="radio"
               id="overdag"
               name="form-radio-input-overdag"
               value="Overdag"
               checked={form.bezorgtijd === "Overdag"}
               onChange={(e) => changeForm('bezorgtijd', e.target.value)}
        />
        <label htmlFor="overdag">Overdag</label>
        <input type="radio"
               id="savonds"
               name="form-radio-input-savonds"
               value="'s avonds"
               checked={form.bezorgtijd === "'s avonds"}
               onChange={(e) => changeForm('bezorgtijd', e.target.value)}
        />
        <label htmlFor="savonds">&#39;s Avonds</label>
      </div>

      <label htmlFor="opmerking">Opmerking</label>
      <textarea id="opmerking"
                rows="4"
                cols="50"
                name="form-area-input-opmerking"
                value={form.opmerking}
                placeholder="Pas op voor de 🐶"
                onChange={(e) => changeForm('opmerking', e.target.value)}
      />

      <div className="input-button">
        <input type="checkbox"
               id="voorwaarden"
               name="form-checkbox-input-voorwaarden"
               checked={form.voorwaarden}
               onChange={() => changeForm('voorwaarden', !form.voorwaarden)}
        />
        <label htmlFor="voorwaarden">Ik ga akkoord met de voorwaarden</label>
      </div>

      <button type="submit">
        Verzend
      </button>
    </form>
  );
}