import React, { useState } from "react";
import "./Styles.css";

var randStr = "";
const unselectStyle = {
    color: "black",
    backgroundColor: "white"
};

const selectedStyle = {
    color: "black",
    backgroundColor: "yellow"
};

class Hightlight_Test extends React.Component {
    constructor(props) {
        super(props);
        randStr = this.props.text;

        this.state = {
            start: 0,
            end: 0,
            colorsClicked: new Array(randStr.split(" ").length).fill(false),
            draggedSelections: new Array()
        };

        this.onMouseAction = this.onMouseAction.bind(this);
    }

    onMouseAction(action, index) {
        if (action === "down") {
            this.setState({
              start: index
            });
          } else {
            let {colorsClicked, start} = this.state; // Added This
            colorsClicked = colorsClicked.map((val, i) => i >= start && i <= index ? !val : val); // Added This
            this.setState(
              {
                end: index,
                draggedSelections: [
                  ...this.state.draggedSelections,
                  [this.state.start, index]
                ],
                colorsClicked
              },
              () => {
                console.log(this.state.draggedSelections);
              }
            );
          }
    }

    render() {
        return ( 
            <div> 
                {randStr.split(" ").map((str, index) => {
                    return ( 
                            <span 
                                onMouseDown = {() => this.onMouseAction("down", index)}
                                onMouseUp = {() => this.onMouseAction("up", index)}
                                key = {index}
                                style = {this.state.colorsClicked[index] ? selectedStyle : unselectStyle}>
                                {" "} 
                                {str}
                            </span>
                        );
                    })
                }
            </div>
        );
    }
}

export default Hightlight_Test;