document.addEventListener('DOMContentLoaded', function() {
    const formSessao = document.getElementById('formSessao');
    const selectFilme = document.getElementById('filme');
    const selectSala = document.getElementById('sala');
    
    carregarFilmes();
    carregarSalas();
    
    formSessao.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const filmeSelect = document.getElementById('filme');
        const salaSelect = document.getElementById('sala');
        const filmeOption = filmeSelect.options[filmeSelect.selectedIndex];
        const salaOption = salaSelect.options[salaSelect.selectedIndex];
        
        const sessao = {
            id: new Date().getTime(),
            filmeId: filmeSelect.value,
            filmeTitulo: filmeOption.text,
            salaId: salaSelect.value,
            salaNome: salaOption.text,
            dataHora: document.getElementById('dataHora').value,
            preco: document.getElementById('preco').value,
            idioma: document.getElementById('idioma').value,
            formato: document.getElementById('formato').value
        };
        
        salvarSessao(sessao);
        formSessao.reset();
        alert('Sessão cadastrada com sucesso!');
    });
});

function carregarFilmes() {
    const filmes = JSON.parse(localStorage.getItem('filmes')) || [];
    const selectFilme = document.getElementById('filme');
    
    selectFilme.innerHTML = '<option value="">Selecione um filme</option>';
    
    filmes.forEach(filme => {
        const option = document.createElement('option');
        option.value = filme.id;
        option.textContent = filme.titulo;
        selectFilme.appendChild(option);
    });
}

function carregarSalas() {
    const salas = JSON.parse(localStorage.getItem('salas')) || [];
    const selectSala = document.getElementById('sala');
    
    selectSala.innerHTML = '<option value="">Selecione uma sala</option>';
    
    salas.forEach(sala => {
        const option = document.createElement('option');
        option.value = sala.id;
        option.textContent = sala.nome;
        selectSala.appendChild(option);
    });
}

function salvarSessao(sessao) {
    let sessoes = JSON.parse(localStorage.getItem('sessoes')) || [];
    sessoes.push(sessao);
    localStorage.setItem('sessoes', JSON.stringify(sessoes));
}