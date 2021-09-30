import React from 'react'
import '../style.css'
import HTML from "../../Images/html.png";
import Images from './Images';

const Board = ({scores,onIncrement,onDecrement}) => {
    return (
        <div>
             {scores.map((value, index) => {
            return (
              <>
                <div
                  className="grid row"
                  key={value.id}
                  style={{ margin: "50px 0px" }}
                >
                  <div className="details-wrap">
                    <div className="intern-name">{value.studentName}</div>
                    <div className="badge-wrap">
                      <div className="badge .badge-6377">
                          {
                              Images.map((value,index)=>{
                                  
                                    return (
                                        <img src={value.image} alt="" key={index} />
                                        
                                          )
                                  
                                
                              })
                          }
                        {/* <img src={HTML} alt="" />
                        <img src={HTML} alt="" />
                        <img src={HTML} alt="" />
                        <img src={HTML} alt="" /> */}
                      </div>
                    </div>
                    <div className="university">{value.studentUniversity}</div>
                    <div className="scroing">
                      <span className="increment-decrement-span">
                        Increment/Decrement The Score
                      </span>
                      <div className="increase-score" >
                          
                        <button onClick={() => onIncrement(value.id)} >+</button>
                      </div>
                      <div className="decrease-score">
                        <button onClick={()=>onDecrement(value.id)}>-</button>
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
    )
}

export default Board
