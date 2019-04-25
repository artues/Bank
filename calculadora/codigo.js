

/*creamos la variable y buscamos el id del elemento*/
  var calcular = document.getElementById('calcular');
/*llamamos a la funcion*/
    function pulsarBoton(obj) {

        var pulsar = obj.innerHTML;

        if (pulsar == '=') {
            /* aqui realizamos las operaciones*/
            calcular.innerHTML = eval(calcular.innerHTML);

        } else if (pulsar == 'C') {

            calcular.innerHTML = '0';

        } else {
            if (calcular.innerHTML == '0') {
                calcular.innerHTML = pulsar;

            } else {
                calcular.innerHTML += pulsar;
            }
        }
    }
