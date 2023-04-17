import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Title from "./Components/Nav";
import Article from "./Components/Articles";
import Opinion from "./Components/Opinion";
import Advertisement from "./Components/ad";



import pic1 from "./images/A091-funerals-death-care-sustainability-scaled.jpg";
import pic2 from "./images/hey-vsauce-michael-fab562e778.jpg";
import pic3 from "./images/Trex.jpg";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Title />
    <div className="main-grid">
      <div>
        <Article
          author="Roeth"
          title="Wario found dead"
          Image={pic1}
          alt="his crimes"
          disc="Today, a man by the Name of Wario(34 M) founder of Wario Tax LLC. Inc. was found dead. officals have declared it was a heart attack."
        />
        <Article
          author="V. Sauce"
          title="Are People Getting Hotter?"
          Image={pic2}
          alt="his crimes"
          disc="No :("
        />
        <Article
          author="E-rex"
          title="How Bringing Back Dinosaurs Fixed the Climate Crisis: A Retrospective"
          Image={pic3}
          alt="Famous T-rex Martha"
          disc="In 2029 a team located in South America brought the Mammoth back."
        />
        <Article
          author="Xander Mooney"
          title="Is Anmol Going To Far?"
          Image={pic1}
          alt="his crimes"
          disc="In 2023 he did this but today?"
        />
      </div>
      <div className="opinion-articles">
        <div>
          <Opinion author="Horge" title="The climate is overrated" />
        <Opinion author="Mister White" title="Should drugs be legalized?" />
        <Opinion
          author="Gru"
          title="Why privatization of the moon will cure cancer"
        />
        <Opinion
          author="Crouton"
          title="Joe Climate is a criminal and should be deplatformed"
        />
        
        </div>
        <Advertisement />
      </div>
    </div>
  </>
);
