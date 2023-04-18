import React from "react";
import "../style.css";

import xbtn from "../images/Delete-Red-X-Button-PNG-Free-Download.png";
export default function Advertisement() {
  function RemoveAd(){

  }
  return (
      <div className="ad-deco">
        <img src={xbtn}onClick={RemoveAd()}alt="Download LDFcomic sans today!"></img>
      </div>
  );
}
