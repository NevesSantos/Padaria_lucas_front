function getProdutos() {
    fetch("http://localhost:8080/listar")
        .then(retorno => retorno.json())
        .then(dados => listaProdutos(dados));
}

getProdutos();

function listaProdutos(produtos) {
    console.log(produtos);

    let divRow = document.createElement('div');

    for (let i = 0; i < produtos.length; i++) {
        let img = document.createElement('img');
        img.classList.add('img-produto')
        img.setAttribute('src', produtos[i].img);
        img.setAttribute('alt', produtos[i].nome);

        let divNome = document.createElement('div');
        divNome.classList.add('nome-produto');
        divNome.innerText = produtos[i].nome;

        let divDesc = document.createElement('div');
        divDesc.classList.add('descricao');
        divDesc.innerText = produtos[i].descricao;

        let divPreco = document.createElement('div');
        divPreco.classList.add('preco');
        divPreco.innerText = produtos[i].preco;

        let button = document.createElement('button');
        button.classList.add('btn', 'btn-success');
        button.innerText = 'Comprar >>>';

        let divCol = document.createElement('div');
        divCol.classList.add('col-3', 'produto');
        divCol.appendChild(img);
        divCol.appendChild(divNome);
        divCol.appendChild(divDesc);
        divCol.appendChild(divPreco);
        divCol.appendChild(button);

        divRow.classList.add('row');
        divRow.appendChild(divCol);
    }
    let divProdutos = document.getElementById('produtos');
    divProdutos.appendChild(divRow);
};