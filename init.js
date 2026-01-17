const mongoose =require("mongoose");
const chat = require("./models/chat.js");

main().then(()=>{
    console.log("connection");
}).catch((err)=>{
    console.log("err");
});
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
    from:"kundan",
    to:"rahul",
    msg:"send your exam sheets",
    created_at: new Date(),
},
{
   from:"rahul",
    to:"kundan",
    msg:"thik h bej raha hu",
    created_at: new Date(),  
},
{
     from:"kundan",
    to:"rahul",
    msg:"av to time h exam 2 week",
    created_at: new Date(),
},
{
     from:"rahul",
    to:"kundan",
    msg:"ha bhai av time hai",
    created_at: new Date(),
},
{
     from:"kundan",
    to:"rahul",
    msg:"kab se padhna start karega tu",
    created_at: new Date(),
},
{
     from:"rahul",
    to:"kundan",
    msg:"next week se",
    created_at: new Date(),
},
{
     from:"kundan",
    to:"rahul",
    msg:"thik h fir bye...",
    created_at: new Date(),
},

];

chat.insertMany(allChats);

