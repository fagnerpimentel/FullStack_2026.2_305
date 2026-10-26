let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let canvas1 = document.getElementById("ex1");
let ctx1 = canvas1.getContext("2d");

let canvas2 = document.getElementById("ex2");
let ctx2 = canvas2.getContext("2d");

let canvas3 = document.getElementById("ex3");
let ctx3 = canvas3.getContext("2d");

// retângulos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.fillRect(10,10,50,50);
ctx.strokeRect(10,10,50,50);
ctx.closePath();

// linhas
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.moveTo(200,150);
ctx.lineTo(60,10);
ctx.lineTo(60,250);
ctx.lineTo(200,250);
ctx.lineTo(200,150);
ctx.fill();
ctx.stroke();
ctx.closePath();

// arcos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.arc(200,200,50,1.5*Math.PI,0.5*Math.PI,true);
ctx.fill();
ctx.stroke();
ctx.closePath();

// texto
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.font = "90px Arial"
ctx.textAlign = "center";
ctx.fillText("Olá",210,350);
ctx.strokeText("Olá",200,350)
ctx.closePath();


let idades = [22,98]
console.log(idades);
console.log(idades.length);

idades.push(25);
console.log(idades);

idades.pop();
console.log(idades);

let retangulo1 = {
    x: 10,
    y: 10,
    l: 50,
    a: 50,
    cor_fill: "red",
    cor_stroke: "green",
    desenha: function(ctx){
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.fillStyle = this.cor_fill;
        ctx.strokeStyle = this.cor_stroke;
        ctx.fillRect(this.x,this.y,this.l,this.a);
        ctx.strokeRect(this.x,this.y,this.l,this.a);
        ctx.closePath();
    }
}

let retangulo2 = {
    x: 10,
    y: 340,
    l: 50,
    a: 50,
    cor_fill: "blue",
    cor_stroke: "yellow",
    desenha: function(ctx){
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.fillStyle = this.cor_fill;
        ctx.strokeStyle = this.cor_stroke;
        ctx.fillRect(this.x,this.y,this.l,this.a);
        ctx.strokeRect(this.x,this.y,this.l,this.a);
        ctx.closePath();
    }
}

let retangulo3 = {
    x: 346,
    y: 10,
    l: 50,
    a: 50,
    cor_fill: "yellow",
    cor_stroke: "black",
    desenha: function(ctx){
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.fillStyle = this.cor_fill;
        ctx.strokeStyle = this.cor_stroke;
        ctx.fillRect(this.x,this.y,this.l,this.a);
        ctx.strokeRect(this.x,this.y,this.l,this.a);
        ctx.closePath();
    }
}

retangulo1.desenha(ctx1);
retangulo2.desenha(ctx2);
retangulo3.desenha(ctx3);

let aux = 2; 
function animacao(){
    // apagar o canvas
    ctx1.clearRect(0,0,400,400);
    ctx2.clearRect(0,0,400,400);
    ctx3.clearRect(0,0,400,400);

    // atualizar o objeto    
    if(retangulo1.x >= 360){
        aux = -2;        
    }else if(retangulo1.x <= 0){
        aux = 2;
    }
    retangulo1.x += aux;
        
    // desenhar novamente
    retangulo1.desenha(ctx1);
    retangulo2.desenha(ctx2);
    retangulo3.desenha(ctx3);
    requestAnimationFrame(animacao)
}

animacao();

document.addEventListener("keydown",function(evento){
    console.log(evento); 
    let tecla = evento.key;

    if (tecla == "ArrowUp"){retangulo2.y -= 2};
    if (tecla == "ArrowDown"){retangulo2.y += 2};
    if (tecla == "ArrowLeft"){retangulo2.x -= 2};
    if (tecla == "ArrowRight"){retangulo2.x += 2};
})

document.addEventListener("mousemove", function(evento){
    console.log(evento);
    let rect = canvas3.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top; 
    console.log(x_mouse, y_mouse);

    retangulo3.x = x_mouse;
    retangulo3.y = y_mouse;
})