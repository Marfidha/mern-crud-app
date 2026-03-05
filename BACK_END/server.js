import dotenv from "dotenv"
dotenv.config()
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import usermodel from "./models/Users.js"
// import UpdateUser from "../FRONT_END/src/components/UpdateUser.js"

const port = process.env.PORT || 3001




const app=express()
app.use(cors({
   origin: ["http://localhost:5173/",
    "https://marfidha.github.io"],
  // origin: ['http://localhost:5173/','http://localhost:5173','http://localhost:5174','http://localhost:5174/'],
  // methods: ['GET', 'POST', 'PUT', 'DELETE'],
  // allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(express.json());
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connected succsesfullly"); 
    app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})

}).catch(err=>{
    console.log("MongoDB connection error:", err);
});




const admin={
  email :"admin@gmail.com",
  password:"admin123"
}


const server=(req,res)=>{

 
const {email,password}=req.body
  if(email==admin.email && password==admin.password){
     res.json({message:"done",status:200})
  }else{
     res.json({message:"not done",status:500})
  }
}



app.post("/createserver",(req ,res)=>{
  usermodel.create(req.body)
  .then(users=> res.json(users))
  .catch(err => res.json(err))
})

app.get('/', (req ,res)=>{
  usermodel.find({})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})


app.get('/getuser/:id',(req,res)=>{
  const id= req.params.id;
  usermodel.findById({_id:id})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.put('/UpdateUser/:id',(req ,res)=>{
  const id= req.params.id;
  usermodel.findByIdAndUpdate({_id:id}, {
    name:req.body.name, 
    email: req.body.email ,
    age:req.body.age
  })
  .then(users => res.json(users))
  .catch(err => res.json(err))
})


app.delete('/deleteuser/:id' ,(req ,res) =>{
  const id= req.params.id;
  usermodel.findByIdAndDelete({_id: id})
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

app.post("/admin",server)





// app.listen(port,()=>{
//     console.log(`Server running on port ${port}`);
// })