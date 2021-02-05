function changeBackroundColor() {
  const bodyEl = document.querySelector('body');
  const dropdownEl = document.querySelector('select');
  const introTextEls = document.querySelectorAll(".intro-text");

  bodyEl.style.backgroundColor = dropdownEl.value;

  if (dropdownEl.value !== 'white') {
    introTextEls.forEach(el => {
      el.classList.add('colored');
    });
  } else {
    introTextEls.forEach(el => {
      el.classList.remove('colored');
    });
  }
}