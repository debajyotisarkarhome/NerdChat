import React,{useState} from 'react'
import "./banner.css"

export default function Banner(props) {
    return (
        <div className='banner'>
            <img className='bannerImage' src = {props.path} alt="banner"></img>
        </div>
        
    ) 
}
