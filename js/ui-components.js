function toggleDropdown(button) {
  const content = button.nextElementSibling;
  const isOpen = content.classList.toggle('open');
  button.classList.toggle('active', isOpen);
  button.setAttribute('aria-expanded', isOpen);
  const icon = button.querySelector('.fa-chevron-down');
  if (icon) icon.style.transform = isOpen ? 'rotate(180deg)' : '';
}
