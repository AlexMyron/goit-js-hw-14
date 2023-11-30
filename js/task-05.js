(() => {
  const refs = {
    inputEl: document.getElementById('name-input'),
    outputEl: document.getElementById('name-output'),
  };

  refs.inputEl.addEventListener('input', ({ target: { value } }) => {
    refs.outputEl.textContent = value || 'Anonymous';
  });
})();
