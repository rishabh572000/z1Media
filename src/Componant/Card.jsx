import React from "react";


const Card = (props) =>{
    const color= props.color;
  return(
    <>
      <div className="card">
        <div className="item" style={{background:color}}>
          <p >{props.text1}</p>
          <h1>{props.text2}</h1>
          <p id="head">{props.text3}</p>
        </div>
      </div>
    </>
  )
}

export default Card;