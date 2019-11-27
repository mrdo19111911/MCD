import React, { Component } from "react";
import { List, Avatar, Rate } from "antd";
import {Link} from 'react-router-dom';
import "antd/dist/antd.css";
class ListItemMeta extends Component {
  render() {
    const { item, MyIcon } = this.props;

    return (
      <List.Item.Meta
        style={{ alignItems: "center" }}
        avatar={
          <Avatar shape="square" size="large" src={item.thayboi.avatar} />
        }
        title={
          // <Link to='/user'>{item.thayboi.name}</Link>
          <span>{item.thayboi.name}</span>
        }
        description={
          <div>
            <Rate style={{fontSize:15}}
              defaultValue={item.avgStar}
              disabled
              character={<MyIcon type="icon-star1" />}
            />
            {this.props.total ? <span style={{ marginLeft: 10 }}>({item.total} đánh giá)</span> : ''}
          </div>
        }
      />
    );
  }
}

export default ListItemMeta;
