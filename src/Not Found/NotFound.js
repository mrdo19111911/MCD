import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './css/style.less';
class NotFound extends Component {
  render() {
    return (
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>Rất tiếc! Không thể tìm thấy trang này</h2>
          
          <Link to="/">Quay lại trang chủ</Link>
        </div>
      </div>
    );
  }
}

export default NotFound;
