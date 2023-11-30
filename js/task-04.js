(() => {
  const counterEl = document.getElementById('counter'),
    counterValueEl = document.getElementById('value'),
    desreaseButtonEl = counterEl.querySelector('[data-action="decrement"]'),
    increaseButtonEl = counterEl.querySelector('[data-action="increment"]');
  let counterValue = 0;

  desreaseButtonEl.addEventListener('click', () => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
  });
  increaseButtonEl.addEventListener('click', () => {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
  });
})();
