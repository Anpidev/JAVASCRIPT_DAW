//Ejemplos de metodos en JavaScript
//Split()
let texto = "Angela,Maria,Ana,Karen";
let nombre = texto.split(",");
console.log(nombre);
//ToLowerCase()
let minuscula=texto.toLowerCase();
console.log(minuscula);
//ToUpperCase()
let mayuscula= texto.toUpperCase();
console.log(mayuscula);
//replaceAll()
let frase="el perro ladra, el gato maulla, el pajaro canta";
let fraseCambiada=frase.replaceAll("el","un");
console.log(fraseCambiada);
//replace()
let cambiarFrase=frase.replace("el","un");
console.log(cambiarFrase);
//starWith()
let comienza=frase.startsWith("el");
console.log(comienza);
//endsWith()
let termina=frase.endsWith(".");
console.log(termina);
//lastIndexOf()
let nuevoTexto="Estudiando online, haciendo ejercicios online";
let ultimoIndice=nuevoTexto.lastIndexOf("online");
console.log(ultimoIndice);
//indexOf()
let primerIndice=nuevoTexto.indexOf("online");
console.log(primerIndice);
//substring()
let dividiendoFrase=frase.substring(0,8);
console.log(dividiendoFrase);
//charAt()
let posicionCaracter=frase.charAt(3);
console.log(posicionCaracter);
//concat()
let fraseUnida= texto.concat(";",frase);
console.log(fraseUnida);
//length
console.log(frase.length)
//valueOf()
console.log(frase.valueOf());