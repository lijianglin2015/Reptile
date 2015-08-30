
var http = require('http')

http.get('http://cnodejs.org',function(res){
console.log(res.statusCode)
console.log(1)
}).on('error',function(e){
	console.log(1)
})