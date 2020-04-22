//una promesa es una forma manejar los errores
//evitar el callback hell
//es decir anidamiento y dificil lectura de funciones
//de igual manera devielve si se todo se realizó correcto
//o no
//todo bien -resolve
//existe un error, algo va mal- reject
//REJECT Y RESOLVE NO SON RETURNS
let empleados = [{
        id: 1,
        nombre: "Santiago"
    },
    {
        id: 2,
        nombre: "Wendy"
    },
    {
        id: 3,
        nombre: "Leo"
    }
];

let salarios = [{
        id: 1,
        salario: 800
    },
    {
        id: 2,
        salario: 950
    }
];
//sintaxis 
//nombre =(parametros)=>{
//return new Promise((resolve,reject)=>{
//reject
//resolve
//});}
//repetir el mismo ejercicio del script 6_callbacks.js
//con promesas
let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            reject(`No existe un empleado con id ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
        return new Promise((resolve, reject) => {
            let salarioDB = salarios.find(salario => salario.id === empleado.id)
            if (!salarioDB) {
                reject(`No se encontró salario para el empleado ${empleado.nombre}`);
            } else {
                resolve({ nombre: empleado.nombre, salario: salarioDB.salario });
            }

        });
    }
    //SIN promesas EN CADENA
    // getEmpleado(3).then(empleado => {
    //     getSalario(empleado).then(resp => {
    //         console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    //     }, (err) => {
    //         console.log(err);
    //     });
    // }, (err) => {
    //     console.log(err);
    // });

//promesas en cadena
getEmpleado(3).then(empleado => {
    return getSalario(empleado);
}).then(resp => {
    console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    //sirve para todas las promesas invocadas
}).catch(err => {
    console.log(err);
});