import React from 'react';

const InputArea = (props) => {
    return(
        <React.Fragment>
            <input type="text" onChange={props.meaningChange} value={props.word} />
            <button className="search" onClick={props.submit}>Search</button>
            <br /><br/>
            <select onChange={props.languageChange}>
                <option value="en_US" >English (US)</option>
                <option value="hi">Hindi</option>
                <option value="fr">French</option>
                <option value="ru">Russian</option>
                <option value="de">German</option>
                <option value="en_GB">English (UK)</option>
                <option value="it">Italian</option>
                <option value="es">Spanish</option>
                <option value="ko">Korean</option>
                <option value="tr">Turkish</option>
                <option value="pt-BR">Brazilian Portuguese</option>
                <option value="ar">Arabic</option>
            </select>
        </React.Fragment>
    );
}

export default InputArea;