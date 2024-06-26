const prompt = require('prompt-sync')();
const jogador = prompt("Qual o seu nome? ");

let op;
let pontuacao = 0;
let resposta;

function futebol(){
    resposta = prompt("O Manchester United é um time da America do Sul. Verdadeiro ou falso? ");
            if(resposta.toLocaleLowerCase()==="falso"){
                console.log("CORRETO!!");
                pontuacao++;
            }else{
                console.log("INCOREETO, O MANCHESTER UNITED É UM TIME DA EUROPA")
            }
            resposta = prompt("O Real Madrid é o time com mais títulos da competição Libertadores da America. Verdadeiro ou falso? ");
            if(resposta.toLocaleLowerCase()==="falso"){
                console.log("CORRETO!!");
                pontuacao++;
            }else{
                console.log("INCORRETO, O REAL MADRID NÃO DISPUTA A LIBERTADORES DA AMERICA POIS É UM TIME EUROPEU");
            }
            resposta = prompt("Lionel Messi possuí atualmente (2024) 8 bolas de ouro. Verdadeiro ou falso? ");
            if(resposta.toLowerCase()==="verdadeiro"){
                console.log("CORRETO!!");
                pontuacao++;
            }else{
                console.log("INCORRETO, MESSI CONQUISTOU SUA 8ª BOLA DE OURO EM 2023");
            }
}

function animais(){
    resposta = prompt("O megatherium mais conhecido como preguiça gigante, um animal pré historico, nunca viveu onde hoje é o Brasil. Verdadeiro ou falso? ");
    if(resposta.toLowerCase()==="falso"){
        console.log("CORRETO!!");
        pontuacao++;
    }else{
        console.log("INCORRETO, O MEGATHERIUM VIVEU HÁ APROXIMADAMENTE 20MIL ANOS NA AMERICA DO SUL E NORTE");
    }
    resposta = prompt("O elefante é o maior animal terrestre do mundo. Verdadeiro ou falso? ");
    if(resposta.toLowerCase()==="verdadeiro"){
        console.log("CORRETO!!");
        pontuacao++;
    }else{
        console.log("INCORRETO, O ELEFANTE É O MAIOR ANIMAL TERRESTRE EXISTENTE");
    }    
    resposta = prompt("A arara azul também conhecida como ararinha azul, é uma espécie em risco de extinção. Verdadeiro ou falso? ");
    if(resposta.toLocaleLowerCase()==="falso"){
        console.log("CORRETO!!");
        pontuacao++;
    }else{
        console.log("INCORRETO, APESAR DE TEREM NOMES PARECIDOS, A ARARINHA AZUL E ARARA AZUL SÃO DIFERENTES ESPÉCIES");
    }
}

function frutas(){
    resposta = prompt("A banana é uma fruta que cresce em árvores. Verdadeiro ou falso? ");
    if(resposta.toLocaleLowerCase()==="verdadeiro"){
        console.log("CORRETO!!");
        pontuacao++;
    }else{
        console.log("INCORRETO - AS BANANAS CRESCEM EM PLANTAS QUE SÃO BOTANICAMENTE CLASSIFICADAS COMO ERVAS GIGANTES.")
    }
    resposta = prompt("O abacate é considerado uma fruta. Verdadeiro ou falso?" );
    if(resposta.toLocaleLowerCase()==="verdadeiro"){
        console.log("CORRETO!!");
        pontuacao++;
    }else{
        console.log("INCORRETO, O ABACATE É UMA FRUTA, EMBROA MUITAS VEZES SEJA CONFUDIDO COMO UM VEGETAL DEVIDO AO SEU SABOR E USO CULINÁRIO.");
    }
    resposta = prompt("A melancia é uma fruta da família das cucurbitáceas. Verdadeiro ou Falso? ");
    if(resposta.toLocaleLowerCase()==="verdadeiro"){
        console.log("CORRETO!!");
        pontuacao++;
    }else{
        console.log("INCORRETO,  A MELANCIA PERTENCE À FAMÍLIA DAS CUCURBITÁCEAS, QUE TAMBÉM INCLUI PEPINOS E ABÓBORAS.");
    }
}

while(op!=4){
    op=parseInt(prompt("Escolha uma opção para jogar. 1-Futebol 2-Animias 3-Frutas 4-Sair "));

    switch(op){
        case 1: futebol()
             break;
        case 2: animais()
            break;
        case 3: frutas()
            break;
        case 4:
            console.log("VOCÊ SAIU.");
            break;
        default:
            console.log("OPÇÃO INVÁLIDA.");
            break;
    }
}
console.log(`OBRIGADO POR JOGAR ${jogador}, VOCÊ MARCOU ${pontuacao} PONTOS.`);