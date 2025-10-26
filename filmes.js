document.addEventListener('DOMContentLoaded', function() {
    const formFilme = document.getElementById('formFilme');
    
    formFilme.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const filme = {
            id: new Date().getTime(),
            titulo: document.getElementById('titulo').value,
            descricao: document.getElementById('descricao').value,
            genero: document.getElementById('genero').value,
            classificacao: document.getElementById('classificacao').value,
            duracao: document.getElementById('duracao').value,
            dataEstreia: document.getElementById('dataEstreia').value
        };
        
        salvarFilme(filme);
        formFilme.reset();
        alert('Filme cadastrado com sucesso!');
    });
});

function salvarFilme(filme) {
    let filmes = JSON.parse(localStorage.getItem('filmes')) || [];
    filmes.push(filme);
    localStorage.setItem('filmes', JSON.stringify(filmes));
}