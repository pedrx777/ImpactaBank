document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os elementos com o id "redirect-btn"
    const redirectButtons = document.querySelectorAll(".btna");
  
    // Função para redirecionar com base no botão clicado
    function redirectToDestination(event) {
      const button = event.target;
      const destination = button.getAttribute("data-destination");
  
      if (destination) {
        window.location.href = destination;
      }
    }
  
    // Adiciona o evento de clique a cada botão
    redirectButtons.forEach(function (button) {
      button.addEventListener("click", redirectToDestination);
    });
  });
  