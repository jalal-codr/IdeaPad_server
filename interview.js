async function distributePoints() {
    const maxDistributed = 300
    const numOfUsers = 150
 
     let totalDistributed = 0
     let distributedList= []
     const min = 0.1;
     
     for(let i =1;i<=numOfUsers;i++){
        const max = Math.min(10,maxDistributed-totalDistributed - (numOfUsers-i)*min);
        const points = Math.random()*(max-min)+min;
        totalDistributed+= points
        distributedList.push({userIndex:i,points:points});

     }
  
 
     return { totalDistributed, distributedList }
 }


 distributePoints()
 .then(res => {
     console.log(`Total Distributed: ${res.totalDistributed}`);
     res.distributedList.forEach((item) => {
         console.log(`User ${item.userIndex} received => ${item.points} points`);
     })
 }).catch(error => console.error('Error occurred:', error.message));




 const openAiOptions = {
    method: "POST",
    url:"",
    headers: {
        accept: "application/json",
        authorization: `Bearer ${process.env.OPEN_AI_KEY}`
    },
    data: {

    }
  }

  class Node{
    data;
    right;
    left
    constructor(data,right,left){
        data =  this.data;
        right = this.right;
        left = this.left;
    }



  }




