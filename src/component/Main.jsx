import React from "react";
import Body from "./body/Body";
import Header from "./header/Header";
import Leftbar from "./sidebar/Leftbar";
import Rightbar from "./sidebar/Rightbar";

export default function Main() {
  return (
    <div className="entirePage">
      <div>
        <Header />
      </div>
      <div className="middleOne">
        <div>
          <Leftbar />
          <Body />
          <Rightbar />
        </div>
      </div>
    </div>
  );
}
