const Logger = require('./logger');
const fs = require('fs');

class FileLogger extends Logger{

    constructor(file="defaultFile.txt", prefix='PR', level="LOG", dateFormat="dddd, mmmm dS, YYYY, h:MM:ss tt"){
        super(prefix, level, dateFormat);
        this.file = file;
    }

    log(message, level = "LOG"){
        return new Promise((resolve, reject)=> {
            this.fileType(typeof this.file, message);
        });
    }

    fileType(type, message){
        type = type.toString();
        if(type==="string"){this.writeFile(message);}
        else{this.writeStream(message)}
    }

    writeFile(message){
        fs.access(this.file, fs.constants.F_OK, (err) => {
            fs.appendFile(this.file, this.format(message, this.level), (err) => {
                if (err){console.log('Error in writing file'); return false;}
                return true;
            });
        });
    };

    writeStream(message){
        this.file.write(this.format(message, this.level), (err) => {
            if (err) {console.error(err); return false;}
            return true;
        });
    };

    close(){
        this.file.close();
    }
}

module.exports = FileLogger;