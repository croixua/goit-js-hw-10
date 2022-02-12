import countryCard from '../template/country-card.hbs';
import countryList from '../template/country-list.hbs';

const countryListRef = document.querySelector('.country-list');
const countryInfoRef = document.querySelector('.country-info');
const inputRef = document.querySelector('#search-box');

export const makeMarkupCard = country => {
  const markup = countryCard(country);

  countryListRef.innerHTML = '';
  countryInfoRef.innerHTML = markup;
  inputRef.value = '';
};

export const makeMarkupList = list => {
  const markup = countryList(list);

  countryInfoRef.innerHTML = '';
  countryListRef.innerHTML = markup;
};

export const resetMarkup = () => {
  countryInfoRef.innerHTML = '';
  countryListRef.innerHTML = '';
};
