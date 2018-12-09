const FileLogger = require('./file-logger'); // наследующий FileLogger

class DeferredFileLogger extends  FileLogger {
    // Конструктор с параметрами file, queueLength, prefix, defaultLevel, dateFormat с вызовом родительского конструктора.
    constructor(file = 'defFileLog.txt', queueLenght =1, prefix, defaultLevel, dateFormat) {
        super(file, prefix, defaultLevel, dateFormat);
        this.queueLenght = queueLenght;
        this.arr = [];
    }

    // Переопределим метод log(message, level)
    // - добавляет отформатированное сообщение (методом format) в очередь
    // - если размер очереди достигает queueLength - записываем все сообщения в файл и очищаем очередь
    // - вовзращает промис, который выполнится после завершения записи или добавления в очередь
    // - в случае отстутствия level используем defaultLevel
    async log(message, level = this.level) {
        if (this.queueLenght > this.arr.length) {
            this.arr.push(this.format(message, level));
        } else {
            let text = await this.arr.join('');
            super.log('\n' + text);
            this.arr.length = 0;
        }
    }
}
module.exports = DeferredFileLogger;