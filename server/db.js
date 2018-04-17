const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://localhost:27017/test', {useMongoClient: true});

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));
/************** 定义模式loginSchema **************/
// const topicSchema = new mongoose.Schema({
//     id: String,
//     createdAt: Date,
//     nelData: {
//         state: Boolean,
//         result: Array,
//         nerResult:Array
//     },
//     eventData: Array,
//     newsArray: Array,
//     order: Number,
//     publishDate: Date,
//     summary: String ,
//     title: String,
//     updatedAt: Date,
//     timeline: Object,
//     extra: {
//         instantView: Boolean
//     }
// });

// /************** 定义模型Model **************/
// const Models = {
//     topic : aa.model('topic',topicSchema),
// }
module.exports = db;