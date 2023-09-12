let inputId = document.getElementById("id");
let inputNome = document.getElementById("nome");
let inputImg = document.getElementById("img");
let inputDesc = document.getElementById("desc");
let inputPreco = document.getElementById("preco");

let btnCadastrar = document.getElementById("cadastrar");
let btnAlterar = document.getElementById("alterar");
let btnRemover = document.getElementById("remover");
let btnCancelar = document.getElementById("cancelar");
let btnPadaria = document.getElementById("padaria");

let hidden = true;

let local = "http://localhost:8080/"

btnPadaria.addEventListener('click', function(){
    window.location.href = "http://127.0.0.1:5500/padaria.html";
});