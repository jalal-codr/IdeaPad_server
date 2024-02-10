const Notes = require('../../Models/PersonalNotes/Note'); 
const Table = require('../../Models/Tables/table');

const createNote = async(req,res)=>{
    try{
        const newNote = {
            email:req.body.email,
            tittle:req.body.tittle,
            note:{},
            shared:false,
        };
        const data = new Notes(newNote);
        await data.save()
        .then((response)=>{
            res.send(response);
        });

    }catch(err){
        console.log(err);
    };
};

const updateNote = async (data)=>{
    try{
        const Newnote = await Notes.findById(data.id)
        Newnote.note =  data.data;
        const  response = await Newnote.save();
        
    }
    catch(err){
        console.log(err);
    }
};

const getNotes = async(req,res)=>{
    try{
        const email  =  req.body.email;
        const  notes = await Notes.find({email:email}).sort({updatedAt: 1 });
        const tables = await Table.find({email:email}).sort({updatedAt:1});
        const data = notes.concat(tables);
        res.send(data.reverse())
    }
    catch(err){
        console.log(err);
    }

}
const getNote = async(req,res)=>{
    try{
        const id  = req.body.id;
        const  response = await Notes.findById(id)
        res.send(response);

    }
    catch(err){
        console.log(err.message);
    }
}

const deleteNote = async(req,res)=>{
    try{
        const id = req.body.id;
       await Notes.findByIdAndDelete(id)
       .then(()=>{
        res.send("Note  deleted")
       })
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {
    getNotes,
    createNote,
    updateNote,
    deleteNote,
    getNote,
}