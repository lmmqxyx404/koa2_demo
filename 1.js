console.log(process.arch)
console.log(process.cwd())

// /\w/ can test '_'  -------------  /\W/ put the opposite effect
var str1 = /\w/;
var str2 = /\W/;
var str3 = "____"
var str4 = "!";
console.log(str1.test(str3));
console.log(str1.test(str4));
console.log(str2.test(str3));
console.log(str2.test(str4));
  