// 1- Dados dos números enteros a y b, que pueden ser positivos o negativos, encuentre la suma de todos los números enteros entre ellos e incluyéndolos y devuélvalo. Si los dos números son iguales, devuelva a o b.
// Nota: ¡a y b no están ordenados!

// EJERCICIO 1
function getSum(a, b){
    if (a == b ) {
        return a;
    } else if (a > b){
        return sumarValores(b, a);
    } else if (b > a){
        return sumarValores(a, b);
    }

    function sumarValores(param1, param2) {
        let acc = 0;
        for (let i = param1; i <= param2; i++) {
            acc += i;
            // console.log(`El valor de i es : ${i}`);
        }
        console.log(acc);
        return acc;
    }
}

// // getSum(5, -1);
// // getSum(20, -400);


//2- Dado un array ingresado por parametro, devolver la suma del numero mayor y el numero menor del mismo.
// [1, 2, 3, 4, 56, 7, 8, 10];
// [1, 1, 1, 2, 10];

// EJERCICIO 2
function sumarMayorYMenor(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let acc = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = acc;
            }  
        }
    }
    let resultado = arr[0] + arr[arr.length - 1];
    console.log(resultado);
    console.log(arr);
}

// sumarMayorYMenor([1, 2, 3, 4, 56, 7, 8, 10]);
// sumarMayorYMenor([1, 1, 1, 2, 10]);
// sumarMayorYMenor([10, 24, 20, 19, 2]);


//3- Dado un array ingresado por parametro, devolver el numero mayor.
// [1, 2, 3, 4, 56, 7, 8, 10];
// [1, 1, 1, 2, 10];

// EJERCICIO 3
function obtenerMayor(arr) {
    let mayor = 0;
    let menor = 0;

    for (let i = 0; i < arr.length + 1; i++) {
        // console.log('arr[i] = ' + arr[i]);
        // console.log('arr[i] + 1 = ' + arr[i + 1] );
        if (arr[i] > arr[i + 1]) {
            if(mayor > arr[i]){
                mayor = mayor;
            } else {
                mayor = arr[i];
            }
        } else {
            if(arr[i] > mayor){
                mayor = arr[i];
            } else {
                mayor = mayor;
            }
        }
        console.log(mayor);
    }
    console.log('Mayor final es : ' + mayor);
}

// obtenerMayor([100000, 120, 160, 210, 10, 10, 1600, 11290]);
// obtenerMayor([10, 24, 20, 19, 2]);


/*4- Está creando una función que ayuda en el mantenimiento de una colección de álbumes musicales. La colección se organiza como un objeto que contiene múltiples álbumes que también son objetos. Cada álbum se representa en la colección con un id único como nombre de la propiedad. Dentro de cada objeto álbum, hay varias propiedades que describen información sobre el álbum. No todos los álbumes tienen información completa.
La función updateRecords toma 4 argumentos representados por los siguientes parámetros de función:

records - un objeto que contiene varios álbumes individuales
id - un número que representa un álbum específico en el objeto records
prop - una cadena que representa el nombre de la propiedad del álbum a actualizar
value - una cadena que contiene la información utilizada para actualizar la propiedad del álbum
Completa la función utilizando las reglas siguientes para modificar el objeto pasado a la función.

Tu función debe devolver siempre el objeto records completo.
Si value es una cadena vacía, elimina la propiedad prop dada del álbum.
Si prop no es tracks y value no es una cadena vacía, asigna el value a la prop de ese álbum.
Si prop es tracks y value no es una cadena vacía, agrega value al final del array de tracks existentes del álbum. Primero, si el álbum no tiene una propiedad tracks, asigne un array vacío. Luego añade el valor como el último elemento en el array de pistas del álbum.
Nota: Para las pruebas se utiliza una copia del objeto recordCollection. No debes modificar directamente el objeto recordCollection.*/

// EJERCICIO 4
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// DOT NOTATION 
function updateRecords(records, id, prop, value) {
    if (prop == 'artist' && value == '') {
        delete records[id].artist;
    }else if (prop == 'tracks' && value == '') {
        delete records[id].tracks;
    }else if(prop == 'tracks' && value != ''){
        if (records[id].tracks === undefined) {
            records[id].tracks = [];
        }
        records[id].tracks.push(value);
    }else if(prop == 'albumTitle'  && value != ''){
        records[id].albumTitle = value;
    }else if(prop == 'artist'  && value != ''){
        records[id].artist = value;
    }
    return records;
}

// BRACKETS NOTATION
function updateRecords(records, id, prop, value) {
    if (prop === 'artist' && value === '') {
        delete records[id][prop];
    } else if (prop === 'tracks' && value === '') {
        delete records[id][prop];
    } else if (prop === 'tracks' && value !== '') {
        if (records[id][prop] === undefined) {
            records[id][prop] = [];
        }
        records[id][prop].push(value);
    } else if (prop === 'albumTitle' && value !== '') {
        records[id][prop] = value;
    } else if (prop === 'artist' && value !== '') {
        records[id][prop] = value;
    }
    return records;
}

// console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
// console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));
// console.log(updateRecords(recordCollection, 2548, "artist", ""));
// console.log(updateRecords(recordCollection, 2548, "tracks", ""));
// console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));


// 5-Si enumeramos todos los números naturales menores de 10 que son múltiplos de 3 o 5, obtenemos 3, 5, 6 y 9. La suma de estos múltiplos es 23.
// Termine la solución para que devuelva la suma de todos los múltiplos de 3 o 5 debajo del número pasado.
// Además, si el número es negativo, devuelve 0.
// Nota: Si el número es múltiplo de 3 y 5, cuéntalo solo una vez.

// EJERCICIO 5
function solution(number){
    let result = 0;

    for (let i = 0; i < number; i++) {
        if (i == 0 || i < 0) {
        } else if (i % 3 == 0) {
            result += i;
        } else if (i % 5 == 0) {
            result += i;
        }
    }
    console.log(result);
    return result;
}

// solution(10);


//6- Un número narcisista (o número de Armstrong) es un número positivo que es la suma de sus propios dígitos, cada uno elevado a la potencia del número de dígitos en una base determinada. En este Kata, nos limitaremos al decimal (base 10).
// Por ejemplo, tomemos 153 (3 dígitos), que es narcisista:
//      1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// y 1652 (4 dígitos), que no es:
//      1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// El reto:
// Su código debe devolver verdadero o falso (no "verdadero" ni "falso") dependiendo de si el número dado es un número narcisista en base 10.
// Esto puede ser Verdadero y Falso en su idioma, p. PHP.
// No es necesaria la verificación de errores para cadenas de texto u otras entradas no válidas; solo se pasarán a la función números enteros positivos distintos de cero válidos.

// EJERCICIO 6
function narcissistic(value) {
    value = value.toString();
    // console.log(value.length);
    let index = value.length;
    let result = 0;
    for (let i = 0; i < value.length; i++) {
        result += Number(value[i] ** index);
    }
    // console.log(result);
    if (value == result) {
        return true;
    } else {
        return false;
    }
}

// narcissistic(153);
// narcissistic(1652);







