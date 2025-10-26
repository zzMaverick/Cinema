document.addEventListener('DOMContentLoaded', function() {
    carregarSessoes();
});

function carregarSessoes() {
    const sessoes = JSON.parse(localStorage.getItem('sessoes')) || [];
    const tbody = document.getElementById('corpoTabelaSessoes');
    
    tbody.innerHTML = '';
    
    if (sessoes.length === 0) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.setAttribute('colspan', '5');
        td.textContent = 'Nenhuma sessão cadastrada';
        td.style.textAlign = 'center';
        tr.appendChild(td);
        tbody.appendChild(tr);
        return;
    }
    
    sessoes.forEach(sessao => {
        const tr = document.createElement('tr');
        
        const tdFilme = document.createElement('td');
        tdFilme.textContent = sessao.filmeTitulo;
        tr.appendChild(tdFilme);
        
        const tdSala = document.createElement('td');
        tdSala.textContent = sessao.salaNome;
        tr.appendChild(tdSala);
        
        const tdDataHora = document.createElement('td');
        tdDataHora.textContent = new Date(sessao.dataHora).toLocaleString('pt-BR');
        tr.appendChild(tdDataHora);
        
        const tdPreco = document.createElement('td');
        tdPreco.textContent = `R$ ${sessao.preco}`;
        tr.appendChild(tdPreco);
        
        const tdAcao = document.createElement('td');
        const btnComprar = document.createElement('button');
        btnComprar.textContent = 'Comprar Ingresso';
        btnComprar.classList.add('btn-comprar');
        btnComprar.addEventListener('click', function() {
            window.location.href = `venda-ingressos.html?sessaoId=${sessao.id}`;
        });
        tdAcao.appendChild(btnComprar);
        tr.appendChild(tdAcao);
        
        tbody.appendChild(tr);
    });
}