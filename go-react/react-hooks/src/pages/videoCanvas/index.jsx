import React, { useState, useEffect } from "react";
import { Col } from "antd";
import "./js/dat.gui.min.js";
import "./js/Stats.min.js";
import "./app.js";
import "./video-canvas";
import videoCanvas from "video-canvas";
import app from "./app.js";
import VideoPlayer from "./component/VideoPlayer";

const VideoCanvas = props => {
  useEffect(() => {
    const video = document.getElementById("main-video_html5_api");
    const canvas = document.querySelector("#my-canvas");
    if (video && canvas) {
      videoCanvas(video, {
        canvas: canvas
      });
      app();
    }
  }, []);
  return (
    <>
      <Col span={8} style={{ height: "70vh" }}>
        <div
          id="stats"
          style={{
            position: "relative",
            width: "100%",
            height: "80px",
            display: "none"
          }}
        ></div>
        <div>
          <VideoPlayer
            src={"https://pu1hd.m3u8" || ""}
            width={`${500}px`}
            height={`${500 * 1.5}px`}
          />
          <canvas id="my-canvas" style={{ display: "none" }}></canvas>
        </div>
      </Col>
      <Col span={8} style={{ height: "70vh" }}>
        <div title="识别关键点展示">
          <div className="canvas-wrapper">
            <canvas id="output" style={{ height: "58vh" }}></canvas>
            <video
              muted
              id="video"
              playsInline
              style={{
                display: "none"
              }}
            ></video>
          </div>
          <div id="scatter-gl-container"></div>
        </div>
      </Col>
    </>
  );
};
export default VideoCanvas;
