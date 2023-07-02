var num = 0;
var num2 = 0;
var screen = document.getElementById("screen");
var resultado;
var decimal;
var mudar_valor = false
function addnumber(choose){
    if(num == 0){
        num += choose;
    }
    else{
        num = num*10 + choose;
    }
}

function takeoffnumber(){
    var tamanho = num.toString()
    tamanho = tamanho.length;
    var takeoff = num.toString().split('');
    takeoff[tamanho - 1] = "";
    num = takeoff.join("");
    if (num == ""){
        num = 0
    }
}
function operacao(operacao){
    num2 = num;
    num = 0;
    tipo = operacao;
    mudar_valor = false;
}
function igual(){
    mudar_valor = true;
    switch(tipo){
        case 1:
            resultado = num2 + num;
            screen.innerText = resultado;
            console.log(resultado)
            break;
        case 2:
            resultado = num2 - num;
            screen.innerText = resultado;
            break;
        case 3:
            resultado = num2 * num;
            screen.innerText = resultado;
            break;
        case 4:
            resultado = num2 / num;
            screen.innerText = resultado;
            break;
        }
    num = resultado;
    resultado = 0;
}
function screenupdater(){
    if(mudar_valor == false){
        screen.innerText = num;
    }
    requestAnimationFrame(screenupdater);
}
function limpa(){
    mudar_valor = false;
    resultado = 0;
    num = 0;
    num2 = 0;
}
function virgula(){
    decimal = num / 10;
}
screenupdater()