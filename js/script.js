// UI
$().attr("maxlength", CPF_TAMANHO)
    .on("input", somenteNumero) // Evento, Função
    .on("focusout", validacao);

let ui = {
    caterinha: document.querySelector('#input-numCarterinha'),
    cpf: document.querySelector('#input-cpf'),
    email: document.querySelector('#input-email'),
    telefone: document.querySelector('#input-tel'),
    cep: document.querySelector('#input-cep'),
    botao: document.querySelector(".btn-enviar")
}

const CPF_TAMANHO = 11;
const CARTERINHA = 18;
const TELEFONE_TAMANHO = 11;
const CEP_TAMANHO = 8;


// Validar os dados inseriodo 
function validacao(e) {
    e.preventDefault();

    console.log(caterinha.this);


}