import React from 'react';
import './chatbubble.css';
export default function ChatBubble(props) {
    let bubbleClass;
    if(props.side==="right"){
        bubbleClass="bubbleContRight";
    }else{
        bubbleClass="bubbleContLeft";
    }
  return <>
    <div className={bubbleClass}><span className="bubble">{props.text}</span></div>
  </>;
}
