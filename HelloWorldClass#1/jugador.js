const jugador = {
    nombre: "Isabel",
    nivel: 3,
    vidas: 2,
    tieneLlave: false,
    compañero: null,
    inventario: ["Espada", "Poción"],
};

console.log(jugador.nombre);
console.log(jugador.nivel);

jugador.tieneLlave = true;
jugador.vidas=jugador.vidas - 1;
jugador.monedas = 100; 
console.log(jugador);   

console.log(jugador.inventario[0]);
jugador.inventario.push("Escudo");
console.log(jugador.inventario);

console.log(jugador.puntos)
console.log(jugador.compañero)  
