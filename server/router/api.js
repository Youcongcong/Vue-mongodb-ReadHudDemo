
var express = require('express')
var router =express();
var router = express.Router(); // 获得express router对象
var mongoose = require('mongoose')
mongoose.Promise = global.Promise;

// 任何路由的每次request都执行
router.use(function (req, res, next) {
    // 打印
    console.log('Something is happening.');
    next(); // 在这里会将request交给下一个中间件，如果这个中间件后面没有其他中间件，请求会交给匹配的路由作处理
});

// 用这个路由来做简单的测试(用get动词访问 http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({message: 'hooray! welcome to our api!'});
});

var topics = require('../model/topic');

// 注册我们的路由 ------------------------------- 所有的路由都会加上前缀 /api
router.get('/list', function (req, res) {
    let page = parseInt(req.param('page'))
    let pageSize = parseInt(req.param('pageSize'))
    let skip = (page - 1) * pageSize
    let params = {};
    let topicsModel = topics.find(params).skip(skip).limit(pageSize)
    topicsModel.exec((err, doc) => {
        if (err) {
            res.json({status: '1', msg: err.message})
        } else {
            res.json({
                status: '0',
                msg: '',
                result: {
                    count: doc.length,
                    list: doc,
                    page: page,
                    pageSize: pageSize
                }
            })
        }
    })
});

module.exports = router;