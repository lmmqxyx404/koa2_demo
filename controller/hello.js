let fn_hello = async (ctx, next) => {
  let received = ctx.params.name
  ctx.response.body = `<h1>url is hello parameters is ${received}</h1>`
}

module.exports = {
  'GET /hello/:name': fn_hello
}