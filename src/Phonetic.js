import React from "react";
import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Phonetic(props) {
    return (
      <span className="Phonetic">
        {props.phonetic.text}
        <div>
          <ReactAudioPlayer 
          src={props.phonetic.audio} 
          />

        </div>
      </span>
    );
}