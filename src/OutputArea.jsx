import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import SpeakerIcon from '@material-ui/icons/Speaker';

const OutputArea = (props) => {
    return(
        <div className="data" style={{display: props.display}}>
            <p>
                <br/>
                <span>
                <Tooltip title="Hear Pronunciation" placement="top-end" arrow onClick={props.playAudio}>
                    <IconButton aria-label="speaker">
                        <SpeakerIcon />
                    </IconButton>
                </Tooltip>
                </span>
            </p>

            <h2 style={{color: 'yellow'}}>Definition</h2>
            <div className="define">
                {props.definition.map(val => {
                    return <>{val.definition} <p></p></>
                })}
            </div>

            <br/><br/>
                
            <h2 style={{color: 'yellow'}}>Sentences</h2>

            <div className="sentences">
                {props.sentences.map(val => {
                    return <>{val.sentences}<p></p></>;
                })}
            </div>
        </div>
    );
}

export default OutputArea;