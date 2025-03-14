//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.


// Criar uma lista para guardar os nomes dos amigos (inicialmente vazia)
let listaAmigos = [];
console.log(`Lista criada vazia`);

// Função para adicionar nomes à lista de amigos
function adicionarAmigo() {

    // Pega o nome que o usuário digitou, usando o trim para remover espaços em branco se o usuário deixar
    let nomeAmigo = document.getElementById('amigo').value.trim();

    // Verifica se o campo está vazio
    if (nomeAmigo == "") {
        // Se estiver vazio, exibirá esse alerta
        alert("Erro! Preencha o campo nome!");
        // Exibir mensagem no console para verificar se está tudo certo
        console.log("Campo nome não foi preenchido!");
        return;
    }

    // Adiciona o nome na lista -> "listaAmigos"
    listaAmigos.push(nomeAmigo);
    // Exibi msg no console para verificar se está funcionando, com o nome adicionado e a lista atualizada
    console.log(`Nome adicionado: ${nomeAmigo}`);
    console.log(`Lista atualizada: ${listaAmigos}`);

    // Limpa o campo de entrada, para o usuário inserir novos nomes
    document.getElementById('amigo').value = '';

    // Salva na var "listaResultados" onde vai -> Adiciona o nome na tag onde tem o id "listaAmigos", no caso na <ul></ul>
    let listaResultados = document.getElementById('listaAmigos');
    
    // Cria um novo elemento "tag" -> <li></li> e salva na var "novoItem"
    let novoItem = document.createElement('li');

    // Pega o nome que o usuário digitou "nomeAmigo" e salva na var "novoItem" onde está o elemento "li" => <li> nome adicionado </li>
    novoItem.textContent = nomeAmigo; 

    //  Pega novo elemento com o nome e adiciona dentro da tag "ul" => <ul> <li> nome adicionado </li> </ul>
    listaResultados.appendChild(novoItem); 
}


// Funçao sortear amigo
function sortearAmigo(){

    // Pega o valor de pessoas que tem na lista
    let quantidade = listaAmigos.length;
    console.log(`Quantidade dentro da lista: ${quantidade}`);

    // Verificar ->> Se a quantidade de amigos é maior que zero, se foi preenchida
    if(quantidade > 0 ){

        // Gerar um número aleatório de 0 há até a quantidade de amigos adicionados
        let indiceSorteado = Math.floor( Math.random() * quantidade ); 
        // Math.floor -> converte em número inteiro, redondando para baixo, isso garante que não dê erro no código.

        // Obtém o nome do amigo sorteado, na posição do indice, splice -> vai apagar o nome já sorteado 
        let resultadoSorteio = listaAmigos.splice(indiceSorteado, 1)[0];

        // Exibe o resultado no console
        console.log(`Resultado do sorteio: ${resultadoSorteio}`);

        // Adicionar o resultado na página
        document.getElementById('resultado').innerHTML = `<span style="color: red;">Sorteado: </span> ${resultadoSorteio}`;

		// Remover o nome sorteado da lista exibida na página
		// Vai pegar os nomes que estão na "listaAmigos"
        let listaElementos = document.getElementById('listaAmigos');

		// salva na var "itens" a posição do elemento 'tag' -> li
        let itens = listaElementos.getElementsByTagName('li');

		// Enquanto i -> 'posição', for igual a zero, e i for menor que os "itens -> li" adiciona mais 1 para avançar
		// Vai verificar se tem "li", enquanto tiver vai verificar
        for (let i = 0; i < itens.length; i++) {

			// Vai verificar se o nome é igual ao nome já sorteado
            if (itens[i].textContent === resultadoSorteio) {

				// remove o nome já sorteado, na posição que foi encontrado
                listaElementos.removeChild(itens[i]);

				// Parar o for de funcionar
                break;
            }
        }

    } else {
		// Exibi mensagem no console para verificação
        console.log("Erro: A lista de amigos está vazia. Adicione nomes antes de sortear.");
		// Exibi uma caixa de alerta avisando o usuário
        alert("Erro: A lista de amigos está vazia. Adicione nomes antes de sortear.");
        
    }
    
}




