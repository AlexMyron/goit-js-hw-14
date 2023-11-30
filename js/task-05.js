(() => {
  const refs = {
    inputEl: document.getElementById('name-input'),
    outputEl: document.getElementById('name-output'),
  };

  const handleInput = ({ target: { value } }) => {
    refs.outputEl.textContent = value || 'Anonymous';
  }

  refs.inputEl.addEventListener('input', handleInput);
})();
