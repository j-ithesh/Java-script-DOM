const express = require('express')
const mongoose = require('mongoose');
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.use(express.json())



const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    bio: String
  });

const User = mongoose.model('User', userSchema);

app.get('/users', async (req, res, next) => {
   try{
     const users = await User.find({});
     res.status(200).json(users)
   }
   catch(err){
     console.log(err)
   }
})

app.post('/Sign-up',async (req, res, next) => {
     try{
        
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
     }
     catch(error){
        console.log(error)
     }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

main().then(()=>{console.log("db connected")}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://jithu:2Hc1w2wyzvKGajvD@cluster0.k7juqjz.mongodb.net/?retryWrites=true&w=majority');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}