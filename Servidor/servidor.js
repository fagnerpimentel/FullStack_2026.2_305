let colors = require("colors");
let http = require("http");
let express = require("express");
let bodyParser = require("body-parser")

let app = express();
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs'); 	 
app.set('views', './views');

let server = http.createServer(app);
server.listen(3000);

console.log("Servidor rodando ...".rainbow);

/////////////////////////

app.get("/",function(req,res){
    res.redirect("pagina.html");
})

app.get("/cadastrar",function(req,res){
    let nome = req.query.nome;
    let login = req.query.login;
    let senha = req.query.senha;
    console.log(nome, login, senha);

    res.render("resposta.ejs", {
        resposta:"Usúario cadastrado!",
        metodo: "Enviado pelo método Get"   
    });
})

app.post("/cadastrar", function(req,res){
    let nome = req.body.nome;
    let login = req.body.login;
    let senha = req.body.senha;
    console.log(nome, login, senha);

    res.render("resposta.ejs", {
        resposta:"Usúario cadastrado!",
        metodo: "Enviado pelo método Post"
    })
})

app.get("/for",function(req,res){
    let qtde = req.query.qtde;
    console.log(qtde);
    res.render("for.ejs",{qtde});
})