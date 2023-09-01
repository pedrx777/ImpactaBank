function startLoadingAnimation() {
  var loadingOverlay = document.getElementById("loadingOverlay");
  loadingOverlay.style.display = "block";

  setTimeout(function () {
    // Após a simulação de carregamento, redireciona para outra página
    window.location.href = "../../index.html";
  }, 2000); // Simulando um atraso de 3 segundos antes do redirecionamento
}


