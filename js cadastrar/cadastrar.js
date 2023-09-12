btnCadastrar.addEventListener('click', function() {
    if (!fica_em_alerta()){
        cadastrar();
        setTimeout(() => {
            location.reload();
        }, 100);
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
            'desc': inputDesc.value,
            'preco': inputPreco.value
        })
    })
}