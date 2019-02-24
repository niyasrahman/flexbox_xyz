import React, { Component } from "react";
import "./Playground.scss";
import ShowGrid from "./ShowGrid";
import CSS from "./CSS";
import Options from "./Options";
class Playground extends Component {
  constructor(props) {
    super(props);
    this.updateChild = this.updateChild.bind(this);

    this.ChangeValue = this.ChangeValue.bind(this);
    this.state = {
      count: 8,
      DIRECTION: "row",
      JUSTIFYCONTENT: "flex-start",
      ALIGNITEMS: "stretch",
      ALIGNCONTENT: "stretch",
      FLEXWRAP: "nowrap"
    };
  }
  ChangeValue(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  updateChild(e) {
    this.setState({ count: e.target.value });
  }
  render() {
    const attr = {
      DIRECTION: ["row", "row-reverse", "column", "column-reverse"],
      JUSTIFYCONTENT: [
        "flex-start ",
        "flex-end",
        "center",
        "space-around",
        "space-between"
      ],
      ALIGNITEMS: ["stretch", "baseline", "center", "flex-start", "flex-end"],
      ALIGNCONTENT: [
        "stretch ",
        "center",
        "flex-start",
        "flex-end",
        " space-around",
        "space-between"
      ],
      FLEXWRAP: ["nowrap ", "wrap", " wrap-reverse"]
    };
    const divStyle = {
      display: " flex",
      "flex-direction": `${this.state.DIRECTION}`,
      "flex-wrap": `${this.state.FLEXWRAP}`,
      "justify-content": `${this.state.JUSTIFYCONTENT}`,
      "align-items": `${this.state.ALIGNITEMS}`,
      "align-content": `${this.state.ALIGNCONTENT}`
    };
    return (
      <>
        <ShowGrid style={divStyle} count={this.state.count} />
        <div className="dragger__container">
          <input
            onChange={this.updateChild}
            type="range"
            name="points"
            min="0"
            max="8"
          />
          <span className="dragger__text">Drag to change value</span>
        </div>
        <Options OnChangeofInput={this.ChangeValue} attr={attr} />
        <CSS value={divStyle} />
      </>
    );
  }
}

export default Playground;
