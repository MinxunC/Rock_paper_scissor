const threeOptions = ['✊', '✌️', '✋'];

function randomAnswerIndx(){
    const answerIndx = Math.floor(Math.random()*3);
    return answerIndx;
}

function randomAnswer(indx){
    return threeOptions[indx];
}

export {randomAnswerIndx, randomAnswer}