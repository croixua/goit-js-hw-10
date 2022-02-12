import debouce from 'lodash.debounce';
import './css/styles.css';
import countryCard from './template/country-card.hbs';
import fetchCountries from './js/fetchCountries';

const inputRef = document.querySelector('#search-box');
const countryListRef = document.querySelector('.country-list');
const countryInfoRef = document.querySelector('.country-info');
const DEBOUNCE_DELAY = 300;
const BASE_URL_NAME = 'https://restcountries.com/v3.1/';

inputRef.addEventListener('input', onInput);

function onInput(e) {
  const name = e.target.value;

  // fetchCountries(name);

  fetch(`${BASE_URL_NAME}name/${name}`)
    .then(response => response.json())
    .then(country => {
      const markup = countryCard(country);

      countryInfoRef.innerHTML = markup;
    });
}
