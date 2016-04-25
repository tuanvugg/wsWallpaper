var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var imageSchema = new Schema({
    link :String,
    rank:String,
    category:String,
    color:String,
    tag:String
},{ versionKey: false });

module.exports = mongoose.model('images', imageSchema);

