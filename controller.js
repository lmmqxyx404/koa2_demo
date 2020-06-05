const fs = require('fs')

function addMApping(router, mapping) {
  for (var url in mapping) {
    if (url.startsWith('GET ')) {
      let path = url.substring(4);
      console.log(`register URL mapping: GET ${path}`);
      router.get(path, mapping[url])
    }
    else if (url.startsWith('POST ')) {
      let path = url.substring(5);
      console.log(`register URL mapping: POST ${path}`);
      router.post(path, mapping[url])
    }
    else {
      console.log(`invalid url: ${url}`);
    }
  }
}

function addControllers(router, dir) {
  fs.readdirSync(__dirname + '/' + dir).filter((f) => {
    return f.endsWith('.js')
  }).forEach((f) => {
    console.log(`current process controller: ${f}`)
    let mapping = require(__dirname + '/' + dir + '/' + f)
    console.dir(mapping)
    console.log(`current file has searched`)
    addMApping(router, mapping)
  })
}

module.exports = function (dir = 'controller') {
  let controllers_dir = dir
  // C indictes directory
  console.log("controllers_dir:  " + controllers_dir);
  let router = require('koa-router')()
  addControllers(router, controllers_dir)
  return router.routes()
}