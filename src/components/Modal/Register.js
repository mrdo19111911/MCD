import React, { Component } from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  render() {
    return (
      <Modal
        title="Basic Modal"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    );
  }
}

export default Register;
