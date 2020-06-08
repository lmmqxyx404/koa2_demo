const Koa = require('koa')

const bodyParser = require('koa-bodyparser')

const controller = require('./controller')

const templating = require('./template')

const app = new Koa()
const isProduction = process.env.NODE_ENV === 'production'

app.use(async (ctx, next) => {
    console.log(`Process method ${ctx.request.method}, url: ${ctx.request.url}`);
    var start = new Date().getTime(), execTime;
    await next();
    execTime = new Date() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`)
})

if (!isProduction) {
    let staticFiles = require('./static-files')
    app.use(staticFiles('/static/', __dirname + '/static'))
}

app.use(bodyParser())

app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}))

app.use(controller())

app.listen(9999)
console.log(`the port 9999 is listening`);
