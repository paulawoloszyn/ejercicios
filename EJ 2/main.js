// Objeto inicial
const usuarios = [
    {name: 'Juan', age: 12}, {name: 'Alberto', age: 22}, {name: 'Pedro', age: 53}, {name: 'Juan', age: 18}
];


// Función para ordenarlos alfabéticamente
function compare(a, b) {
    const usuarioA = a.name.toUpperCase();
    const usuarioB = b.name.toUpperCase();
    
    let comparacion = 0;
    if (usuarioA > usuarioB) {
        comparacion = 1;
    } else if (usuarioA < usuarioB) {
        comparacion = -1;
    }
    return comparacion;
}

usuarios.sort(compare);

// Filtro de edad a los ya ordenados alfabéticamente
var mayoresOrdenados = usuarios.filter(mayorDeEdad);
function mayorDeEdad(usuario) {
    return usuario.age >= 18;
}

// Mostrar elementos filtrados y ordenados, desplegados
mayoresOrdenados.forEach(function(usuario){
    document.getElementById("resultados").innerHTML = usuarios;
})


// Promesa que devuelve primero a todos los usuarios, y después sólo a los mayores de edad ordenados alfabéticamente, simulando asincronía de 2 segundos.  
function mostrarUsuarios (numero, arreglo) {
    const promise = new Promise (function(resolve, reject){
        if (numero === 1) {
            resolve(arreglo) 
        } else {
            reject(new Error("Ese no es un 1"))
        }
    })
    return promise
}

mostrarUsuarios(10, usuarios)
.then(function(resultado){
        console.log("Usuarios", usuarios)
    }).then(function(resultadoDos){
        setTimeout(function(){
            console.log("El valor ingresado no es 1", mayoresOrdenados)
        }, 2000)
    })
    
// Termina promesa
