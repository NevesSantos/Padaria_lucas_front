function limpaTudo(){
    inputId.value = "";
    inputNome.value = "";
    inputImg.value = "";
    inputDesc.value = "";
    inputPreco.value = "";
};

function btnHidden(){
    if (hidden) {
        btnCadastrar.classList.toggle('visually-hidden');
        btnAlterar.classList.toggle('visually-hidden');
        btnRemover.classList.toggle('visually-hidden');
        btnCancelar.classList.toggle('visually-hidden');
    }
};

btnCancelar.addEventListener('click', function(){
    limpaTudo();
    hidden = true;
    btnHidden();
});

function fica_em_alerta(){
    if(inputNome.value.trim() === ""){
        alert("<3 O campo Nome deve ser preenchido besta :D <3");
        return true;
    }else if(inputImg.value.trim() === "" || inputDesc.value.trim() === "" || inputPreco.value.trim() === ""){
        alert("<3 Preenche tudo mano aff :D <3");
        return true;
    }

};
