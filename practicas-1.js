function imprimirNumero(x){
    let resultElement = document.getElementById('resultado');

    if (isNaN(x)) {
        resultElement.innerHTML = "Esto no es un numero";
    }
     else {
        if (x > 1000){
            resultElement.innerHTML = "Es un numero grandisimo";
        }else if (x > 100){
                resultElement.innerHTML = "Es un numero grande";
        } else{
            resultElement.innerHTML = 'Es un numero pequeno';
        }
    }
}

let resultado = Number.parseInt(prompt("Introduzca un numero"));

imprimirNumero(resultado);

