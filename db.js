const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://user:aneeqasghar7374@cluster0.0ade0.mongodb.net/horizonCars' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose