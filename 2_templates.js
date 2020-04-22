let nombre = "Deadpool";
let real = 'Wade Wilson';
//console.log(nombre + " " + real);
//console.log(`${nombre} ${real}`);
//tìpica concatenaciòn
let nombreCompleto = nombre + " " + real;
//templates literales-otra forma de definir lo mismo de arriba
let nombreTemplate = `${nombre} ${real}`;
//triple igual-compara el tipo de dato como su contenido
console.log(nombreCompleto === nombreTemplate);
//1=='1'    =TRUE(compara solo el contenido, valor
//1==='1'   =FALSE
//creación-funciòn
function getNombre() {
    return `${nombre} ${real}`;
}
console.log(`El nombre es: ${getNombre()}`);