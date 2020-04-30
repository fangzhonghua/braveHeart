import React from 'react';
import { DatePicker } from 'antd';

class Upload extends React.Component {
    handleClick(){
        console.log("1121")
    }
    render(){
        return <div>
            <div onClick={this.handleClick}>qewq</div>
            <DatePicker/>
        </div>
    }
}

export default Upload;