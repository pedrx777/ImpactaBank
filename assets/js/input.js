function clearPlaceholder(inputElement) {
    inputElement.placeholder = '';
  }
  
  function restoreField(field, placeholder) {
    if (field.value === '') {
      field.placeholder = placeholder
    }
  }