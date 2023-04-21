import Title from "./Components/Nav";
import React from "react";
import img1 from "./images/A091-funerals-death-care-sustainability-scaled.jpg";
import img2 from "./images/wario.png"
export default function Wario() {
  return (
    <>
      <Title />
      <div className="Article-Itself">
        <h1>Wario Dead</h1>
        <img src={img1} />
        <p>
          Wario is a Man everyone knows from his contributions to the field of
          taxation and dinosaurology. The Owner of multiple quadrillion dollar
          companies like Wario Tax LLC. INC. and Wario Wares. His ability to
          innovate has inspired all of us to become better people and better
          thinkers. His climate first mentality allowed him to reduce his carbon
          footprint by up to, 920%. With his contributions to society, Wario was
          a great man.
        </p>
        <img src={img2} />
        <p>
          After years of Warios contribution to the fight for the climate,
          Wario, a man loved by the world itself, was declared dead this morning
          due to complication with dinosaur fever. It's said that he died
          peacefully with his pet T. rex, who is expected to take over both of
          Warios Companies, came out today and said, "although he's no longer
          with us, his respect for everyone and the climate has touched all our
          hearts. I will live up to my owner's expectations and run his
          companies to serve his long term goals." His funeral was supposed to
          be held in three days time, but his will stated it must happen on the
          day of his death. Despite the short notice, many famous people and
          leaders attended his funeral like clone of Joe Biden, Joe Biden 2
          where he made it his mission to reduce and reuse rather than recycle.{" "}
        </p>
      </div>
    </>
  );
}
