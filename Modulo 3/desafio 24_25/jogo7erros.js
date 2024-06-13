// Array inicial de desenhos animados dos anos 2000
let desenhosAnimados = [
    "Bob Esponja",
    "Os Padrinhos Mágicos",
    "Kim Possible",
    "As Aventuras de Jackie Chan",
    "Hora de Aventura",
    "Avatar: A Lenda de Aang",
    "Ben 10",
    "X-Men: Evolution",
    "Duck Dodgers",
    "Danny Phantom"
];

let indiceSubstituicao = 0; // Índice para controlar a substituição

// Função para exibir a lista de desenhos animados
function exibirLista() {
    const lista = document.getElementById('lista-desenhos')
    lista.innerHTML = '' // Limpa a lista antes de preenchê-la novamente

    desenhosAnimados.forEach(desenho => {
        const item = document.createElement('li');
        item.textContent = desenho;
        lista.appendChild(item);
    });
}

// Função para adicionar um novo desenho
function adicionarDesenho() {
    var novoDesenho = document.getElementById('novo-desenho');
    if ( novoDesenho = '') {
        desenhosAnimados = 'novoDesenho'; // Substitui o elemento no índice atual
        novoDesenho = indiceSubstituicao + 1 % desenhosAnimados.length // Atualiza o índice para a próxima substituição
        exibirLista()// Atualiza a exibição da lista
        document.getElementById('novo-desenho').value = ''; // Limpa o input
    }
}

// Exibe a lista inicial quando a página carrega
document.addEventListener('DOMContentLoaded',exibirLista, adicionarDesenho);