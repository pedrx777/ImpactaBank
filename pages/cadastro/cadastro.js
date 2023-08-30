function clearPlaceholder(inputElement) {
    inputElement.placeholder = '';
  }

  function restorePlaceholderEmail(inputElement) {
    if (inputElement.value === '') {
      inputElement.placeholder = 'Seu E-mail';
    }
  }

  function restorePlaceholderName(inputElement) {
    if (inputElement.value === '') {
      inputElement.placeholder = 'Seu nome';
    }
  }

  function restorePlaceholderKey(inputElement) {
    if (inputElement.value === '') {
      inputElement.placeholder = 'Sua senha';
    }
  }

  function restorePlaceholderKeyconfirm(inputElement) {
    if (inputElement.value === '') {
      inputElement.placeholder = 'Confirme sua senha';
    }
  }