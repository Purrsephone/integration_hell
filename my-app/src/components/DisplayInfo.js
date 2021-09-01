import React, {useState} from "react";
import "./Styles.css";


function DisplayInfo(props) {
  var message = props.text;
  var header = props.header;
  return (
    <div class="about-text">
      <h3>{header}</h3>
      <p>
        {message}
      </p>
    </div>
  );
}

export default DisplayInfo;
