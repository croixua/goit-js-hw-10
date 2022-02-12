import debouce from 'lodash.debounce';
import './css/styles.css';
import countryCard from './template/country-card.hbs';
import { fetchCountries } from './js/fetchCountries';

const inputRef = document.querySelector('#search-box');
const countryListRef = document.querySelector('.country-list');
const countryInfoRef = document.querySelector('.country-info');
const DEBOUNCE_DELAY = 300;

inputRef.addEventListener('input', onInput);

function onInput(e) {
  const name = e.target.value.trim();

  if (name === '') {
    countryInfoRef.innerHTML = '';
    return;
  }

  fetchCountries(name, countryInfoRef);
}
