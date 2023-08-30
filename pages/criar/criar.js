function clearPlaceholder(inputElement) {
    inputElement.placeholder = '';
  }

  function restorePlaceholderCpf(inputElement) {
    if (inputElement.value === '') {
      inputElement.placeholder = 'Seu CPF';
    }
  }