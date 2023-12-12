let contagemIndividual = 0;
let contagemDupla = 0;
let contagemDose = 0;
let valorCaipirinha = 0;
let valorCaipirinhaDupla = 0;
let valorDose = 0;
let totalValor = 0;


function adicionarIndividual(tipoPagamento) {
    contagemIndividual++;
    valorCaipirinha += 12;
    if (tipoPagamento == 2) 
    {
        valorCaipirinha -= valorCaipirinha * 0.0138 //taxa débito infinity pay
    }
    if (tipoPagamento == 3) 
    {
        valorCaipirinha -= valorCaipirinha * 0.0316 //taxa crédito infinity pay
    }
    atualizarContador();
}

function adicionarDupla(tipoPagamento) {
    contagemDupla += 2;
    valorCaipirinhaDupla += 20;
    if (tipoPagamento == 2) 
    {
        valorCaipirinhaDupla -= valorCaipirinhaDupla * 0.0138 //taxa débito infinity pay
    }
    if (tipoPagamento == 3) 
    {
        valorCaipirinhaDupla -= valorCaipirinhaDupla * 0.0316 //taxa crédito infinity pay
    }
    atualizarContador();
}


function adicionarDose(tipoPagamento) {
    contagemDose++;
    valorDose += 3;
    if (tipoPagamento == 2) 
    {
        valorDose -= valorDose * 0.0138 //taxa débito infinity pay
    }

    if (tipoPagamento == 3) 
    {
        valorDose -= valorDose * 0.0316 //taxa crédito infinity pay
    }

    atualizarContador();
}


function atualizarContador() {
    totalValor = valorCaipirinha + valorCaipirinhaDupla + valorDose;
    
    document.getElementById('contagemIndividual').innerText = `Caipirinhas vendidas: ${contagemIndividual+contagemDupla}`;
    document.getElementById('contagemCachaca').innerText = `Doses de cachaça: ${contagemDose}`;
    document.getElementById('totalValor').innerText = `Total arrecadado: R$ ${totalValor.toFixed(2)}`;
}
