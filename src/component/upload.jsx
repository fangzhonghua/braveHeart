import React from "react";
import { Upload, message, Button, DatePicker } from "antd";
class UploadPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = () => {
    location.href = "/start";
  }
  handleChange = (info) => {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    console.log("info", info);
    if (info.file.status === "done") {
      // message.success(`${info.file.name} file uploaded successfully`);

    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
  render() {
    const props = {
      name: "file",
      action: "http://localhost:8888/api/upload",
      headers: {
        authorization: "authorization-text",
      },
      multiple: true
    };
    return <div>
      <div onClick={this.handleClick}>跳到start</div>
      <DatePicker />
      <Upload {...props} onChange={this.handleChange}>
        <Button>
          Click to Upload
        </Button>
      </Upload>
      _________________________________
    </div>;
  }
}

export default UploadPage;