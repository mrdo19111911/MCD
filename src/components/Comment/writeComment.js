import React, { Component } from "react";
import "antd/dist/antd.css";
import { Comment, Avatar, List, Input } from "antd";
import moment from "moment";
class writeComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      value: ""
    };
  }
  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }
    this.setState({
      submitting: false,
      value: "",
      comments: [
        {
          author: "Han Solo",
          avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content: <p>{this.state.value}</p>,
          datetime: moment().fromNow()
        },
        ...this.state.comments
      ]
    });
    console.log(this.state.comments);
  };
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    const CommentList = ({ comments }) => (
      <List
        dataSource={comments}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
      />
    );

    const { comments, value } = this.state;
    return (
      <Comment
       className='write-comment'
        avatar={
          <Avatar
            icon='user'
            alt="Han Solo"
          />
        }
        content={
          <Input
          
            placeholder="Viết Đánh Giá"
            autoSize
            onChange={this.handleChange}
            value={value}
            onPressEnter={this.handleSubmit}
          />
        }
      />
    );
  }
}

export default writeComment;
