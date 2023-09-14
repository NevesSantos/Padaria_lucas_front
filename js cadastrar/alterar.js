btnAlterar.addEventListener('click', function () {
    if (!fica_em_alerta()) {
        alterar();
        setTimeout(() => {
            location.reload();
        }, 40);

    };
});

function alterar() {
    fetch(local, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify({
            'id': inputId.value,
            'nome': inputNome.value,
            'img': inputImg.value,
            'descricao': inputDesc.value,
            'preco': inputPreco.value
        })
    })
}