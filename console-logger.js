const Logger = require('./logger');
const moment = require('moment');

const consoleLog = {
    'LOG': console.log,
    'INFO': console.info,
    'WARN': console.warn,
    'ERROR': console.error
};

class ConsoleLogger extends Logger{

    constructor(prefix='', level='LOG', dateFormat="dddd, mmmm dS, YYYY, h:MM:ss TT"){
        super(prefix, level, dateFormat);
    }

    format(message, level = this.level) {
        return `${moment().format(this.dateFormat)} | ${this.prefix} | ${message}`;
    }

    log(message, level = this.level){
        consoleLog[level](this.format(message, level));
    }
}

module.exports = ConsoleLogger;
