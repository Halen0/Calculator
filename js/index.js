
const display = document.querySelector(".display");

const btnClear = document.querySelector(".btnC");
const btnErase = document.querySelector(".btnB");
const btnDivision = document.querySelector(".btnD");
const btnMultiplication = document.querySelector(".btnM");

const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const btnSubtraction = document.querySelector(".btnR");

const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btnAddition = document.querySelector(".btnS");
 
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

const btnPoint = document.querySelector(".btnP");
const btn0 = document.querySelector(".btn0");
const btnEqual = document.querySelector(".btnI");

let operador;
let num1;
let num2;

eventosEspeciales(btnClear, "C");
eventosEspeciales(btnErase, "E");
eventoOperaciones(btnDivision, "/");
eventoOperaciones(btnMultiplication, "*");

eventoNumero(btn7, 7);
eventoNumero(btn8, 8);
eventoNumero(btn9, 9);
eventoOperaciones(btnSubtraction, "-");

eventoNumero(btn4, 4);
eventoNumero(btn5, 5);
eventoNumero(btn6, 6);
eventoOperaciones(btnAddition, "+");

eventoNumero(btn1, 1);
eventoNumero(btn2, 2);
eventoNumero(btn3, 3);

eventosEspeciales(btnPoint, "P");
eventoNumero(btn0, 0);
btnEqual.addEventListener("click",(e)=>{
    let resultado;
    if(num1 !== "" && num2 !== ""){
        num2 = display.textContent;
        switch(operador){
            case "+":
                resultado = parseFloat(num1) + parseFloat(num2);
                display.innerHTML = resultado;
            break;
            case "-": 
                resultado = parseFloat(num1) - parseFloat(num2);
                display.innerHTML = resultado;
            break;
            case "*": 
                resultado = parseFloat(num1) * parseFloat(num2);
                display.innerHTML = resultado;
            break;
            case "/": 
                if(num2 != 0){
                    resultado = parseFloat(num1) / parseFloat(num2);
                }
                else{
                    resultado = "Error";
                }
                display.innerHTML = resultado;
            break;
        }
    }
});

function eventoNumero(btn, text){
    btn.addEventListener("click",(e)=>{
        if(display.innerHTML === "Error"){
            display.innerHTML = "";
        }
        display.innerHTML += text
    });
}

function eventoOperaciones(btn, ope){
    if(num1 !== "" && num2 !== ""){
        btn.addEventListener("click",(e)=>{
            num1 = display.textContent;
            operador = ope;
            display.textContent = "";
        });
    }
}

function eventosEspeciales(btn, ope){
    operador = ope;
    btn.addEventListener("click",(e)=>{
        switch(ope){
            case "C": 
                display.textContent = "";
            break;
            case "E":
                display.textContent = display.textContent.slice(0,-1);    
            break;
            case "P": 
                if(!display.textContent.includes(".")){
                    display.textContent += ".";
                }
            break;
        }
    });
}