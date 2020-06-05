let fn_index = async (ctx, next) => {
  ctx.response.body = `<h1>Hello this is Index</h1>
  <form action="/signin" method="post">
    <p>Name:<input name="name" value="admin"></p>
    <p>Password:<input name="password" value="123456" type="password"></p>
    <p><input type="submit" value="Submit"></p>
  </form> `
}

let fn_signin = async (ctx, next) => {
  let name = ctx.response.body.name;
  let password = ctx.response.body.password
  let hour = new Date().getMinutes()
  console.log(`signin with name: ${name}  password: ${password} time: ${hour}`)
  if (name === 'admin' && password === '12345') {
    ctx.response.body = `<h1>Success this is your homepage--${name}</h1>`
  }
  else {
    ctx.response.body = `<h1>Login failed</h1>
    <p><a href="/">Please try again</p>`
  }
}

let fn_test = async (ctx, next) => {
  let received = ctx.params.name
  ctx.response.body = `<h1>url is test parameters is ${received}</h1>`
}

module.exports = {
  'GET /': fn_index,
  'POST /signin': fn_signin,
  'GET /test/:name': fn_test
}