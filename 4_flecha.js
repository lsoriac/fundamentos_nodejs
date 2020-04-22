// Forma tradicional
// function sumar(a, b) {
//     return a + b;
// }
//nombre_función=(parámetros) =>1 instrucción
let sumar = (a, b) => a + b;
console.log(`la suma de 3 + 4 = ${sumar(3,4)}`);
//nombre_función=(parámetros) =>{varias instrucciones}
function saludar() {
    return "Hola chic@s";
}
let saludo = () => {
    let a = "Rodrigo";
    let b = 'Chicos';
    return `${a} ${b}`;
}
console.log(`${saludo()}`);
//transformar lo siguiente a función flecha
// let deadpool = {
//     nombre: 'Wade',
//     apellido: 'Wilson',
//     poder: 'Regeneración',
//     //función normal
//     getNombre: function() {
//         return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
//     }
// }
// console.log(deadpool.getNombre());
////////si descomentar arriba
////////entonces comentar abajo 
//solución
let deadpool = {
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'Regeneración',
    //función flecha
    getNombre: () => {
        //ojo no se puede usar this
        //this hace referencia a algo mas grande conocido como enviroment.
        //solución utilizar el nombre del objeto para acceder a las propiedades del mismo.
        return `${deadpool.nombre} ${deadpool.apellido} - poder: ${deadpool.poder}`;
    }
}
console.log(deadpool.getNombre());