const fs = require("fs");
const util = require("util");

class Writer {
    constructor (){
        this.writer = util.promisify(fs.writeFile)
    }

    async Write (filenane,data){
        try{
            await this.writer(filenane,data)
            return true;
        }catch(err){
            return false;
        }
    }
}


module.exports = Writer;