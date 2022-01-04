import React, { Component } from "react";
import Box from "./Box.js";
import "./BoxContainer.css";

class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 18,
    allColors: [
      "purple",
      "blueViolet",
      "darkOrchid",
      "aquamarine",
      "cadetBlue",
      "cornflowerBlue",
      "darkSlateBlue",
      "lightGreen",
      "mediumSeaGreen",
      "orange",
      "orangeRed",
      "slateBlue",
      "teal",
      "yellow",
      "yellowGreen",
      "tomato",
      "maroon",
    ],
  };

  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box colors={this.props.allColors} />
    ));
    return <div className="BoxContainer">{boxes}</div>;
  }
}

export default BoxContainer;
