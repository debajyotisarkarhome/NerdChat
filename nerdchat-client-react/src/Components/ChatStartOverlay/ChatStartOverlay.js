import "./chatstartoverlay.css"
import {React,useState} from 'react';
import { Button,TextField } from "@mui/material";
import {io} from 'socket.io-client'
import ChatWindow from "../ChatWindow/ChatWindow";

export default function ChatStartOverlay() {
    const [chatWindowState,setChatWindowState] = useState(false);
    const [overlayState,setoverlayState] = useState("visible")
    const [socket,setSocket] = useState(null);
    const onClickStart = ()=>{
        setoverlayState("hidden")
        setSocket(io('ws://localhost:3030'))
        setChatWindowState(true)
    }
    return <div>
        <div style={{visibility : overlayState}}>
            <div className='overlay' >
                <Button variant="filled" className='startButton' onClick={onClickStart}>Start Chatting!</Button>
            </div>

            {/* <div className="dummy">
                <div className="infoHeader">
                        <h2>This is a dummy, you dummy</h2>
                </div>
                    <div className="displayArea">
                        <div className="bubbleContLeft"><span className="bubble">Hello</span></div>
                        <div className="bubbleContRight"><span className="bubble">Yellow</span></div>
                    </div>
                    <div className="interactivePanel">
                        <form className="interactiveForm">
                            <TextField label="Cute Text Here" className="input-field" variant="filled" placeholder="Say Something"></TextField>
                            <Button variant="outlined" type='button' className="send-button" >Send</Button>
                        </form>
                    </div>
                <div/>
            </div> */}
        </div>

        
        {chatWindowState === true && <ChatWindow socket={socket}/>}
    </div>;
}
