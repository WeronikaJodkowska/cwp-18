const ConsoleLogger = require('./console-logger');
const FileLogger = require('./file-logger');
const DeferredFileLogger = require('./deferred-file-logger');

(()=>{
    let m = new ConsoleLogger('pr', 'INFO', null);
    let cm = new FileLogger('test1.txt', 'dd', 'INFO');
    let dfl = new DeferredFileLogger("myFIle.txt", 2, '--Pr', 'INFO');
    dfl.log('firstMessage');
    dfl.log('secondMessage');
    dfl.log('secondMessage');
})();