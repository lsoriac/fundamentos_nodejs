let deadpool = {
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'Regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}

// Opcion 1 (tradicional):
console.log(deadpool.getNombre());

let nom = deadpool.nombre;
let ape = deadpool.apellido;
let pod = deadpool.poder;

// Opción 2: destructuracion de objetos
//Dentro de las llaves se conserva los nombres originales
//y si NO quiero conservarlos uso nombre: nuevo_nombre
let { nombre: primerNombre, apellido, poder } = deadpool;
console.log(primerNombre, apellido, poder);