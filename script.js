function changeBackroundColor() {
  const bodyEL = document.querySelector('body');
  const dropdownEL = document.querySelector('select');

  bodyEL.style.backgroundColor = dropdownEL.value;
}