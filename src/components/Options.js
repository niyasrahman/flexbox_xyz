import React, { Component } from "react";
import "./Options.scss";
const Input = ({ value, type, update }) => {
  return (
    <div className="option__input">
      <input
        onChange={update}
        type="radio"
        id={value}
        value={value}
        name={type}
      />
      <label htmlFor={value}>{value}</label>
    </div>
  );
};

const Option = ({ item, type, update }) => {
  return (
    <div className="option__single">
      <h3 className="option__title">{type}</h3>
      {item.map((post, i) => (
        <Input update={update} type={type} key={i} value={post} />
      ))}
    </div>
  );
};

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, attr } = this.props;
    return (
      <div className="option__wrapper">
        <div className="option__container">
          <Option
            update={this.props.OnChangeofInput}
            type="DIRECTION"
            item={attr.DIRECTION}
          />
          <Option
            update={this.props.OnChangeofInput}
            type="JUSTIFYCONTENT"
            item={attr.JUSTIFYCONTENT}
          />
          <Option
            update={this.props.OnChangeofInput}
            type="ALIGNITEMS"
            item={attr.ALIGNITEMS}
          />
          <Option
            update={this.props.OnChangeofInput}
            type="ALIGNCONTENT"
            item={attr.ALIGNCONTENT}
          />
          <Option
            update={this.props.OnChangeofInput}
            type="FLEXWRAP"
            item={attr.FLEXWRAP}
          />
        </div>
      </div>
    );
  }
}

export default Options;
