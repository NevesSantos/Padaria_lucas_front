btnCadastrar.addEventListener('click', function() {
    if (!fica_em_alerta()){
        cadastrar();
        setTimeout(() => {
            location.reload();
        }, 10);
    };
});

function cadastrar(){
    fetch(local, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            'nome': inputNome.value,
            'img': inputImg.value,
            'descricao': inputDesc.value,
            'preco': inputPreco.value
        })
    })
}