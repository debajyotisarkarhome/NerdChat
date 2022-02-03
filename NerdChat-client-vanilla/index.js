const express = require("express")
const socli = require("socket.io-client")
const app=express()
const path = require("path")
const port = 8080

app.use("/static",express.static(path.join(__dirname,"/static")))
//app.use(express.static(path.join(__dirname,"node_modules")))

app.get("/randomChat",(req,res)=>{
    res.sendFile(path.join(__dirname,"/static/index.html"))
})

app.listen(port)