//Node.js 是 JavaScript 的服务器运行环境
//node --v8-options | grep harmony 查看node对es6的支持

//Babel 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而在老版本的浏览器执行。
//这意味着，你可以用 ES6 的方式编写程序，又不用担心现有环境是否支持
//安装babel npm install --save-dev @babel/core

//Babel 的配置文件是.babelrc，存放在项目的根目录下。使用 Babel 的第一步，就是配置这个文件。
//转码规则 npm install --save-dev @babel/preset-env
//react 转码规则 npm install --save-dev @babel/preset-react

//Babel 提供命令行工具@babel/cli，用于命令行转码。
//npm install --save-dev @babel/cli