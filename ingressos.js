document.addEventListener('DOMContentLoaded', function() {
    const formIngresso = document.getElementById('formIngresso');
    const selectSessao = document.getElementById('sessao');
    
    carregarSessoes();
    
    const urlParams = new URLSearchParams(window.location.search);
    const sessaoId = urlParams.get('sessaoId');
    
    if (sessaoId) {
        selectSessao.value = sessaoId;
    }
    
    formIngresso.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const sessaoSelect = document.getElementById('sessao');
        const sessaoOption = sessaoSelect.options[sessaoSelect.selectedIndex];
        
        const ingresso = {
            id: new Date().getTime(),
            sessaoId: sessaoSelect.value,
            sessaoInfo: sessaoOption.text,
            nomeCliente: document.getElementById('nomeCliente').value,
            cpf: document.getElementById('cpf').value,
            assento: document.getElementById('assento').value,
            tipoPagamento: document.getElementById('tipoPagamento').value,
            dataCompra: new Date().toISOString()
        };
        
        salvarIngresso(ingresso);
        formIngresso.reset();
        alert('Ingresso vendido com sucesso!');
    });
});

function carregarSessoes() {
    const sessoes = JSON.parse(localStorage.getItem('sessoes')) || [];
    const selectSessao = document.getElementById('sessao');
    
    selectSessao.innerHTML = '<option value="">Selecione uma sessão</option>';
    
    sessoes.forEach(sessao => {
        const dataHora = new Date(sessao.dataHora).toLocaleString('pt-BR');
        const option = document.createElement('option');
        option.value = sessao.id;
        option.textContent = `${sessao.filmeTitulo} - ${sessao.salaNome} - ${dataHora} - R$ ${sessao.preco}`;
        selectSessao.appendChild(option);
    });
}

function salvarIngresso(ingresso) {
    let ingressos = JSON.parse(localStorage.getItem('ingressos')) || [];
    ingressos.push(ingresso);
    localStorage.setItem('ingressos', JSON.stringify(ingressos));
}