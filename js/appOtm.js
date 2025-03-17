let elemAmigo = document.getElementById("nome-amigo"); //input
let elemListaAmigos = document.getElementById("lista-amigos"); // paragrafo
let elemListaSorteio = document.getElementById("lista-sorteio"); // paragrafo

let arrAmigosIncluidos = [];
let arrAmigosSorteados = [];

let contador = 1;

function adicionar() {
  const amigo = elemAmigo.value;
  if (amigo && !arrAmigosIncluidos.includes(amigo.toUpperCase())) {
    arrAmigosIncluidos.push(amigo.toUpperCase());
    elemListaAmigos.textContent = arrAmigosIncluidos.join(", ");
    elemAmigo.value = "";
  }
}

function sortear() {
  elemListaSorteio.innerHTML = "";

  const sorteioBemSucedido = realizaSorteio();

  if (sorteioBemSucedido) {
    arrAmigosIncluidos.forEach((item, i) => {
      elemListaSorteio.innerHTML += `${item} --> ${arrAmigosSorteados[i]}<br>`;
    });
    console.log("Amigos sorteados", arrAmigosSorteados);
    contador = 1;
  } else {
    contador += 1;
    sortear();
  }
}

function realizaSorteio() {
  arrAmigosSorteados.length = 0;

  const arrAmigosEmbaralhados = arrAmigosIncluidos.slice();
  embaralhaAmigos(arrAmigosEmbaralhados);
  console.log(`Embaralhamento n: ${contador}`, arrAmigosEmbaralhados);

  for (let i = 0; i < arrAmigosIncluidos.length; i++) {
    if (arrAmigosEmbaralhados[i] == arrAmigosIncluidos[i]) {
      return false;
    }
    arrAmigosSorteados.push(arrAmigosEmbaralhados[i]);
  }
  return true;
}

function embaralhaAmigos(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}


function reiniciar() {
  arrAmigosIncluidos.length = 0;
  elemListaSorteio.innerHTML = "";
  elemAmigo.value = "";
  elemListaAmigos.textContent = "";
}
