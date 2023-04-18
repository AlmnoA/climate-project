import React from "react";
import Title from "./Components/Nav";
import Article from "./Components/Articles";
import Opinion from "./Components/Opinion";
import Advertisement from "./Components/ad";
import "./style.css";

import pic1 from "./images/A091-funerals-death-care-sustainability-scaled.jpg";
import pic2 from "./images/kaboom.jpg";
import pic3 from "./images/Trex.jpg";
import pic4 from "./images/energy.jpg";

export default function Home(){
    return(
<>
    <Title />
    <div className="main-grid">
      <div>
        <div>
        <Article
          author="Roeth"
          title="Wario Found Dead"
          Image={pic1}
          alt="his crimes"
          disc=" Wario(53) founder of Wario Tax LLC. Inc. was found dead last night."
        />
        </div>
        <div>
        <Article
          author="V. Sauce"
          title="How can you help the Climate?"
          Image={pic2}
          alt="his crimes"
          disc="You can't :)"
        />
        </div>
        <div>
        <Article
          author="E-rex"
          title="How Bringing Back Dinosaurs Fixed the Climate Crisis: A Retrospective"
          Image={pic3}
          alt="Famous T-rex Martha"
          disc="In 2029 a team located in South America brought the Mammoth back."
        />
        </div>
        <div>
        <Article
          author="Joe Climate"
          title="Nuclear Energy and You"
          Image={pic4}
          alt="his crimes"
          disc="Nuclear energy is one of the most clean energy sources our society uses."
        />
        </div>
      </div>
      <div className="opinion-articles">
        <div>
          <Opinion author="Nocli Mate" title="The Climate is Doomed" />
          <Opinion author="Fingle Berry JR." title="Recycling Has Failed" />
          <Opinion author="Mr.Sun" title="Solar power is very cool" />
          <Opinion
            author="Procli Mate"
            title="The Climate can Still be Saved"
          />
        </div>
        <Advertisement />
      </div>
    </div>
  </>)}