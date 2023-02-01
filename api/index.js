const express = require ('express');
const cors=require('cors'); // we use to communicate our browser posrt with 4000
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcryptjs')
const User= require('./models/User.js');
require('dotenv').config();
const app = express();

const bcryptSalt= bcrypt.genSaltSync(10);

app.use(express.json());

app.use(cors({
    credentials:true,
    origin: 'http://localhost:5173'
}))

app.get('/test', (req,res)=>{
    res.json('test ok');
})

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL);

//3NucK3Cgf9wX5Xll password for mongodb
app.post('/register',async(req,res)=>{
    const {name,surname,email,password} = req.body;
    const userDoc= await User.create({
        name,
        surname,
        email,
        password:bcrypt.hashSync(password,bcryptSalt)
    })
    res.json(userDoc);
});

app.listen(4000);



