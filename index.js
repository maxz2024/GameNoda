require('events').EventEmitter.defaultMaxListeners = 0;
const dictionary = require('./AppModules/dictionary');
// Подключите лаунчер, который создали
const laucher = require('./AppModules/launcher')
console.log(dictionary.global.hello);
// Вызовите функцию лаунчера
laucher.run()


