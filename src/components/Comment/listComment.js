import React, { Component } from "react";
import { Avatar, Comment } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import moment from "moment";
import WriteComment from "./writeComment";
import "./styles/index.less";
class ListComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: null
    };
  }

  render() {
    const actions = [
      <span key="comment-basic-reply-to">Thích</span>,
    <span key="comment-basic-reply-to">Trả Lời</span>];
    return (
      <div className="comments">
        <Comment
          className="rateCommnent"
          actions={actions}
          author={<Link to="/profile" className='user-comment'>Vũ Hồng Việt</Link>}
          avatar={
            <Avatar
              src="https://cf.shopee.vn/file/6bad0abd27728ddfbe926cee65667cf5"
              alt="Vũ Hồng Việt"
            />
          }
          content={<p>Ở đây chúng tôi không làm thế</p>}
          datetime={
            <span className='time-comment'>
              {moment()
                .subtract(1, "days")
                .fromNow()}
            </span>
          }
        >
          <Comment
            className="subCommnent"
            actions={actions}
            author={<Link to="/profile" className='user-comment'>Vũ Hồng Việt</Link>}
            avatar={
              <Avatar
                src="https://cf.shopee.vn/file/6bad0abd27728ddfbe926cee65667cf5"
                alt="Vũ Hồng Việt"
              />
            }
            content={<p>Ở đây chúng tôi không làm thế</p>}
            datetime={
              <span className='time-comment'>
                {moment()
                  .subtract(3, "hours")
                  .fromNow()}
              </span>
            }
          />
        </Comment>
        <WriteComment />
      </div>
    );
  }
}

export default ListComment;
