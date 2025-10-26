document.addEventListener('DOMContentLoaded', function() {
    const formSala = document.getElementById('formSala');
    
    formSala.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const sala = {
            id: new Date().getTime(),
            nome: document.getElementById('nomeSala').value,
            capacidade: document.getElementById('capacidade').value,
            tipo: document.getElementById('tipo').value
        };
        
        salvarSala(sala);
        formSala.reset();
        alert('Sala cadastrada com sucesso!');
    });
});

function salvarSala(sala) {
    let salas = JSON.parse(localStorage.getItem('salas')) || [];
    salas.push(sala);
    localStorage.setItem('salas', JSON.stringify(salas));
}