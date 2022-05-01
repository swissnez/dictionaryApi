//jshint esversion:9
import React from 'react';
import "./Definitions.css";

function Definitions({word,catergory,meanings,LightTheme}) {
    return (
        <div className="meanings">
            {
                meanings[0] && word && catergory === "en" && (
                    <audio src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} style={{backgroundColor:"#fff",borderRadius:"10px"}} controls>
                        
                    </audio>
                )
            }
            {
                word === "" ? (
                    <span className="subTitle">Start typing a word to search</span>
                ) : (
                        meanings.map((mean) => (mean.meanings.map(item => (
                            item.definitions.map(def => (
                                <div className="singleMean" style={{ backgroundColor: LightTheme? "#3b5360" :"white" , color: LightTheme? "white": "black"}}>
                                    <b>{def.definition}</b>
                                    <hr style={{ backgroundColor: "black", width: "100%" }} />
                                    {
                                        def.example && (<span>
                                            <b>Example: {def.example}</b>
                                        </span>)
                                    }
                                    {def.synonyms && (
                                        <span>
                                            <b>Synonyms: {def.synonyms.map(s=>`${s}`)}</b>
                                        </span>
                                    )}
                                </div>
                            ))   
                        ))))
                    )}
        </div>
    );
}

export default Definitions
