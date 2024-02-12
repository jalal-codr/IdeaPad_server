const  Table = require('../../Models/Tables/table');

const  createTable  = async(req,res)=>{
    try{
        const  newTable ={
            tittle:req.body.tittle,
            email:req.body.email,
            url:req.body.url
        };
        const data = new Table(newTable);
        await data.save()
        .then(()=>{
            res.send("New table created");
        })
    }
    catch(err){
        console.log(err.message)
    }
};

const getTable =  async(req,res)=>{
    try{
        const email = req.body.email
        const  tables = await Table.find({email:email}).sort({updatedAt:1});
        res.send(tables.reverse())
    }
    catch(err){
        console.log(err.message)
    }
};

const deleteTable = async(req,res)=>{
    try{
        const id = req.body.id;
       await Table.findByIdAndDelete(id)
       .then(()=>{
        res.send("Note  deleted")
       })
    }
    catch(err){
        console.log(err)
    }
}
module.exports={
    createTable,
    deleteTable,
    getTable,
}
