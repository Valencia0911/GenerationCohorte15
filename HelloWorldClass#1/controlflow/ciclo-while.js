//while es un ciclo indefinido, se ejecuta mientras la condición sea verdadera

let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}

const meta = 1000000;
const ahorroMensual = 150000;

let ahorrado = 0;
let meses= 0;

while(ahorrado < meta){
    ahorrado += ahorroMensual;
    meses++;
}

console.log("Se ahorró el dinero en", meses, "meses");
console.log("Se ahorró un total de", ahorrado, "pesos");


//============================RETO===============================
//hacer el fizzbuzz del 1 al 100

for (let contador=1; contador <=100; contador++){
    if(contador %5 == 0 && contador % 3 ==0){
        console.log("FizzBuzz");
    } else if (contador %5==0){
        console.log("buzz");
    }
    else if(contador %3==0){
        console.log("fizz");
    }
    else{
        console.log(contador);
    }
}