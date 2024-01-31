const  express = require('express');
const http = require('http');
require('dotenv').config();
const  mongoose = require('mongoose');
const cors = require('cors');
const {Server} = require('socket.io');
const bodyParser = require('body-parser')
const app = express();
const server = http.createServer(app);
const limiter = require('./Middleware/limiter/limiter');  



app.use(express.json());
app.use(bodyParser.json())
app.use(cors({
    origin:'*'
}));

app.use(limiter);

const DB = require('./Config/mongoDb/mongoDb')
try{
    mongoose.connect(DB)
    console.log("DB connected")

}
catch(err){
    console.log(err)
}

const routes = require('./Routes/index');
app.use('/',routes);




const io = new Server(server,{
    cors:{
        origin:'*'
    } 
})

const {updateNote} = require('./Controllers/Notes/NotesController')

io.on('connection',(socket)=>{
    console.log(`${socket.id} connected`);
    io.on("disconnect",(socket)=>{
        console.log(`${socket.id} disconected`)
    })
    socket.on("save_changes",(data)=>{
        updateNote(data);
        io.to(data.id).emit('receive-changes')
    })
})



const port = process.env.PORT;
server.listen(port,()=>{
    console.log(`server running on port ${port}`);
});

module.exports= {
    app,
    io,
}

