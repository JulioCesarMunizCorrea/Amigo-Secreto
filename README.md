# Função de embaralhamento de array

```javascript
function embaralhaArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
```

# Função de sorteio

```javascript
function sortear() {
  elemListaSorteio.innerHTML = "";

  embaralhaArray(amigos);
  for (i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
      elemListaSorteio.innerHTML += `${amigos[i]} --> ${amigos[0]}<br>`;
    } else {
      elemListaSorteio.innerHTML += `${amigos[i]} --> ${amigos[i + 1]}<br>`;
    }
  }
}
```


