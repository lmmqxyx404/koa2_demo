let arr = [];
for (let i = 0; i < 10; i++) {
  if (i & 1) arr.push(i);
}

//JS arrow function is not executed at once 
//the array function filter recepte a arrow function then received a bool value
arr = arr.filter((x) => {
  if (x > 5) return 1
})
console.log(arr);

let value = () => 7;
console.log(value());

let value2 = function () {
  return 4
}
console.log(value2());