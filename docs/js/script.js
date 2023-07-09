const searchButton = document.querySelector('[data-search]');
const inputSearch = document.querySelector('[data-search-input]');
const loginButton = document.querySelector('[data-login-button]');
const logo = document.querySelector('[data-logo]');

const openSearch = () => {
  if (inputSearch.value === '' && window.innerWidth < 768) {
    inputSearch.classList.toggle('hidden');
    inputSearch.parentElement.classList.toggle('w-full');
    loginButton.classList.toggle('hidden');
    logo.classList.toggle('hidden');
  }

  if (inputSearch.value) {
    console.log('buscar');
  }
};

searchButton.addEventListener('click', openSearch);
