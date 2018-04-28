var axios = require('axios')//请求模块
var cheerio = require('cheerio')//网页解析 JQ抓取
var mongoose = require('mongoose')//mongoose模块
var uuidgo = require('uuid/v4');//生成唯一ID
var url = 'https://api.readhub.me/news?pageSize=20&lastCursor='//爬虫地址
var i = 1524014971000;   // readhub 接口请求规律 拿每次请求回最后一条publishDate 转化为时间戳的值 后面每次拿回数据都会保存给i => i = data[data.length-1].publishDate;
mongoose.Promise = global.Promise;
//修改数据库 连接地址  没有表他会自动创建
mongoose.connect('mongodb://127.0.0.1:27017/test', {useMongoClient: true});
var connection = mongoose.connection;
connection.once('open', () => {
    console.log('连接MongoDB成功')
})
connection.on('error', () => {
    console.log('连接错误')
})
// 每次保存的数据。
var saveData = (docs, page) => {
    return new Promise((resolve, reject) => {
        
        connection.collection('news').insert(docs)
    })
}
var spider = () => {
    console.log(`正在爬取第${i}页，请耐心稍等...`);
    axios.get(`${url}${i}`).then( res => {
        if( res.status === 200 ) {
            let data = res.data.data;
            let data1 = res.data.data
            // 保存到MongoDB
            i = new Date(data[data.length-1].publishDate).getTime();
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