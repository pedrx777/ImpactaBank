$(document).ready(function () {
    $("#btn").click(function () {
      console.log("Botão clicado");
      let email = $("#email").val();
      let name = $("#name").val();
      let key = $("#key").val();
      let keyconfirm = $("#keyconfirm").val();
      if (email == "" || key == "" || name == "" || keyconfirm == "") {
        bootbox.alert({
          message:
            "Revise os campos preenchidos. Ambos os campos são obrigatórios!",
          backdrop: true,
        });
      }
    });
  });
  
  