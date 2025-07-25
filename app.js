var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var Writer = require("./Writer");
var PdfWriter = require("./PdfWriter");

var leitor = new Reader();
var escritor = new Writer();


async function main() {
    
    var dados = await leitor.Read("./user.csv");
   
    var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);

    var html = await HtmlParser.Parse(usuarios);

    escritor.Write(Date.now()+".html",html);

    PdfWriter.WritePdf(Date.now()+".PDF",html);
    
    
    
}

main();