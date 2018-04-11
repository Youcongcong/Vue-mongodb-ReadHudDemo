var axios = require('axios')//请求模块
var cheerio = require('cheerio')//网页解析 JQ抓取
var mongoose = require('mongoose')//mongoose模块
var uuidgo = require('uuid/v4');//生成唯一ID
var url = 'https://api.readhub.me/topic?pageSize=20&lastCursor='//爬虫地址
var i = 44158;   // 从第一页开始
mongoose.Promise = global.Promise;
//修改数据库 连接地址  没有表他会自动创建 爬完后 复制shop模型到自己的node里面 修改引入即可
mongoose.connect('mongodb://127.0.0.1:27017/test', {useMongoClient: true});
var connection = mongoose.connection;
connection.once('open', () => {
    console.log('连接MongoDB成功')
})
connection.on('error', () => {
    console.log('连接错误')
})
// 每次保存一页的数据。
var saveData = (docs, page) => {
    return new Promise((resolve, reject) => {
        // topic.insertMany(docs, (err) => {
        //     if( err ) {
        //         i--;
        //         reject(err);
        //         return console.log(`第${page}页保存失败`);
        //     }
        //     console.log(`成功存储第${page}页`);
        //     resolve();
        // })
        connection.collection('topic').insert(docs)
    })
}
var spider = () => {
    console.log(`正在爬取第${i}页，请耐心稍等...`);
    axios.get(`${url}${i}`).then(async res => {
        if( res.status === 200 ) {
            let data = res.data.data;
            let data1 = res.data.data
            // 保存到MongoDB
            i = data[data.length-1].order;
            for(var a=1;a<data.length-1;a++){
                saveData(data[a], i);
            }
            spider();
        }
    })
    .catch(e => {
        console.log('爬取出错或超时');
        spider();
    })
}
spider();