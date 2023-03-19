const form = document.getElementById('formulario');
const contatos = [];
const numeros = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaContato();
    atualizaAgenda();
})

function adicionaContato() {
    const nomeContato = document.getElementById('nome-contato');
    const numeroContato = document.getElementById('numero-contato');

    if(contatos.includes(nomeContato.value)) {
        alert (`O contato ${nomeContato.value} já foi inserido!`);
    } else {
        contatos.push(nomeContato.value)
        numeros.push(numeroContato.value)

        let linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${numeroContato.value}</td>`;
        linha += `</tr>`;

        linhas += linha;

        nomeContato.value = '';
        numeroContato.value = '';
    }
}

function atualizaAgenda() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}