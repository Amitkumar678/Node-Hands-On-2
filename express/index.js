const express=require("express")//it is very important to load express package in our application


const app=express()  //the express is function it is call and return app object it is responsible for creating whether server and route and middleware


const port=8090  //here create seprate port this allow to run our code

//here creating the route

app.get("/",(req,res)=>{
    res.send("hello world")  //here simple pass the  text data

    res.end()   //it is important to end the server

}).listen(port)   