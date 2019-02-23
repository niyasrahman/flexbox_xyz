import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./css.scss";
class CSS extends React.Component {
  state = {
    value: "",
    copied: false
  };

  render() {
    const { value } = this.props;
    return (
      <div>
        <span>
          <code className="css">{JSON.stringify(value)}</code>
        </span>
        <CopyToClipboard
          text={JSON.stringify(value)}
          onCopy={() => this.setState({ copied: true })}
        >
          <button>Copy</button>
        </CopyToClipboard>

        {this.state.copied ? (
          <span style={{ color: "red" }}>Copied.</span>
        ) : null}
      </div>
    );
  }
}

export default CSS;
