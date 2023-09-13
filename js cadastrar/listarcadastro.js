fetch(local, {
    headers: {
        'Content-Type': 'application/json'
    },
    method: "GET"})
    .then(resposta => resposta.json())
    .then(listaDeProdutos => listarProdutos(listaDeProdutos))
    .catch(console.error);

    function listarProdutos(produtos){
        produtos.forEach(p => {
            
            var novalinha = document.createElement("tr");

            var colId = document.createElement("td");
            var colNome = document.createElement("td");
            var colImg = document.createElement("td");
            var colDesc = document.createElement("td");
            var colPreco = document.createElement("td");
            var colClicar = document.createElement("td");
        
            colId.classList.add("col-id");
            colId.innerText = p.id;

            colNome.classList.add("col-nome");
            colNome.innerText = p.nome;

            colImg.classList.add("col-img");
            colImg.innerText = p.img;
            
            colDesc.classList.add("col-descricao");
            colDesc.innerText = p.descricao;
            
            colPreco.classList.add("col-preco");
            colPreco.innerText = p.preco;

            colClicar.innerHTML = '<button class="btn btn-success">Clique</button>';
        
            novalinha.appendChild(colId);
            novalinha.appendChild(colNome);
            novalinha.appendChild(colImg);
            novalinha.appendChild(colDesc);
            novalinha.appendChild(colPreco);
            novalinha.appendChild(colClicar);
        
            document.querySelector("tbody").appendChild(novalinha);
        });
        selecionar();
    }