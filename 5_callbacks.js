//acercamiento a callback
// setTimeout(() => {
//     console.log("Hola, muchach@s!");
// }, 3000);
//callback simple-sin control errores
// let getUsuarioById = (id, callback) => {
//     let usuario = {
//         nombre: "Santiago",
//         id
//     }
//     callback(usuario);
// }
// //en el momento que tenga la información ejecutando con
// //id hago quiero que ejecute el CALLBACK
// getUsuarioById(10, (usuario) => {
//     console.log("Usuario de la BD:", usuario);
// })
//////descomentar arriba
//////domentar abajo
let getUsuarioById = (id, nickname, callback) => {
        let n = nickname + " perez"
        let usuario = {
                nombre: n,
                //id: id según ECMAScript 6es lo mismo que abajo
                id
            }
            //simulación de error
        if (id === 20) {
            //ojo el null de forma didactica representa que 
            //encontró el usuario
            callback(`El usuario con id ${id} no existe!`, null);
        } else {
            callback(null, usuario, 25);
        }
    }
    //llamado de la función
getUsuarioById(10, 'pepito', (err, usuario, edad) => {
    if (err) {
        //después del return no se ejecuta nada mas
        return console.log(err);
    }

    console.log("Usuario de la BD:", usuario, `edad: ${edad}`);
});