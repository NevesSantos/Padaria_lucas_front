btnRemover.addEventListener('click', function() {
    remover();
    setTimeout(() => {
        location.reload();
    }, 70);
});

function remover(){
fetch(local+inputId.value, {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'DELETE',
   
    })
}