import React, { Component } from "react";
import { Modal, Form, Input, Icon, Row, Col, Button } from "antd";
import "antd/dist/antd.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const MyIcon = Icon.createFromIconfontCN({
        scriptUrl: "//at.alicdn.com/t/font_1518635_rfxmnfufdqa.js"
      });
    return (
      <Modal
        title="Đăng Nhập"
        visible={this.state.visible}
        // onOk={this.handleOk}
        // onCancel={this.handleCancel}
        // maskClosable
        // mask
        destroyOnClose={true}
      >
        <Form layout="vertical">
          <Form.Item label="Tên đăng nhập">
            {getFieldDecorator("username", {
              rules: [
                {
                  required: true,
                  message: "Tên đăng nhập không được để trống!"
                }
              ]
            })(
              <Input
                prefix={<Icon type="user" />}
                placeholder="Tên Đăng Nhập"
              />
            )}
          </Form.Item>
          <Form.Item label="Mật Khẩu">
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "Mật khẩu không được để trống!"
                }
              ]
            })(<Input prefix={<Icon type="lock" />} placeholder="Mật Khẩu" />)}
          </Form.Item>
          <Form.Item>
            <Row gutter={[{md:24}]} >
              <Col md={12}>
                <Button  icon={<MyIcon  type="icon-facebook" />} size='large' style={{width:'100%'}}>
                  Facebook
                </Button>
              </Col>
              <Col md={12}>
                <Button icon="download" size='large' style={{width:'100%'}}>
                  Google
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default Form.create({ name: "Modal_Login" })(Login);
