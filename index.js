document.addEventListener('DOMContentLoaded', function() {
    inicializarLocalStorage();
});

function inicializarLocalStorage() {
    if (!localStorage.getItem('filmes')) {
        localStorage.setItem('filmes', JSON.stringify([]));
    }
    
    if (!localStorage.getItem('salas')) {
        localStorage.setItem('salas', JSON.stringify([]));
    }
    
    if (!localStorage.getItem('sessoes')) {
        localStorage.setItem('sessoes', JSON.stringify([]));
    }
    
    if (!localStorage.getItem('ingressos')) {
        localStorage.setItem('ingressos', JSON.stringify([]));
    }
}