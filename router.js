// pure koa2 project
const Koa = require('koa')
// contemplate that the koa-router returns a function
const router = require('koa-router')();
const app = new Koa()


app.use(router.routes())
app.use(async (ctx, next) => {
  console.log(`${ctx.request.method}++${ctx.request.url}`);
  await next();
})

router.get('/hello/:name', async (ctx, next) => {
  const name = ctx.params.name
  ctx.response.body = `<h1>Hello ${name}</h1>`
})

router.get('/', async (ctx, next) => {
  const name = "INDEX"
  ctx.response.body = `<h1>Hello ${name}</h1>`
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

app.listen(9998)
console.log('app started at port 9998')
