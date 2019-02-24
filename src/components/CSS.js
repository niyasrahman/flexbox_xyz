import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./css.scss";
class CSS extends React.Component {
  state = {
    value: "",
    copied: false
  };

  render() {
    var { value } = this.props;

    return (
      <div className="css__container">
        <div className="css__wrapper">
          <span>
            <code className="css">{JSON.stringify(value)}</code>
          </span>
          <CopyToClipboard
            text={JSON.stringify(value)}
            onCopy={() => this.setState({ copied: true })}
          >
            <button className="copy_buton">Copy</button>
          </CopyToClipboard>

          {this.state.copied ? (
            <span className="copy_status" style={{ color: "red" }}>
              Copied.
            </span>
          ) : null}
        </div>
      </div>
    );
  }
}

export default CSS;
