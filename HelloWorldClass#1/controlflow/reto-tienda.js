function calcularEnvio(monto){
    if(monto>=150000){
        return "envio gratis"
    }
    else{
        return "envio con costo adicional"
    }
}
console.log(calcularEnvio(20000));

