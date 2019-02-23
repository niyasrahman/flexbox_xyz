import React from "react";
import "./ShowGrid.scss";
export default class ShowGrid extends React.Component {
  createTable = () => {
    let table = [];

    for (let i = 0; i < this.props.count; i++) {
      table.push(
        <div key={i} className="item__single">
          {i + 1}
        </div>
      );
    }
    return table;
  };
  render() {
    return (
      <div style={this.props.style} className="item__container">
        {this.createTable()}
      </div>
    );
  }
}
