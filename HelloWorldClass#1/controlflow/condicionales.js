/*sintaxis basica
if (condicion) {
    //codigo a ejecutar si la condicion es verdadera
}   else {
    //codigo a ejecutar si la condicion es falsa
}
*/

const saldo = 50000;
const monto = 80000;

//if simple
if (monto>saldo) {
    console.log("El monto supera el saldo");
}

//if con else
if (monto<=saldo) {
    console.log("Transferencia exitosa");
} else{
    console.log("el monto supera al saldo")
}

// if -else if - else
const saldoAhorro = 250000;

if(saldoAhorro >= 200000){
    console.log("Cliente VIP");
} else if(saldoAhorro >= 100000) {
    console.log("Buen monto de ahorro");
} else{
    console.log("Ahorre papi");     
}

//////////////////////////////////////////////////////////////
//mirar si el 7 es par

const numero = 7;

if(numero % 2 == 0){
    console.log("El numero es par");
} else{
    console.log("El numero es impar");
}