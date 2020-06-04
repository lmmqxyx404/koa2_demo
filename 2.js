function Cat(name) {

  this.name = name || 'asd';
}

Cat.prototype.say = function () {
  return `Hello, ${this.name}!`
}

var kitty = new Cat('Kitty');
var doraemon = new Cat('哆啦A梦');
if (kitty && kitty.name === 'Kitty'
  && kitty.say
  && typeof kitty.say === 'function'
  && kitty.say() === 'Hello, Kitty!'
  && kitty.say === doraemon.say
) {
  console.log('测试通过!');
} else {
  console.log('测试失败!');
}