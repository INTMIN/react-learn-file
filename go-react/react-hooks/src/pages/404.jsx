import { Button } from "antd";
import React, { Component } from "react";
import { history } from "umi";

export default class NotFound extends Component {
  render() {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          textAlign: "center",
          paddingTop: "30vh",
        }}
      >
        <div>您访问的界面不存在</div>
        <Button type="link" onClick={() => history.push("/login")}>
          返回主页
        </Button>
      </div>
    );
  }
}
