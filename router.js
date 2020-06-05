// pure koa2 project
const Koa = require('koa')
// contemplate that the koa-router returns a function
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser')
const app = new Koa()

app.use(bodyParser())
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
  ctx.response.body = `<h1>Hello ${name}</h1>
  <form action="/signin" method="post">
    <p>Name:<input value="koa" name="name"></p>
    <p>Password:<input type="password" name="password"></p>
    <p><input type="submit" value="Submit"></p>
  </form>
  `
})

router.post('/signin', async (ctx, next) => {
  let name = ctx.request.body.name || ''
  let password = ctx.request.body.password || ''
  let clock = new Date().getHours()
  console.log(`signin with name: ${name}  password: ${password} time: ${clock}`)
  if (name === 'koa' && password == 'admin') {
    ctx.response.body = `<h1>Hello World ${name}</h1>`
  }
  else {
    ctx.response.body = `<h1>Login failed</h1>
     <p><a href="/">Try again</p>`
  }
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
