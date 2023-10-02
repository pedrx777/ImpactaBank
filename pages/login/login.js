$(document).ready(function () {
  $("#btn").click(function () {
    console.log("Botão clicado");
    let cpf = $("#cpf").val();
    let key = $("#key").val();
    if (cpf == "" || key == "") {
      bootbox.alert({
        message:
          "Revise os campos preenchidos. Ambos os campos são obrigatórios!",
        backdrop: true,
      });
    }
  });
});

