//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.


// Criar uma lista para guarda os nomes, vazia
let listaAmigos = [];
console.log(`lista criada vazia`);

//Função para adicionar nomes a lista
function adicionarAmigo(){

    //
    let nomeAmigo = document.getElementById('amigo').value;
    console.log(`Nome adicionado: ${nomeAmigo}`);

    //Adicionando nomes na lista
    listaAmigos.push(nomeAmigo);
    console.log(`Dados na lista: ${listaAmigos}`);

    // limpar os campos digitados
    document.getElementById('amigo').innerHTML = '';



}



// Mostrando um nome da lista
//console.log(`Nome na posição 3: ${listaAmigos[2]}`);

// Criando um número aleatório, para seleciona um nome
//let numeroAleatorio = parseInt( Math.random() * 5 );

//console.log(`Nome escolhido aleatório: ${listaAmigos[numeroAleatorio]}`);



