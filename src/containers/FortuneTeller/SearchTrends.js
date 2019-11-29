// import React, { Component } from "react";
// import "antd/dist/antd.css";
// import { Row, Col, Avatar } from "antd";
// import trend1 from "../../images/trend1.jpg";
// class SearchTrends extends Component {
//   render() {
//     return (
//       <Row style={{ height: 153 }}>
//            <h3 className="famousTitle">Xu hướng tìm kiếm</h3>
//         <Col md={3}>
//           <div className='searchLeft'>
//             <Avatar shape="square" size={96} src={trend1} />
//             <h4>Tử Vi</h4>
//             <span>900 lượt tìm kiếm</span>
//           </div>
//         </Col>
//         <Col md={21} style={{ height: "100%" }}>
//           <div className="searchRight">
//             <Row>
//               <Col md={6}>
//                 <Avatar shape="square" type="user" size={64} />
//               </Col>
//               <Col md={6}>
//                 <Avatar shape="square" type="user" size={64} />
//               </Col>
//               <Col md={6}>
//                 <Avatar shape="square" type="user" size={64} />
//               </Col>
//               <Col md={6}>
//                 <Avatar shape="square" type="user" size={64} />
//               </Col>
//             </Row>
//             <Row>
//               <Col md={6}>
//                 <Avatar shape="square" type="user" size={64} />
//               </Col>
//               <Col md={6}>
//                 <Avatar shape="square" type="user" size={64} />
//               </Col>
//               <Col md={6}>
//                 <Avatar shape="square" type="user" size={64} />
//               </Col>
//               <Col md={6}>
//                 <Avatar shape="square" type="user" size={64} />
//               </Col>
//             </Row>
//           </div>
//         </Col>
//       </Row>
//     );
//   }
// }

// export default SearchTrends;
import React, { Component } from "react";
import 'antd/dist/antd.css';
import {Row,Col,Menu} from 'antd';
class SearchTrends extends Component {
  render() {
    return (
      <div>
        <h3 className="famousTitle">Xu hướng tìm kiếm</h3>
        <Row>
            <Menu mode='horizontal'>
               <Menu.Item>Tử Vi</Menu.Item>
            </Menu>
        </Row>
      </div>
    );
  }
}

export default SearchTrends;
