//ojo no hace falta colocar el tipo de dato
//let-definir variable local
let nombre = "Wolverine";
if (true) {
    let nombre = "Magneto";
}
//clg-ahorra tiempo de escritura de còdigo
console.log(`hola ${nombre}`);

//var-definir globalmente
for (var i = 0; i <= 5; i++) {
    console.log(`i = ${i}`);
}
console.log(`valor final de i: ${i}`);

//definir localmente
for (let k = 0; k <= 5; k++) {
    console.log(`k = ${k}`);
}
console.log(`valor final de k: ${k}`);
//error