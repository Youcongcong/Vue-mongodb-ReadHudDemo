const api = require('./api')
const bodyParser = require('body-parser')
// 引入文件模块
const fs = require('fs');
// 引入处理路径的模块
const path = require('path');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api/all',api)
//跨域设置
// 访问静态资源文件 这里是访问所有dist目录下的静态资源文件
app.use(express.static(path.resolve(__dirname, '../dist')))
// 因为是单页应用 所有请求都走/dist/index.html
app.get('*', function(req, res,next) {
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
    const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
    res.send(html)
})
const port = process.env.PORT || 3001;
//监听端口
app.listen(port,() => {
    console.log('success listen ' +port);
})
