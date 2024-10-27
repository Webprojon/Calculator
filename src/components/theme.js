const themeToggleButton = document.querySelector('.calc__header-btn');
const window = document.querySelector('.calc__window');
const input = document.querySelector('.calc__window-input');
const bodyElement = document.body;

// Function of adding or deleting classes
function setTheme(isDark) {
  const themeClass = isDark ? 'dark__theme' : 'light__theme';
  const buttonText = isDark ? 'Light Mode' : 'Dark Mode';
  const iconClass = isDark ? 'fa-sun' : 'fa-moon';

  bodyElement.className = themeClass;
  themeToggleButton.innerHTML = `<i class="fa-solid ${iconClass}"></i> ${buttonText}`;

  [window, input].forEach((el) =>
    el.classList.toggle('calc__window-theme', !isDark),
  );
  document
    .querySelectorAll('.calc__operator')
    .forEach((el) => el.classList.toggle('calc__operator-theme', !isDark));
  document
    .querySelectorAll('.calc__top-symbol')
    .forEach((el) => el.classList.toggle('calc__top-symbol-theme', !isDark));
  document
    .querySelectorAll('.calc__symbol')
    .forEach((el) => el.classList.toggle('calc__symbol-theme', !isDark));

  localStorage.setItem('theme', themeClass);
}

// Update current theme
document.addEventListener('DOMContentLoaded', () => {
  const isDark = localStorage.getItem('theme') === 'dark__theme';
  setTheme(isDark);
});

// Toggling the theme
themeToggleButton.addEventListener('click', () => {
  setTheme(!bodyElement.classList.contains('dark__theme'));
});
