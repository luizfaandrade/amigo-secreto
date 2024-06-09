//array
let amigos = [];

//criando lista, e não deixar cadastar sem inserir um nome 
function adicionar() {
    let amigo = document.getElementById('nome-amigo');

    let amigoValue = amigo.value.trim();//Remove espaço em branco nas extremidades
    //verifica se o campo não esta vazio
        if (amigo.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }
//não deixa repetir o nome
    if (amigos.includes(amigo.value)) {
        alert('Nome ja adicionado!');
        return;
    }
// converte o nome em maiúscula
    let amigoValueUpper = amigoValue. toUpperCase();
    //verifica se o nome já existe no array (insensível a maiúsculas/minúsculas)
    if (amigos.some(amigo => amigo.toUpperCase() == amigoValueUpper)){
        alert('O nome já esta na lista.');
        return;
    }
    
    let lista = document.getElementById('lista-amigos');


    amigos.push(amigo.value);
   
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }


    amigo.value = '';
    

    atualizarLista();
    atualizarSorteio();
}

//botão de sortear e adicinar mais de 4 amigos 
function sortear() {
    if (amigos.length < 4) {
        alert('Adicine pelo menos 4 amigos!');
        return;
    }
    embaralhar(amigos);

//sortiar os amigos sem sobrar um 
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }
}

//excluir amigo 
function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

//embaralhar
function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

//atualização da lista 
function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}

//botão reiniciare limpar
function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}


    
