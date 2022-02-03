import React, { useEffect, useState } from 'react';
import {TextField,Button} from '@mui/material'
import ChatBubble from '../ChatBubble/ChatBubble';
import './chatWindow.css'
let msgList=[]

export default function ChatWindow(props) {
    const [infoHeaderData,setInfoHeaderData] = useState("Info-header")
    const [inputData,updateInputData] = useState("")
    const sendClicked = () => {
        if(inputData!==""){
        console.log("pressed")
        msgList.push(<ChatBubble text={inputData} key={(Date.now()).toString()}/>)
        props.socket.emit("send-message",inputData)
        updateInputData("")
        }
    }
    props.socket.on("receive-message",message=>{
        msgList.push(<ChatBubble text={message} side="right"/>)
    })
    props.socket.on("wait",(bool,id)=>{
        if(bool===1){
            setInfoHeaderData("Waiting for Nerds to join :)")
        }
        else{
            setInfoHeaderData("Connected to : ".concat(id))
        }
    })
    return <>
            <div className="infoHeader">
                <h2>{infoHeaderData}</h2>
            </div>
            <div className="displayArea">
                {msgList}
            </div>
            <div className="interactivePanel">
                <form className="interactiveForm">
                    <TextField label="Cute Text Here" className="input-field" variant="filled" placeholder="Say Something" onChange={(e)=>updateInputData(e.target.value)}></TextField>
                    <Button variant="outlined" type='button' className="send-button" onClick={sendClicked} >Send</Button>
                </form>
            </div>
    </>;
}
