import OneGame from "./OneGame";
export default function Rounds({computerAnswer, userAnswer}){
    const rounds = new Array(3).fill(0);
    
    return(
        <>
        {rounds.map((round,idx)=><OneGame key={idx} noRound={idx} computerAnswer={computerAnswer} userAnswer={userAnswer}/>)}   
        </>
    )
}