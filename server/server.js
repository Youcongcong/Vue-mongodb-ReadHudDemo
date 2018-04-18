// server.js BASE SETUP
// =============================================================================
var url = 'mongodb://localhost:27017/test' // 连接mongodb的url
var mongoose = require('mongoose'); //加载mongoose模块
mongoose.connect(url, {useMongoClient: true});


var topicRouter = require('./router/api')
var newsRouter = require('./router/news')

// 加载express
var express = require('express'); // call express
var router = new express()

var app = express(); // 获得express定义的app，app对象此时代表整个web应用
bodyParser = require('body-parser');

// 给app配置bodyParser中间件 通过如下配置再路由种处理request时，可以直接获得post请求的body部分
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set our port



// 注册路由 路由会加上“／topics”前缀
app.use('/topics', topicRouter);
app.use('/', newsRouter);



// 启动server
// =============================================================================
// 开始监听端口
app.listen(port,'0.0.0.0');
console.log('Magic happens on port ' + port);