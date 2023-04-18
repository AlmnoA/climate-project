import React from "react";
import "../style.css";
export default function Article(props) {
  function GotoPage(){

  }
  return (
    <div className="article-wrapper" onClick={GotoPage}>
      <img src={props.Image} alt={props.alt}></img>
      <div>
        <h1>{props.title}</h1>
        <p>{props.disc} </p>
        <h2>
          By <span>{props.author}</span>
        </h2>
      </div>
    </div>
  );
}
