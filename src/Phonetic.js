import React from "react";
import ReactPlayer from 'react-player';
import "./Phonetics.css";

export default function Phonetic(props) {
    return (
      <span className="Phonetic">
        {props.phonetic.text}
      
      <ReactPlayer
      url={props.phonetic.audio} 
      width="400px"
      height="50px"
      playing={false}
      controls={true}
      number="1.0"
    />  
      </span>
    );
}