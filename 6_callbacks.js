//CALLBACK NOOO ES UN RETURN, continual la ejecución
//creación objetos empleado y salarios
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
//
let getEmpleado = (id, callback) => {
        //.find- para encontrar (simplificar un for de búsqueda)
        //empleado.id va iterando
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        //empleadoDB === null no es .. es undefined
        //if (empleadoDB == null) { ... aqui si es igual
        //if (empleadoDB===undefined).. si
        if (!empleadoDB) {
            callback(`No existe un empleado con id ${id}`);
        } else {
            callback(null, empleadoDB);
        }
    }
    //
let getSalario = (empleado, callback) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id)
        if (!salarioDB) {
            callback(`No se encontró salario para el empleado ${empleado.nombre}`)
        } else {
            //toma los dos objetos 
            callback(null, { nombre: empleado.nombre, salario: salarioDB.salario })
        }
    }
    //llamado de la función
getEmpleado(4, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    //llamado de la función
    getSalario(empleado, (err, respuesta) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${respuesta.nombre} es de ${respuesta.salario}`);
    })
});