let num = 0;
let num2 = 0;
let screen = document.getElementById("screen");
let resultado;
let decimal;
let mudar_valor = false;
let clicado = 0;
function addnumber(choose){
    if(clicado>0){
        mudar_valor = false;
        num = 0;
        clicado = 0
    }
    if(num == 0){
        num += choose;
    }
    else if(num>0){
        num = num*10 + choose;
    }
    console.log(`o valor de clicado é ${clicado}`);
    console.log(`o valor de choose é ${choose}`);
    console.log(`o valor de num é ${num}`);
}

function takeoffnumber(){
    let tamanho = num.toString()
    tamanho = tamanho.length;
    let takeoff = num.toString().split('');
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
    clicado += 1;
}
function screenupdater(){
    if(mudar_valor == false){
        screen.innerText = num;
    }
    requestAnimationFrame(screenupdater);
}
function limpa(){
    clicado = 0;
    mudar_valor = false;
    resultado = 0;
    num = 0;
    num2 = 0;
}
function virgula(){
    decimal = num / 10;
}
screenupdater()
