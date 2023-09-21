function getProdutos() {
    fetch(local, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'GET',
    })
        .then(resposta => resposta.json())
        .then(dados => listarProdutos(dados))
        .catch(console.error());
}

function listarProdutos(produtos){
    produtos.forEach(p => {
        inserirProduto(p);
    });
}

function inserirProduto(p){
    var colId = document.createElement("td");
        colId.innerText = p.id;
        colId.classList.add('col-id');

        var colNome = document.createElement("td");
        colNome.innerText = p.nome;
        colNome.classList.add('col-nome');

        var colImg = document.createElement("td");
        var img = document.createElement('img');
        img.src = "data:img/jpg;base64," + p.img;
        colImg.appendChild(img);
        colImg.classList.add('col-img');

        var colDesc = document.createElement("td");
        colDesc.innerText = p.descricao;
        colDesc.classList.add('col-desc');

        var colPreco = document.createElement("td");
        colPreco.innerText = p.preco;
        colPreco.classList.add('col-preco');

        var colSel = document.createElement("td");
        var btnSelect = document.createElement("button");
        btnSelect.classList.add("btn", "btn-success");
        btnSelect.innerText = "Selecionar";
        colSel.appendChild(btnSelect);

        var novaLinha = document.createElement("tr");
        novaLinha.appendChild(colId);
        novaLinha.appendChild(colNome);
        novaLinha.appendChild(colImg);
        novaLinha.appendChild(colDesc);
        novaLinha.appendChild(colPreco);
        novaLinha.appendChild(colSel);

        document.querySelector('tbody').appendChild(novaLinha);
        selecionar(btnSelect);
}

getProdutos();