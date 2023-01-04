// Toggle Menu
const elements = document.querySelectorAll(
  '#menu-btn, #close-menu-btn, .menu-list a ',
);

elements.forEach((e) => {
  e.addEventListener('click', () => {
    document.body.classList.toggle('show-menu');
  });
});
