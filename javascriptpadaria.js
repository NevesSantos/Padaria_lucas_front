let listaProdutos = [
    produto = {
        nomeProduto: 'Pão Francês',
        imgProduto: 'img/pao-frances.jpg',
        descProduto: 'Veio da frança',
        precoProduto: 'R$ 8,99 Kg'
    },

    produto = {
        nomeProduto: 'Pão de Queijo',
        imgProduto: 'img/pao-queijo.jpg',
        descProduto: 'Veio do queijo',
        precoProduto: 'R$ 10,99 Kg'
    },

    produto = {
        nomeProduto: 'Pão Doce',
        imgProduto: 'img/pao-doce.jpg',
        descProduto: 'Veio da terra doce',
        precoProduto: 'R$ 25,50 Kg'
    },

    produto = {
        nomeProduto: 'Pão integral',
        imgProduto: 'img/pao-integral.jpg',
        descProduto: 'Veio do integrado',
        precoProduto: 'R$ 20.99 Kg'
    },
];
let divRow = document.createElement('div');

let img = document.createElement('img');
img.classList.add('img-produto');
img.setAttribute('src', listaProdutos[0].imgProduto);
img.setAttribute('alt', listaProdutos[0].nomeProduto);

let divNome = document.createElement('div');
divNome.classList.add('nome-produto');
divNome.innerText= (listaProdutos[0].nomeProduto);
let divDesc = document.createElement('div');
divDesc.classList.add('desc-produto');
divDesc.innerText= (listaProdutos[0].descProduto);
let divpreco = document.createElement('div');
divpreco.classList.add('preco-produto');
divpreco.innerText= (listaProdutos[0].precoProduto);
let button = document.createElement('div');
button.classList.add('btn')

let divcol = document.createElement('div');
divcol.classList.add('col-3');
divcol.appendChild(img);
divcol.appendChild(divNome);
divcol.appendChild(divDesc);
divcol.appendChild(divpreco);


divRow.classList.add('row');
divRow.appendChild(divcol);

let divProdutos = document.getElementById('produtos');
divProdutos.appendChild(divRow);

console.log(divProdutos);