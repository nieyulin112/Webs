// npm install koa@latest 最新的koa
const koa = require('koa');
const app = new koa();
const asyncIO = () => {
    return new Promise(resolve => setTimeout(resolve, 500));
};
const mid = () => async (ctx, next) => {
    ctx.body = 'mark';
    await next();
    ctx.body = ctx.body + ' done';
};
app.use(mid());
app.use(async (ctx, next) => {
    await asyncIO();
    ctx.body += ' saved';
    await next();
});
app.listen(3000);
