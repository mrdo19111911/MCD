import React, { Component } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Col, Popover, Button, Row, Modal, Form, Icon, Input } from "antd";
class SubHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      visible1: false,
      popover: false
    };
  }
  showModalLogin = () => {
    this.setState({
      visible: false,
      visible1: true,
      popover: false
    });
  };
  showModalRegister = () => {
    this.setState({
      visible: false,
      visible1: true,
      popover: false
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible1: false
    });
  };

  hide = () => {
    this.setState({
      visible: false
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };
  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Xác nhận mật khẩu không chính xác!");
    } else {
      callback();
    }
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const MyIcon = Icon.createFromIconfontCN({
      scriptUrl: "//at.alicdn.com/t/font_1518635_eww5a8a92zm.js"
    });
    return (
      <Row type="flex" justify="end">
        <Col className="subheader">
          <Popover
            content={
              <div className="notification">
                <Button type="primary" onClick={this.showModalRegister}>
                  Đăng Ký
                </Button>
                <Button type="primary" onClick={this.showModalLogin}>
                  Đăng Nhập
                </Button>
              </div>
            }
            title="Đăng Nhập Để Xem Thông Báo"
            visible={this.state.visible}
            onVisibleChange={this.handleVisibleChange}
          >
            <Button type="link" ghost icon="bell">
              Thông Báo
            </Button>
          </Popover>
          ;
          <Link to="/help">
            <Button type="link" icon="question-circle" ghost>
              Trợ Giúp
            </Button>
          </Link>
          <Button type="link" ghost onClick={this.showModalRegister}>
            Đăng Ký
          </Button>
          <Button type="link" ghost onClick={this.showModalLogin}>
            Đăng Nhập
          </Button>
          <Modal
            title="Đăng Nhập"
            footer={null}
            visible={this.state.visible1}
            onCancel={this.handleCancel}
          >
            <Form layout="vertical">
              <Form.Item label="Tên đăng nhập" hasFeedback>
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
              <Form.Item label="Mật Khẩu" hasFeedback>
                {getFieldDecorator("password", {
                  rules: [
                    {
                      required: true,
                      message: "Mật khẩu không được để trống!"
                    }
                  ]
                })(
                  <Input.Password
                    prefix={<Icon type="lock" />}
                    placeholder="Mật Khẩu"
                  />
                )}
              </Form.Item>

              <Row gutter={[{ md: 10 }]}>
                <Col md={12}>
                  <Button size="large" className="loginFacebook">
                    <Link to="/facebook">
                      <MyIcon type="icon-facebook" />
                      <span>Facebook</span>
                    </Link>
                  </Button>
                </Col>
                <Col md={12}>
                  <Button size="large" className="loginGoogle">
                    <Link to="/google">
                      <MyIcon type="icon-googleplus" />
                      <span>Google</span>
                    </Link>
                  </Button>
                </Col>
              </Row>
            </Form>
          </Modal>
          {/* Modal đăng kí */}
          <Modal
            title="Đăng Ký"
            footer={null}
            visible={this.state.visible1}
            onCancel={this.handleCancel}
          >
            <Form layout="vertical">
              <Form.Item label="Họ Và Tên" hasFeedback>
                {getFieldDecorator("username", {
                  rules: [
                    {
                      required: true,
                      message: "Họ và Tên đăng nhập không được để trống!"
                    }
                  ]
                })(
                  <Input
                    prefix={<Icon type="user" />}
                    placeholder="Họ Và Tên"
                  />
                )}
              </Form.Item>
              <Form.Item label="E-mail">
                {getFieldDecorator("email", {
                  rules: [
                    {
                      type: "email",
                      message: "Địa chỉ Email không đúng định dạng!"
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(<Input prefix={<Icon type="mail" />} placeholder="Email" />)}
              </Form.Item>
              <Form.Item label="Mật Khẩu" hasFeedback>
                {getFieldDecorator("password", {
                  rules: [
                    {
                      required: true,
                      message: "Mật khẩu không được để trống!"
                    }
                  ]
                })(
                  <Input.Password
                    prefix={<Icon type="lock" />}
                    placeholder="Mật Khẩu"
                  />
                )}
              </Form.Item>
              <Form.Item label="Xác nhận mật khẩu" hasFeedback>
                {getFieldDecorator("confirm", {
                  rules: [
                    {
                      required: true,
                      message: "Mật khẩu xác nhận không được để trống!"
                    },
                    {
                      validator: this.compareToFirstPassword
                    }
                  ]
                })(
                  <Input.Password
                    prefix={<Icon type="lock" />}
                    placeholder="Xác Nhận Mật Khẩu"
                    onBlur={this.handleConfirmBlur}
                  />
                )}
              </Form.Item>
              <Row gutter={[{ md: 10 }]}>
                <Col md={12}>
                  <Button size="large" className="loginFacebook">
                    <Link to="/facebook">
                      <MyIcon type="icon-facebook" />
                      <span>Facebook</span>
                    </Link>
                  </Button>
                </Col>
                <Col md={12}>
                  <Button size="large" className="loginGoogle">
                    <Link to="/google">
                      <MyIcon type="icon-googleplus" />
                      <span>Google</span>
                    </Link>
                  </Button>
                </Col>
              </Row>
            </Form>
          </Modal>
        </Col>
      </Row>
    );
  }
}

export default Form.create({ name: "Modal_Login" })(SubHeader);
