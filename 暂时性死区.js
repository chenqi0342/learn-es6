//let var 
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10
//变量i是var命令声明的，在全局范围内都有效，所以全局只有一个变量i。
//每一次循环，变量i的值都会发生改变，而循环内被赋给数组a的函数内部的console.log(i) ，里面的i指向的就是全局的i。
//也就是说，所有数组a的成员里面的i，指向的都是同一个i，导致运行时输出的是最后一轮的i的值，也就是 10

var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6
//变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量，所以最后输出的是6。


//暂时性死区
var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
//在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区

let x;
function bar(x = y, y = 2) {
    return [x, y];
}
  
bar(); // 报错

function bar(x = 2, y = x) {
    return [x, y];
  }
bar(); // [2, 2]
//调用bar函数之所以报错（某些实现可能不报错），是因为参数x默认值等于另一个参数y，而此时y还没有声明，属于“死区”。
//如果y的默认值是x，就不会报错，因为此时x已经声明了


// 不报错
var x = x;

// 报错
let x = x;
// ReferenceError: x is not defined