function changeBackroundColor() {
  const bodyEl = document.querySelector('body');
  const dropdownEl = document.querySelector('select');
  const introTextEls = document.querySelectorAll(".intro-text");

  bodyEl.style.backgroundColor = dropdownEl.value;

  
  introTextEls.forEach(el => {
    if (dropdownEl.value !== 'white') {
      el.classList.add('colored');
    } else {
      el.classList.remove('colored');
    }
  });
  }
}