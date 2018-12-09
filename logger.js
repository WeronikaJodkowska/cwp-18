const moment = require('moment');
// Облегченная библиотека дат JavaScript для анализа, проверки, манипулирования и форматирования дат.
class Logger{

    constructor(prefix='PR', level='LOG', dateFormat="dddd, mmmm dS, YYYY, h:MM:ss TT"){
        this.prefix = prefix;
        this.level = level; // Уровень логирования
        this.dateFormat = dateFormat; // формат даты
    }
    // формирует строку для лога на основании сообщения, уровня логирования, префикса и формата даты.
    format(message, level=this.level){
        // Шаблон строки: Отформатированная дата | Префикс | Уровень логирования | Сообщение
        return `${moment().format(this.dateFormat)} | ${this.prefix} | ${level} | ${message}\n`;
    }
}

module.exports = Logger;