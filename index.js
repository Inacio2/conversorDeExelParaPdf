const fs = require("fs");

fs.readFile("././inacio.bles",(erro,dados) => {
    if(erro){
        console.log("Falha ao abrir arquivo");
    }else{
        console.log(dados);
    }
});