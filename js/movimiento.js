//FUNCION PARA FILTRAR GASTOS POR PERSONA//
//llamada de funcion//
function movimiento(){
	//tomamos las variables//
  var input, filter, tr, td, th, i, txtValue;
  input = document.getElementById('mi_movimiento');
  //Devuelve una referencia al elemento por su ID.//
  filter = input.value.toUpperCase();
  //filtra todos los posibles valores donde se encunetra ese caracter
  table = document.getElementById('mi_tabla');
  //Selecciona un elemento del documento por medio del valor del atributo id que se le haya asignado//
  tr = table.getElementsByTagName('tr');
  //toma los elementos por su class
  for (i = 0; i < tr.length; i++){
	  //realiza un  bucle repetitivo si no hay ningun error y toma la longitud de los caracteres escritos//
    td = tr[i].getElementsByTagName('td')[0];
	//se obtinen todas los nombres con el caracter indicado//
    if (td) {
      txtValue = td.textContent || td.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1){
		  //convierte todos los caracteres los pasa a mayuscula filtra los datos para encontrar coincidencias//

        tr[i].style.display = "";
		//si hay caracteres los muestra//
      }
        else{
	//si no hay caracteres no los muestra//
          tr[i].style.display = "none"

        }

    }
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////