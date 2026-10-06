function calcularPrecioFinal(precio) {
  const descuento = precio * 0.2;
  return precio - descuento;   //return es para el uso del codigo

}

function mostrarEtiqueta(nombre, precio) {
  const precioFinal = calcularPrecioFinal(precio);
  console.log(`${nombre} cuesta $${precioFinal}`); //console es para q el usuario lo lea
}
mostrarEtiqueta("Camiseta", 45000);