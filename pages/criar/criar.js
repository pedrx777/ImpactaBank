$(document).ready(function () {
    $("#btn").click(function () {
      console.log("Botão clicado");
      let cpf = $("#cpf").val();
      if (cpf == "") {
        bootbox.alert({
          message:
            "Revise os campos preenchidos. A opção do cpf é obrigatória!",
          backdrop: true,
        });
      }
    });
  });