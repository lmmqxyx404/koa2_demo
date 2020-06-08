module.exports = {
  'POST /signin': async (ctx, next) => {
    var email = ctx.request.body.email || '',
      password = ctx.request.body.password || ''
    console.log(`email: ${email} , password: ${password}`);

    if (email === 'qwe@asd.com' && password === '123456') {
      console.log('Signin Successed');
      ctx.render('signin-ok.html', {
        title: 'Hello',
        name: 'handsome guy'
      })
    } else {
      console.log('Failed');
      ctx.render('signin-failed.html', {
        title: 'Sign in Failed.....'
      })
    }
  }
}