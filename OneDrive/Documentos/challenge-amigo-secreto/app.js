//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.


// Criar uma lista para guarda os nomes dos amigos mas está vazia
let listaAmigos = [];
console.log(`lista criada vazia`);

//Função para adicionar nomes a lista de amigos
function adicionarAmigo(){

    // Pega o nome que o usuário digitou e salva na var 'nomeAmigo'
    let nomeAmigo = document.getElementById('amigo').value;
    console.log(`Nome adicionado: ${nomeAmigo}`);

    // Verificar se o nome foi preenchido corretamente ou não
    if(nomeAmigo.trim() == ''){
        alert("Erro! Preencha o campo nome!");
        console.log("Campo nome não foi preenchido!");
        return;
    }

    //Adiciona na lista o nome que foi adicionado antes na var 'nomeAmigo'
    listaAmigos.push(nomeAmigo);

    // Exibe o nome adicionado no console
    console.log(`Nome adicionado: ${nomeAmigo}`);
    console.log(`Lista atualizada: ${listaAmigos}`);

    // Pega o nome que o usuário digitou e salva na var 'nomeAmigo'
    document.getElementById('amigo').value = '';
    console.log(`Limpando o campo de texto nome. ${nomeAmigo}`);

    // Adicionar os nomes dos amigos na página
    document.getElementById('listaAmigos').innerHTML = listaAmigos;

}

// Funçao sortear amigo
function sortearAmigo(){

    // Pega o valor de pessoas que tem na lista
    let quantidade = listaAmigos.length;
    console.log(`Quantidade dentro da lista: ${quantidade}`);

    // Verificar ->> Se a quantidade de amigos é maior que zero ou não
    if(quantidade > 0 ){

        // Gerar um número aleatório de 0 há até a quantidade de amigos adicionados
        let indiceSorteado = Math.floor( Math.random() * quantidade ); 
        // Math.floor -> converte em número inteiro, redondando para baixo, isso garante que não dê erro no código.

        // Obtém o nome do amigo sorteado, na posição do indice
        let resultadoSorteio = listaAmigos[indiceSorteado];

        // Exibe o resultado no console
        console.log(`Resultado do sorteio: ${resultadoSorteio}`);

        // Adicionar o resultado na página
        document.getElementById('resultado').innerHTML = resultadoSorteio;

    } else {
        console.log("Erro: A lista de amigos está vazia. Adicione nomes antes de sortear.");
    }
    
}

//
// Chamar a função para testar
sortearAmigo();

