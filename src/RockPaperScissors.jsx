import OneGame from "./OneGame";
import { useState } from "react";
import {randomAnswerIndx, randomAnswer} from "./utils"
export default function RockPaperScissiors(){
    const rounds = new Array(3).fill(0);
    const [computerAnswer, setComputerAnswer] = useState(new Array(3).fill("Computer"));
    const [userAnswer, setUserAnswer] = useState(new Array(3).fill("User"));
    const [result, setResult] = useState(new Array(3).fill(""));
    const [computerScore, setComputerScore] = useState(0);
    const [userScore, setUserScore] = useState(0);
    const [gameActive, setGameActive] = useState(new Array(3).fill(true));
    const [gameFinish, setGmaeFinish] = useState(0);
    const [finalResult, setFinalResult] = useState("");
   
    function getAnswer (noRound) {
        setGameActive((previousGameActive)=>{
            return previousGameActive.map((isactive,i)=>{
                if (i === noRound){
                    return false
                } else {
                    return isactive;
                }
            })
        })

        const computerIdx = randomAnswerIndx();
        const userIdx = randomAnswerIndx();
        const indexDiff = computerIdx - userIdx;
        setComputerAnswer((answers)=>{
            return answers.map((answer,i)=>{
                if (i === noRound){
                    return randomAnswer(computerIdx)
                } else{
                    return answer
                }
            })
        })
            
        setUserAnswer((answers)=>{
            return answers.map((answer,i)=>{
                if (i === noRound){
                    return randomAnswer(userIdx)
                } else{
                    return answer
                }

            })
        })  

        switch (indexDiff){
            case (0):
                setResult((results)=>{
                    return results.map((result,i)=>{
                        if (i === noRound){
                            return 'Draw'
                        } else {
                            return result
                        }
                    })
                }) 
                setComputerScore(computerScore+1)
                setUserScore(userScore+1)
                break;
            case (1):
                setResult((results)=>{
                    return results.map((result,i)=>{
                        if (i === noRound){
                            return 'User Won'
                        } else {
                            return result
                        }
                    })
                }) 
                setUserScore(userScore+1);
                break;
            case (-2):
                setResult((results)=>{
                    return results.map((result,i)=>{
                        if (i === noRound){
                            return 'User Won'
                        } else {
                            return result
                        }
                    })
                }) 
                setUserScore(userScore+1);
                break;
            default:   //-1 or 2
            setResult((results)=>{
                return results.map((result,i)=>{
                    if (i === noRound){
                        return 'User Lose'
                    } else {
                        return result
                    }
                })
            }) 
                setComputerScore(computerScore+1)
        }

        setGmaeFinish(gameFinish + 1);

        if (computerScore > userScore){
            setFinalResult("🙂Sorry, you lose🙂")
        } else if (computerScore < userScore) {
            setFinalResult("👏Congruation! You win!👏")
        } else {
            setFinalResult("Final result: Draw")
        }
    }
     
    
    return(
        <>
        {gameFinish === 3  && <h2>{finalResult}</h2>}
        {rounds.map((round,idx)=><OneGame key={idx} noRound={idx} getAnswer={getAnswer} roundActive={gameActive[idx]} computerAnswer={computerAnswer[idx]} userAnswer={userAnswer[idx]} roundResult={result[idx]}/>)}   
        </>
    )
}

