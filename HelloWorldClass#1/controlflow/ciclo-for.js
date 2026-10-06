/* for convencional
Tiene tres partes: inicialización, condición y actualización
    for (inicio, condicion, actualización) {
        bloque de codigo a ejecutar
    }
*/
for (let contador = 1; contador <= 5; contador++) {
    console.log(contador)
}

//Recorrer arrays
const clientes = ["maria","isabel","jose","pedro"];

for (const cliente of clientes) {
    console.log("bienvenido", cliente);
}

///////
const movimientos = [35000,120000,8000,45000,60000]

for (const valor of movimientos) {
    if(valor>100000){
        console.log(valor);
    }
}

