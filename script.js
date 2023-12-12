let contagemIndividual = 0;
let contagemDupla = 0;
let contagemCachaca = 0;
let totalValor = 0;

function adicionarCaipirinha(quantidade) {
    contagemIndividual += quantidade;
    atualizarContador();
}

function adicionarCachaca() {
    contagemCachaca++;
    atualizarContador();
}

function adicionarPagamento(tipoPagamento) {
    // Atualize totalValor com base no preço e tipo de pagamento
    // Por exemplo, se for pix, adicione contagemIndividual * 12 ao totalValor
    // Faça o mesmo para débito e crédito (considerando a promoção)

    atualizarContador();
}

function atualizarContador() {
    totalValor = (contagemIndividual * 12) + (contagemDupla * 20) + (contagemCachaca * 3);
    
    document.getElementById('contagemIndividual').innerText = `Caipirinhas Individuais: ${contagemIndividual}`;
    document.getElementById('contagemDupla').innerText = `Caipirinhas Promoção: ${contagemDupla}`;
    document.getElementById('contagemCachaca').innerText = `Doses de Cachaça: ${contagemCachaca}`;
    document.getElementById('totalValor').innerText = `Total: R$ ${totalValor.toFixed(2)}`;
}
