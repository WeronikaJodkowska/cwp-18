const FileLogger = require('./file-logger');

class DeferredFileLogger extends  FileLogger {
    constructor(file = 'defFileLog.txt', queueLenght =1, prefix, defaultLevel, dateFormat) {
        super(file, prefix, defaultLevel, dateFormat);
        this.queueLenght = queueLenght;
        this.arr = [];
    }

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