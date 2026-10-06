//Para un array se nombra la variable y se iguala a [valores separados por comas]

let nombres=["Isabel", "Maria Aristizabal", "Juan", "Pedro", "Ana"];
console.log(nombres);

//Para acceder a un valor del array se hace con el nombre del array y el índice del valor que se quiere acceder, los índices empiezan desde 0
const inventario = ["Espada", "Poción", "Mapa"];
console.log(inventario[0]);
console.log(inventario[2]);
console.log(inventario[3]);
console.log(inventario.length);

let nombre;
console.log(nombre);

inventario.push("Llave"); //Agrega un valor al final del array
console.log(inventario);

inventario.pop(); //Elimina el último valor del array
console.log(inventario);

inventario[1]="Escudo"; //Cambia el valor de un índice del array
console.log(inventario);

console.log(inventario[10]);