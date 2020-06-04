// pure koa2 project
const Koa = require('koa')

const app = new Koa()

app.use(async (ctx, next) => {
  console.log(`${ctx.request.method}++${ctx.request.url}`);
  await next();
})

app.use(async (ctx, next) => {
  const start = new Date().getTime()
  await next()
  const ms = new Date().getTime() - start
  console.log(`time:  ${ms}ms`);
})

app.use(async (ctx, next) => {
  await next()
  ctx.response.type = 'text/html'
  ctx.response.body = '<h1>Hello World</h1>'
})

app.listen(9999)
console.log('app started at port 9999')
