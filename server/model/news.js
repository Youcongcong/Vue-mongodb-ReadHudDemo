var mongoose = require('mongoose');

var Schema = mongoose.Schema

var newsSchema = new Schema({
    id:Number,
    publishDate:Date,
    summary:String,
    summaryAuto:String,
    title:String,
    url:String,
    mobileUrl:String,
    siteSlug:String,
    language:String,
    authorName:String,

})


module.exports = mongoose.model('news', newsSchema,'news');