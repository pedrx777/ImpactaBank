function consultaEndereco() {
    let cep = document.querySelector('#cep').value;

    if (cep.length !== 8){
        alert('CEP inválido!');
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            if (data.erro){
                alert('CEP não encontrado');
                return
            }
            mostrarEndereco(data);
        })
    .catch(function(error){
        console.log('Ocorreu um erro: ', error)
    });
    }

function mostrarEndereco(dados){
    document.getElementById('logradouro').value = dados.logradouro;
    document.getElementById('bairro').value = dados.bairro;

       
}


