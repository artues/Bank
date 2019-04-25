function MiLista() {
  var item = document.getElementById("añadir").value
  //añade un un nuevo elemto a la lista
  var text = document.createTextNode(item)
  //crea el elemento en la lista
  var nuevoItem = document.createElement("li")
  //crea el elemento en una lista ordenada
  nuevoItem.appendChild(text)
  //lo agrega a la lista
  document.getElementById("MiLista").appendChild(nuevoItem)
  //si no añadimos nada mostrara un mensaje
  if (item === '') {
    alert("Tienes que añadir algo!");
  } else {
    document.getElementById("añadir").appendChild('');
  }
  //añadir.onclick = MiLista;
eliminar.onclick = function() {
  lista.innerHTML = "";
  nuevoItem.value = "";
}
}
