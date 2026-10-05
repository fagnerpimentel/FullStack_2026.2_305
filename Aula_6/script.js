let nome = "Fagner" /* prompt("coloque o seu nome!"); */

console.log(nome);

console.log(document.getElementById("nome").innerHTML); 
document.getElementById("nome").innerHTML = nome;

/* Exemplo 1 */

/* let nome2 = prompt("Qual o seu nome?");
let idade = prompt("Qual a sua idade?");
let ano_atual = 2026;

let ano_nascimento = ano_atual - idade;
let resposta_1 = 
    "Olá " + nome2 + ", seu ano de nascimento é " 
    + ano_nascimento + "!"

document.getElementById("R1").innerHTML = resposta_1; */


/* funções */

function soma(a , b){
    return a + b;
}
function mult(a, b){
    return a * b;
}

let c = soma(7,9);
console.log(c);


function imprimir(){
    let i1 = document.getElementById("i1").value;
    console.log(i1);
}

function ex2(){
    let x = document.getElementById("ex2_i").value;
    let resposta = "";
    for(let i = 0; i <=  x; i++){
        resposta += " " + i;
    }
    document.getElementById("r2").innerHTML = resposta;
}

function ex3(){
    let a = parseInt(document.getElementById("ex3_a").value);
    let b = parseInt(document.getElementById("ex3_b").value);

    let c = soma(a, b);

    document.getElementById("r3").innerHTML = c;
}

function ex4(){
    let a = parseInt(document.getElementById("ex4_a").value);
    let b = parseInt(document.getElementById("ex4_b").value);

    let c;
    if (a < 0 | b < 0){
        c = soma(a, b);
    }else{
        c = mult(a, b);
    }

    document.getElementById("r4").innerHTML = c;
}