import debouce from 'lodash.debounce';
import './css/styles.css';
import countryCard from './template/country-card.hbs';
import fetchCountries from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;

fetch('https://restcountries.com/v3.1/name/peru')
  .then(response => response.json())
  .then(country => {
    console.log(country[0].languages);
    const markup = countryCard(country);
    console.log(markup);
  });

// console.log(countryCard());

// fetch('https://restcountries.com/v3.1/name/peru?')
//   .then(response => response.json())
//   .then(country => {
//     console.log(country[0].languages);
//     const markup = countryCard(country[0]);
//     console.log(markup);
//   });
