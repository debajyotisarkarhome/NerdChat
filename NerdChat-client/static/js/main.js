import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";

const inputfield = document.getElementById("input-field");
const form = document.getElementById("form");
const infoHeader=document.getElementById("info-header")
const debugHeader=document.getElementById("debug-header")

const socket=io("http://localhost:3000");

socket.on("debugInfo",info=>{
    displayDebug(info)
})

socket.on("activeInfo",info=>{
    displayMessageInfo(info)
})

socket.on('receive-message',message=>{
    displayMessageRight(message)
})

socket.on('wait',(bool,id)=>{
    if(bool==1){
        displayMessageInfo("Waiting for new meaws")
    }
    else{
        displayMessageInfo("Connected to Room "+id)
    }
})

form.addEventListener("submit",e=>{
    e.preventDefault()
    const message = inputfield.value
    if(message==="") return
    displayMessageLeft(message)
    socket.emit("send-message",message)
    inputfield.value=""
})

function displayMessageLeft(message){
    const div = document.createElement("div")
    div.setAttribute("class","bubbleLeft")
    div.textContent=message
    document.getElementById("cont").append(div)
}

function displayMessageRight(message){
    const div = document.createElement("div")
    div.setAttribute("class","bubbleRight")
    div.textContent=message
    document.getElementById("cont").append(div)
}

function displayMessageInfo(message){
    infoHeader.innerHTML=message
}

function displayDebug(message){
    debugHeader.innerHTML=message
}