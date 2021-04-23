import React, { useState } from 'react';
import axios from 'axios';
import InputArea from './InputArea';
import OutputArea from './OutputArea';

const App = () => {
    const [display, setDisplay] = useState("none");

    const [word, setWord] = useState("");
    const [lang, setLang] = useState("en_US")

    const [audio, setAudio] = useState("");
    const [definition, setDefinition] = useState([]);
    const [sentences, setSentences] = useState([]);

    const meaningChange = (event) => {
        setWord(event.target.value);
    }

    const playAudio = () => {
        setTimeout(() => {
            setAudio(""); 
            new Audio(audio).play()
        }, 500)
    };

    const languageChange = (e) => setLang(e.target.value);

    const submit = (e) => {
        e.preventDefault();

        if(word !== "") {
            setDefinition([]);
            setSentences([]);
            
            if(lang === "en_US" || lang === "en_GB") {
                setDisplay('block');

                async function getMeaning() {
                    const api = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`);
        
                    api.data[0].meanings.map(val => {
                        console.log(val);
                        setDefinition(oldVal => {
                            return [...oldVal, {definition: val.definitions[0].definition}];
                        });
        
                        setSentences(oldVal => {
                            return [...oldVal, {sentences: val.definitions[0].example}];
                        });
                    });
        
                    setAudio(api.data[0].phonetics[0].audio);
                }
                getMeaning();
            }
            else {
                async function getMeaning() {
                    const api = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`);
        
                    console.log(api);
        
                    api.data[0].meanings.map(val => {
                        setDefinition(oldVal => [...oldVal, {definition: val.definitions[0].definition}]);
        
                        setSentences(oldVal => [...oldVal, {sentences: val.definitions[0].example}]);
                    });
                }
                getMeaning();
            }
        }
        else {
            alert("Please enter a word");
        }
    }

    return(
        <React.Fragment>
            <h2 style={{fontFamily: 'Montserrat'}}>My English Teacher told me to download a Dictionary but as I am a<br/>STUPID PERSON. I decided to make one myself</h2>
            <br/><br/>
            <InputArea languageChange={languageChange} meaningChange={meaningChange} word={word} submit={submit} />
            <OutputArea playAudio={playAudio} definition={definition} sentences={sentences} display={display} />
        </React.Fragment>
    );
}

export default App;