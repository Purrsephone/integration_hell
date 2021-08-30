import React, {useState} from "react";
import "./Styles.css";
import Hightlight_Test from "./Highlighter";

function Home(props) {
  var string = "Explore your Spotify data by clicking on the tabs.";
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>
              <Hightlight_Test text={string}/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;