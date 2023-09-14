btnRemover.addEventListener('click', function() {
    remover();
    setTimeout(() => {
        location.reload();
    }, 10);
});

function remover(){
fetch(local+inputId.value, {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'DELETE',
   
    })
}