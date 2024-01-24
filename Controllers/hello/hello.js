


const sayHello = async(req,res)=>{
    try{
        res.status(200).send('hello');
    }
    catch(err){
        console.log(err);
    }
    
};

module.exports = sayHello;
