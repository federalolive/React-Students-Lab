import React from 'react'


const Score = (props) =>{
    return(
        <div>
            {props.scores.map((scores,idx)=>
        <div>
            <h4>Test Scores</h4>
           <p>Date Administered: {scores.date}</p>
         <p>Scores: {scores.score} </p>          
        </div>
              )}      
           
       </div>
         )}   
          
    

export default Score;