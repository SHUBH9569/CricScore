import React from "react";
import Card from "./Card";
const board = (props) => {
  return (
    <div className="">
      <h2 className="">
        Indian Premeire League
      </h2>
      {props.data.map((p, index) => (
        <Card key={index} data={p} />
      ))}
    </div>
  );
};

export default board;
