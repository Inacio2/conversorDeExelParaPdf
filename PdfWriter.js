const pdf = require("html-pdf");

class PdfWriter{

    static WritePdf(filenane,html){
        pdf.create(html,{}).toFile(filenane,(err) =>{})

    }

}



const i = new PdfWriter;

module.exports = PdfWriter; 