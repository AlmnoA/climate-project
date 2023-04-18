import "../style.css";
import ad1 from "../images/LDF-ComicSans/comic sans.png";
import xbtn from "../images/Delete-Red-X-Button-PNG-Free-Download.png";
export default function Advertisement() {
  function RemoveAd(){
console.log('yooo')
  }
  return (
      <div className="ad-deco">
        <img src={xbtn}onClick={RemoveAd()}alt="Download comic sans today!"></img>
      </div>
  );
}
