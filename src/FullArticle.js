import Title from "./Components/Nav";
import React from "react";

export default function Articles(props) {

    return (
    <>
      <Title />
      <div className="Article-Itself">
        <h1>{props.title}</h1>
        <img src={props.img1}/>
        <p>{props.text1}</p>
        <img src={props.img2}/>
        <p>{props.text2}</p>
      </div>
    </>
  );
}
