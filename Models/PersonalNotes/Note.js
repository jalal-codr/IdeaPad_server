const mongoose = require('mongoose');


const noteSchema = new mongoose.Schema({
    email:{type:String,required:true},
    tittle:{type:String,required:true},
    note:{type:Object,required:true},
    shared:{type:Boolean,required:true}
},{timestamps:true});

const Notes = mongoose.model("Notes",noteSchema);
module.exports=Notes