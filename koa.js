// control + option + B 进行格式化快捷键
var koa = require('koa');
var app = koa();
var asyncIO = function() {
    return new Promise(function(resolve) {
        // 只执行一次
        setTimeout(function() {
            resolve()
        }, 500);
    });
};
var mid = function() {
	return function*(next) {
		this.body = 'mark';
		yield next
		this.body += ' done ';
	};
};
app.use(mid());
app.use(function*(next) {
    yield asyncIO();
	this.body += ' saved';
	yield next
})
app.listen(3000)
