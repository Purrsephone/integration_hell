import React, {useState} from "react";
import "./Styles.css";
import Hightlight_Test from "./Highlighter";

function DisplayFollow(props) {
  var message = "this is follow";
  var header = "Follow";
  return (
    <div class="about-text">
      <h3>{header}</h3>
      <p>
        <Hightlight_Test text={message}/>
      </p>
    </div>
  );
}

export default DisplayFollow;