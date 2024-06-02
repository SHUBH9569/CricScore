import React from "react";

const Card = (props) => {
  return (
    <div className="">
      {props.data.map((p, index) => (
        <div key={index} className="">
          <span>{p.team}</span>
          <span>{p.score}</span>
          <span>{p.scoreupdate}</span>
        </div>
      ))}
    </div>
  );
};

export default Card;
