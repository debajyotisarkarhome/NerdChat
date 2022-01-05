const socketio=require("socket.io")
const io = socketio(3000,{
  cors: {
    origin: ["http://localhost:8080","https://admin.socket.io/"]
  }
});

matchBuffer=[]

io.on("connection",socket => {
  socket.emit("debugInfo","Connection ID : "+socket.id)
  //const clients = Array.from(io.sockets.adapter.rooms.keys())
  matchBuffer.push(socket.id)
  if(matchBuffer.length<2){
    socket.emit("wait",1)
  }
  else{
    socket.join(matchBuffer[0])
    //socket.emit("wait",0,matchBuffer[0])
    io.to(matchBuffer[0]).emit("wait",0,matchBuffer[0])
    matchBuffer=[]
  }
  socket.on("send-message",message=>{
    socket.broadcast.emit("receive-message",message)
    console.log("yup");
  })
})
  
