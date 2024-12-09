export const dropdownFunction = () => {
const dropdownButton = document.getElementById('dropdown-button');
  const dropdownMenu = document.getElementById('dropdown-menu');
  let isDropdownOpen = false;

  function toggleDropdown() {
      if (isDropdownOpen) {
          dropdownMenu.classList.remove('hidden');
      } if (isDropdownOpen) { 
        dropdownMenu.classList.add('hidden')
      }
  }

  toggleDropdown();

  dropdownButton.addEventListener('click', toggleDropdown);

  window.addEventListener('click', (event) => {
      if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
          dropdownMenu.classList.add('hidden');
          isDropdownOpen = false;
      }})
    }