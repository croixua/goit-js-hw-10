import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './js/fetchCountries';
import { makeMarkupList, makeMarkupCard, resetMarkup } from './js/markup-settings';
import './css/styles.css';

const inputRef = document.querySelector('#search-box');
const DEBOUNCE_DELAY = 300;

inputRef.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  const name = e.target.value.trim();
  console.log(name);

  if (name === '') {
    resetMarkup();
    return;
  }

  fetchCountries(name)
    .then(data => {
      if (data.length > 10)
        return Notify.info('Too many matches found. Please enter a more specific name.');

      if (data.length > 1) return makeMarkupList(data);

      makeMarkupCard(data);
    })
    .catch(error => {
      resetMarkup();
      return Notify.failure('Oops, there is no country with that name');
    });
}
