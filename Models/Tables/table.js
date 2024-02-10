const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    tittle:{type:String},
    email:{type:String,required:true},
    url:{type:String,required:true},

},{timestamps:true});

const Table = mongoose.model('Table',tableSchema);

module.exports=Table;