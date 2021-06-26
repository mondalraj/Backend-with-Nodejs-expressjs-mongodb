const messages = require('./messages');
const add = require('./add')

messages.forEach(msg => console.log(msg));
console.log(add(10, 20));