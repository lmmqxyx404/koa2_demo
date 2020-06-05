const Koa = require('koa')

const bodyParser = require('koa-bodyparser')

const controller = require('./controller.js')

const app = new Koa()

app.use(async (ctx, next) => {
  console.log(`Process the client request method:${ctx.request.method} ,url:${ctx.request.url}  `);
  await next()
})

app.use(bodyParser())

app.use(controller())

app.listen(9999)
console.log(`app is listening the port :9999`);
