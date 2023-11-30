(() => {
  const counterEl = document.getElementById('counter'),
    counterValueEl = document.getElementById('value'),
    desreaseButtonEl = counterEl.querySelector('[data-action="decrement"]'),
    increaseButtonEl = counterEl.querySelector('[data-action="increment"]');
  let counterValue = 0;

  const decreaseValue = () => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
  }
  const increaseValue = () => {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
  }

  desreaseButtonEl.addEventListener('click', decreaseValue);
  increaseButtonEl.addEventListener('click', increaseValue);
})();
