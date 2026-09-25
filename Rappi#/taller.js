//Sistema de pedidos RAPPI

/*
Crea variables para guardar: el nombre del cliente (texto), la ciudad (texto) y si el cliente es Rappi Prime o no (un valor de verdadero/falso).
•
Imprime un saludo que diga, por ejemplo: Hola Camila, tu pedido a domicilio en Bogotá.
•
Usa concatenación para armar ese saludo mezclando texto fijo con tus variables.*/
let nombre= "Cristian Valencia";
const ciudad= "Medellín";
let prime= true; //boleean

console.log("Holaaa", nombre, "tu pedido está en la ciudad de", ciudad);
console.log("¿Eres repartidor prime",prime);

/*•
Crea una estructura de datos que guarde la lista de productos del pedido. Por ejemplo: Hamburguesa, Papas, Gaseosa.
•
Imprime la lista completa de productos.
•
Imprime SOLO el primer producto de la lista.
•
El cliente llama para agregar un producto más (un Postre). Agrégalo a la lista e imprime la lista actualizada.
•
El cliente se arrepiente del último producto que agregó. Quítalo e imprime la lista de nuevo.
•
Imprime cuántos productos tiene el pedido en total*/

let productos= ["Hamburguesas", "papas","gaseosa","pizza"];
console.log(productos);
console.log(productos[0]);

productos.push("brownie")
console.log(productos);

productos.pop();
console.log(productos);

console.log("El pedido tiene un total de", productos.length);

/*•
Crea una estructura de datos que represente el pedido completo, con estas características: cliente, ciudad, productos (la lista de la Parte 2) y estado (por ejemplo, el texto En preparación).
•
Imprime el pedido completo.
•
Imprime solo el nombre del cliente, accediendo a él desde el pedido.
•
El pedido avanza: cambia el estado a En camino e imprime el pedido de nuevo.*/

let pedido={
    cliente: "Isabel",
    ciudad: "Medellin",
    productos: productos,
    estado: "En preparación"
}

console.log(pedido);
console.log("nombre del cliente: ", pedido.cliente);

pedido.estado= "En camino";
console.log(pedido);

/*•
Crea variables numéricas para: el valor de los productos (subtotal) y el valor del domicilio.
•
Crea una constante para el porcentaje de propina sugerida (por ejemplo, 0.10 para el 10%).
•
Calcula el total: subtotal más domicilio. Imprímelo.
•
Imprime un recibo final que combine texto y números, por ejemplo: Total a pagar por el pedido de Camila: $25000.*/

let subtotal= 50000;
let domicilio=10000;
const tips= 0.10;

console.log("El total a pagar es: ", subtotal+domicilio);
console.log("Propina sugerida: ", subtotal * tips);
console.log("valor final con propina sería ", subtotal+domicilio + (subtotal * tips));
