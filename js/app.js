let elemAmigo = document.getElementById("nome-amigo"); // input
let elemListaAmigos = document.getElementById("lista-amigos"); // paragrafo
let elemListaSorteio = document.getElementById("lista-sorteio"); // paragrafo

let amigos = [];

function adicionar() {
  // Adiciona amigos se o campo não estiver vazio ou já adicionado
  const amigo = elemAmigo.value;
  if (amigo && !amigos.includes(amigo.toUpperCase())) {
    amigos.push(amigo.toUpperCase());
    elemListaAmigos.textContent = amigos.join(", ");
    elemAmigo.value = "";
  }
}

function sortear() {
  elemListaSorteio.innerHTML = "";
  if (amigos.length > 0) {
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    elemListaSorteio.innerHTML = `Sorteado: ${sorteado}`;
  } else {
    elemListaSorteio.innerHTML = "Nenhum amigo na lista para sortear.";
  }
}

function reiniciar() {
  amigos.length = 0;
  elemListaSorteio.innerHTML = "";
  elemAmigo.value = "";
  elemListaAmigos.textContent = "";
}
