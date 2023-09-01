function clearPlaceholder(inputElement) {
    inputElement.placeholder = '';
  }
  
  function restoreField(field, placeholder) {
    if (field.value === '') {
      field.placeholder = placeholder
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("continue-btn").addEventListener("click", function () {
      window.location.href = "../recuperacao/recuperacao.html";
    });
  });