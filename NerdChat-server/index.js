const socketio=require("socket.io")
const generateRoomToken = require("./utils/generateRoomToken.js")
const io = socketio(3030,{
  cors: {
    origin: ["http://localhost:3000"]
  }
});

matchBuffer=[]

io.on("connection",socket => {
  console.log(socket.id)
  roomid=generateRoomToken.generateRoomToken()
  //console.log(io.sockets.sockets.keys("srvSockets"))
  socket.emit("debugInfo","Connection ID : "+socket.id)
  const clients = Array.from(io.sockets.sockets.keys("srvSockets"))
  //console.log(clients.length)
  if(clients.length%2!=0){
    socket.emit("wait",1)
  }
  else{
    originRoomid=clients.length-2
    originRoomSocket=io.sockets.sockets.get(clients[originRoomid]);
    socket.join(roomid)
    originRoomSocket.join(roomid)
    io.to(roomid).emit("wait",0,roomid)
  }
  //console.log(io.sockets.adapter.rooms)
  //console.log(socket.rooms)

  socket.on("send-message",message=>{
    console.log(message)
    socket.to(Array.from(socket.rooms)).emit("receive-message",message)
  })
})
  
