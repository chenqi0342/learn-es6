//es5只有全局作用域和函数作用域
//es6新增块级作用域

//为什么需要块级作用域
var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = 'hello world';
  }
}

f(); // undefined

//if代码块的外部使用外层的tmp变量，内部使用内层的tmp变量。
//但是，函数f执行后，输出结果为undefined，原因在于变量提升，导致内层的tmp变量覆盖了外层的tmp变量
//内层变量覆盖外层变量