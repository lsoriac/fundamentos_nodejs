//ASYNC Y AWAIT
// let getNombre = async() => {
//     throw new Error("NO existe el usuario en la BD")
//     return "Santiago" //EL MOMENTO QUE SE EJECUTA EL THROW ESTO YA NO SE EJECUTA (color un poco mas opaco)
// }
//console.log(getNombre());

let getNombre = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Santiago");
            }, 3000);
            // reject("Error al consultar el nombre");
        });
    }
    //el await siempre debe estar dentrO de una funcion asincrona
    //----el await devuelve el resolve
let saludo = async() => {
        let nombre = await getNombre();
        return `Hola ${nombre}`;
    }
    //async devuelve una promesa 
    //por lo tanto siempre que se llama a una funcion async poner .then
    //antes de imprimir el saludo necesitamos getnombre para saber a quien saludar
    //hacer una cola de espera async await
saludo().then(mensaje => {
    console.log(mensaje);
}).catch(err => {
    console.log("Error en el Saludo:", err);
});

// console.log(getNombre());

// getNombre().then(nombre => {
//     console.log(nombre);
// }).catch(err => {
//     console.log("Error en el ASYNC:", err);
// });