import { useState } from "react";
export default function OneGame ({noRound, getAnswer, roundActive, computerAnswer, userAnswer, roundResult}) {

    return (
        <div>
            <h3>Round {noRound + 1} {roundResult}</h3>
            <h3>{computerAnswer} VS {userAnswer} </h3>
            {roundActive && <button onClick={()=>getAnswer(noRound)}>Start</button>}
        </div>
    )
    
}




