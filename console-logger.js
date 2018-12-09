const Logger = require('./logger'); // наследующий Logger
const moment = require('moment');

const consoleLog = {
    'LOG': console.log,
    'INFO': console.info,
    'WARN': console.warn,
    'ERROR': console.error
};

class ConsoleLogger extends Logger{

    // Конструктор с такими же параметрами как и у родителя с вызовом родительского конструктора
    constructor(prefix='', level='LOG', dateFormat="dddd, mmmm dS, YYYY, h:MM:ss TT"){
        super(prefix, level, dateFormat);
    }

    // Переопределим метод format(message, level)
    // Шаблон строки: Отформатированная дата | Префикс | Сообщение
    format(message, level = this.level) {
        return `${moment().format(this.dateFormat)} | ${this.prefix} | ${message}`;
    }

    // Метод log(message, level)
    // - выводит на консоль отформатированное сообщение (методом format)
    // - в зависимости от значения level используется различные методы из console
    log(message, level = this.level){
        consoleLog[level](this.format(message, level));
    }
}

module.exports = ConsoleLogger;
