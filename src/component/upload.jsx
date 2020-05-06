import React from "react";
import { DatePicker } from "antd";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
class Upload extends React.Component {
  handleClick() {
    history.push("/start");
  }
  render() {
    return <div>
      <div onClick={this.handleClick}>跳到start</div>
      <DatePicker />
    </div>;
  }
}

export default Upload;