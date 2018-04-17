var mongoose = require('mongoose');

var Schema = mongoose.Schema

var topicSchema = new Schema({
    id:String,
    createdAt:Date,
    nelData:Object,
    eventData:Object,
    newsArray:Array,
    order:Number,
    publishDate:Date,
    summary:String,
    title:String,
    updatedAt:Date,
    timeline:Object,
    extra:Object
})


module.exports = mongoose.model('topic', topicSchema,'topic');