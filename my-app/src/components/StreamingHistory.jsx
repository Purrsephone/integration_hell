import React from "react";
import { render } from "react-dom";
import ReactFileReader from "react-file-reader";
//import TextWithHighlights from "./Highlight";
import {collapseTable} from "./CollapseTable";
import { displayStats } from "./SummaryStats";
import "./Upload.css";

var changeText = "The sky above the port was the color of television, tuned to a dead channel.";
var lenText = changeText.length;

class StreamingHistory extends React.Component {
  state = {
    jsonData: null
  };

  render() {
    return (
      <div>
        {" "}
        <br />
        <h5 className="upload_header">Upload Your Json File Here</h5>
        <ReactFileReader
          multipleFiles={false}
          fileTypes={[".json"]}
          handleFiles={this.handleFiles}
        >
        <button className="upload_button">Upload</button>
        </ReactFileReader>
        <br /> <br />
        {displayStats(this.state.jsonData)}
        <h6 className="collapseTitle">{collapseTable(this.state.jsonData, "Click to View/Hide Json File")}</h6> <br />
      </div>
    );
  }

  handleFiles = files => {
    var reader = new FileReader();
    reader.onload = e => {
      // Use reader.result
      this.setState({
        jsonData: JSON.parse(reader.result)
      });
    };
    reader.readAsText(files[0]);
  };
}

render(<StreamingHistory />, document.getElementById("root"));

export default StreamingHistory;