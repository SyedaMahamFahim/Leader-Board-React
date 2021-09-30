import React, { useState } from "react";
import "./style.css";
import HTML from "../Images/html.png";
import studentsData from "./studentsData";
const Students = (props) => {
    const [count, setCount] = useState(0);
  const [score, setScore] = useState(studentsData);
//   const [counters, setCounters]=useState(studentsData)

  const increaseScore=(id)=>{
   const updatedScore=score.map((perScore)=>{
    //    if(value.id===id){
    //        value.studentScore++;
    //        return perScore;
    //    }
       return perScore;
   })
   setScore(updatedScore)
    
}
  return (
    <>
      <div className="header">
        <div class="heading-with-subtitle">
          <div class="wrap">
            <h2 class="title">Leaderboard</h2>
            <p class="sub-title">
              Interns Progression System uses performance tiers to track your
              growth. Along the way, you’ll earn badges for your achievements
              and compete for glory on live leaderboard.
            </p>
          </div>
        </div>
      </div>
      <div className="leaderboard">
        <div className="wrap">
          <div>
            <div className="grid heading">
              <div className="th">Name</div>
              <div className="th">Score</div>
            </div>
          </div>

          {studentsData.map((value, index) => {
            return (
              <>
                <div
                  className="grid row"
                  key={index}
                  style={{ margin: "50px 0px" }}
                >
                  <div className="details-wrap">
                    <div className="intern-name">{value.studentName}</div>
                    <div className="badge-wrap">
                      <div className="badge .badge-6377">
                        <img src={HTML} alt="" />
                        <img src={HTML} alt="" />
                        <img src={HTML} alt="" />
                        <img src={HTML} alt="" />
                      </div>
                    </div>
                    <div className="university">{value.studentUniversity}</div>
                    <div className="scroing">
                      <span className="increment-decrement-span">
                        Increment/Decrement The Score
                      </span>
                      <div className="increase-score" >
                          
                        <button onClick={()=>{increaseScore(value.id)}} >+</button>
                      </div>
                      <div className="decrease-score">
                        <button onClick={value.studentScore - 1}>-</button>
                      </div>
                    </div>
                  </div>
                  {/* {score == 0 ? 
          <div className="score">{value.studentScore}</div>
          
          : <div className="score">{score + value.studentScore}</div> 
          } */}
                  
                  <div className="score">{value.studentScore}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Students;
