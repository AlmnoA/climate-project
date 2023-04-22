import Title from "./Components/Nav";
import React from "react";
import img1 from "./images/credit_tetra-imagesalamy_anmp9y_web.png";
import img2 from "./images/wario.png";
export default function HelpClimate() {
  return (
    <>
      <Title />
      <div className="Article-Itself">
        <h1>How Can You Help the climate</h1>
        <img src={img1} />
        <p>
          As we all know, the Climate is changing and scientists have predicted
          An increase in sea levels throughout the globe, mainly in places near
          the coast, they have predicted a more extreme weather cycles global as
          well and this leads many to the question <span>"What can I do to help?"</span>
        </p>
        <img src={img2} />
        <p>
          I believe the best course of action should be Supporting policies and
          regulations that address climate change at the local, national, and
          global levels. Contact elected officials, participate in climate
          rallies or demonstrations, and support organizations that work towards
          climate action can all make a difference in advocating for effective
          climate policies. This is your best shot at having a real impact in
          the fight against the climate
        </p>
      </div>
    </>
  );
}
