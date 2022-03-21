import React, {Component, useState} from 'react'

function Game (){
    const num1 = Math.floor(Math.random()*21);
    const num2 = Math.floor(Math.random()*21);
    const num3 = Math.floor(Math.random()*21);

    function randomizer(){
    const num1 = Math.floor(Math.random()*21);
    const num2 = Math.floor(Math.random()*21);
    }

    const [roundNum, setCount] = useState(1);

    const [totalScore, setCountz] = useState(0);
    
   

    function deals(){
        if(num1 != num2){
            return(
                <div>
                    <button onClick={checkerBetween}>Deal</button>
                    <button onClick={noDeal}>No Deal</button>
                </div>
            )
        }else{
            return(
            <div>
                <button onClick={checkHigh}>Higher</button>
                <button onClick={checkLow}>Lower</button>
            </div> 
            )
        }
    }

    function checkerBetween(){
        if((num3 > num1 && num3 < num2) || (num3 < num1 && num3 > num2)){
            alert("WIN"); 
            setCountz(totalScore + 1);
        }else {
            alert("LOSE")
            setCountz(totalScore - 1);
        }
        nextRound()
    }

    function noDeal(){
        
        setCountz(totalScore - 0.5);
        nextRound()
    }

    function checkHigh(){
        if(num3 > num2){
            alert("WIN");
            setCountz(totalScore + 1);
        } else {
            alert("LOSE");
            setCountz(totalScore - 1);
        }
        nextRound()
    }

    function checkLow(){
        if(num3 < num2){
            alert("WIN");
            setCountz(totalScore + 1);
        } else {
            alert("LOSE");
            setCountz(totalScore - 1);
        }
        nextRound()
    }

    function nextRound(){        
        if(roundNum != 5){
            setCount(roundNum + 1);
            
        }else{
           setCount(roundNum - 4)
           alert(totalScore)
           setCountz(totalScore - totalScore)
        }
        randomizer();
    }
        return (
        <div>
        {totalScore}
       <h1>Round {roundNum}</h1>
        <h1>{num1}</h1>
        <h1>{num2}</h1>
        {deals()}
        </div>
        )
    
}

export default Game