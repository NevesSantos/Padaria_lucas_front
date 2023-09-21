document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    var dadosDoFormulario = new FormData(this);
    console.log(this);

    fetch(local, {
        method: 'POST',
        body: dadosDoFormulario
    
    })
    .then(resposta => resposta.json())
    .then(produto => inserirProduto(produto))
    .catch(error => {
        console.error("Ocorreu um erro:", error);
    });



})


