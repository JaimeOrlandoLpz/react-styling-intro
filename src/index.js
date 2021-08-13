import React from "react";
import ReactDOM from "react-dom";

const yonahPicSrc =
  "https://static.wikia.nocookie.net/nier/images/f/fc/Project_Gestalt_Report_11242_New.png";
const devolaAndPopolaPicSrc =
  "https://cdnb.artstation.com/p/assets/images/images/009/133/185/medium/alexandr-ugryumov-1-2.jpg?1517577325";
const ninesand2bPicSrc =
  "https://images8.alphacoders.com/922/thumb-1920-922064.jpg";
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Mystery
    </h1>
    <div>
      <img alt="yonah" src={yonahPicSrc} />
      <img alt="devola" src={devolaAndPopolaPicSrc} />
      <img alt="2b" src={ninesand2bPicSrc} />
    </div>
  </div>,
  document.getElementById("root")
);
