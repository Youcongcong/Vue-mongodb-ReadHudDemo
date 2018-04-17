var db = require('./db');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
mongoose.Promise = global.Promise;

var adminSchema = new mongoose.Schema({
})
adminSchema.statics = {
    fetch:function(cb){
        return this.find().exec(cb)
    }
}

var topic = mongoose.model('topic', adminSchema);
// 获取所有账号接口
router.get('/api/all',(req,res) => {
    //     var options = req.query;
    //     var id = options.id;
    //     var pageSize = Number(options.pageSize) || 10;
    //     var currentPage = Number(options.currentPage) || 1;
    topic.fetch((err,data) =>{
            if (err) {
                console.log('temai find error!')
            } else {
                res.send({code: 200, msg:'成功', data: data})
            }
        })
   
    
        
});

module.exports = router;