import React from "react";


function FrontPage(props){
    return(
        
        <div>
            <h1>Quizzical</h1>
            <h2>Play a fun trivia game</h2>
            <button onClick={props.handleClick}>Start Quiz</button>
        </div>

        
    )
}

export default FrontPage