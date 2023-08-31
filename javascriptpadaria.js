
fetch("http://localhost:8080/listar",
    {
        Headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }
        )

let listaProdutos = [
    produto = {
        nomeProduto: 'Pão francês',
        imgProduto: 'img/pao-frances.jpg',
        descProduto: 'Tradicional pão feito com farinha refinada, água, sal e fermento.',
        precoProduto: 'R$ 8,99 kg'
    },
    produto = {
        nomeProduto: 'Pão de queijo',
        imgProduto: 'img/pao-queijo.jpg',
        descProduto: 'Pão de queijo quentinho.',
        precoProduto: 'R$ 25,99 kg'
    },
    produto = {
        nomeProduto: 'Pão de doce',
        imgProduto: 'img/pao-doce.jpg',
        descProduto: 'Pãozinho doce, bem doce mesmo!',
        precoProduto: 'R$ 9,99 kg'
    },
    produto = {
        nomeProduto: 'Pão integral',
        imgProduto: 'img/pao-integral.jpg',
        descProduto: 'Pão feito com farinha integral, que mantém todos os nutrientes.',
        precoProduto: 'R$ 11,99 kg'
    },
    produto = {
        nomeProduto: 'Pão de queijo',
        imgProduto: 'img/pao-queijo.jpg',
        descProduto: 'Pão de queijo quentinho.',
        precoProduto: 'R$ 25,99 kg'
    },
    produto = {
        nomeProduto: 'Pão de doce',
        imgProduto: 'img/pao-doce.jpg',
        descProduto: 'Pãozinho doce, bem doce mesmo!',
        precoProduto: 'R$ 9,99 kg'
    },
    produto = {
        nomeProduto: 'Pão integral',
        imgProduto: 'img/pao-integral.jpg',
        descProduto: 'Pão feito com farinha integral, que mantém todos os nutrientes.',
        precoProduto: 'R$ 11,99 kg'
    }
];

let divRow = document.createElement('div');

for (let i = 0; i < listaProdutos.length; i++) {
    let img = document.createElement('img');
    img.classList.add('img-produto')
    img.setAttribute('src', listaProdutos[i].imgProduto);
    img.setAttribute('alt', listaProdutos[i].nomeProduto);

    let divNome = document.createElement('div');
    divNome.classList.add('nome-produto');
    divNome.innerText = listaProdutos[i].nomeProduto;

    let divDesc = document.createElement('div');
    divDesc.classList.add('descricao');
    divDesc.innerText = listaProdutos[i].descProduto;

    let divPreco = document.createElement('div');
    divPreco.classList.add('preco');
    divPreco.innerText = listaProdutos[i].precoProduto;

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