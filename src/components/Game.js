import React, {Component} from 'react'

function Game (){

    

    const num1 = Math.floor(Math.random()*21);
    const num2 = Math.floor(Math.random()*21);

   
        return (
        <div>
            <h1 id="post">{num1}</h1>
            <h1 id="post2">{num2}</h1>
          
            
            
        </div>
        )
    
}

export default Game