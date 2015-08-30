var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('ck',function(){
	console.log('这是一个自定义事件')
})
setTimeout(function(){
	event.emit('ck')
},1000)