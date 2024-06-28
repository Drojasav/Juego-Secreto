//1.Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];

//2.Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' ,'Python'];

//3.Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' ,'Python'];

    lenguajesDeProgramacion.push('Java', 'Ruby','GoLang');
    console.log (lenguajesDeProgramacion);

//4.Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.


function mostrarLista(lista) {
    console.log(lista.join(', '));
}

//5.Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function mostrarInverso(lista) {
    console.log(lista.reverse().join(', '));
}

//SOLUCION 2

function mostrarLenguagesReversoSeparadamente() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguagesDeProgramacion[i]);
    }
    }
    
    mostrarLenguagesReversoSeparadamente();
    
//6.Crea una función que calcule el promedio de los elementos en una lista de números.

//CONSOLE1
function calcularPromedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma / numeros.length;
}



//7.Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

function mostrarMinMax(numeros) {
    let maximo = Math.max(...numeros);
    let minimo = Math.min(...numeros);
    console.log("Número más grande: " + maximo);
    console.log("Número más pequeño: " + minimo);
}

//8.Crea una función que devuelva la suma de todos los elementos en una lista.

function sumarElementos(lista) {
    return lista.reduce((total, elemento) => total + elemento, 0);
}



//9.Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

function encontrarPosicion(lista, elemento) {
    let posicion = lista.indexOf(elemento);
    return posicion !== -1 ? posicion : "El elemento no está en la lista";
}


//10.Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

function sumarListas(lista1, lista2) {
    return lista1.map((elemento, index) => elemento + lista2[index]);
}


//11.Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.


function cuadradoDeLista(lista) {
    return lista.map(elemento => elemento * elemento);
}

// Ejemplos de uso de las funciones:
mostrarLista(lenguajesDeProgramacion);
mostrarInverso(lenguajesDeProgramacion);
console.log("Promedio de la lista: " + calcularPromedio([1, 2, 3, 4, 5]));
mostrarMinMax([8, 3, 11, 2, 9]);
console.log("Suma de elementos: " + sumarElementos([1, 2, 3, 4, 5]));
console.log("Posición de 'Ruby': " + encontrarPosicion(lenguajesDeProgramacion, 'Ruby'));
console.log("Suma de listas: " + sumarListas([1, 2, 3], [4, 5, 6]));
console.log("Cuadrado de lista: " + cuadradoDeLista([2, 4, 6]));