function MiLista() {
  var tarea = document.getElementById("añadir").value
  //añade un un nuevo elemto a la lista
  var text = document.createTextNode(tarea)
  //crea el elemento en la lista
  var nuevoTarea = document.createElement("li")
  //crea el elemento en una lista ordenada
  nuevoTarea.appendChild(text)
  //lo agrega a la lista
  document.getElementById("MiLista").appendChild(nuevoTarea)
  //si no añadimos nada mostrara un mensaje
  if (tarea === '') {
    alert("Tienes que añadir algo!");
  } else {
    document.getElementById("añadir").appendChild('');
  }
  //añadir.onclick = MiLista;
eliminar.onclick = function(tarea) {
  lista.innerHTML = "";
  nuevoTarea.value = "";
}
}
