import React, { Component } from "react";
import Videojs from "video.js";
// import "videojs-contrib-hls";
import "video.js/dist/video-js.css";

// 使用示例
// <VideoPlayer
//   src={'http://pull-hls-f6.douyincdn.com/third/stream-109093481365373037_hd/index.m3u8'}
//   width="200"
//   height="400"
// />;

class VideoPlayer extends Component {
  componentWillUnmount() {
    // 销毁播放器
    if (this.player) {
      this.player.dispose();
    }
  }
  componentDidMount() {
    const { height, width, src } = this.props;
    this.player = Videojs(
      "main-video",
      {
        height,
        width,
        bigPlayButton: true,
        textTrackDisplay: false,
        autoplay: true,
        errorDisplay: false,
        controlBar: true,
        type: "application/x-mpegURL"
      },
      function() {
        this.play();

        // setTimeout(() => {
        //   this.pause();
        //   this.load();
        // });
      }
    );
    this.player.src({ src });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.src !== this.props.src && nextProps.src) {
      const { height, width, src } = nextProps;
      this.player = Videojs(
        "main-video",
        {
          height,
          width,
          bigPlayButton: true,
          textTrackDisplay: false,
          autoplay: true,
          errorDisplay: false,
          controlBar: true,
          type: "application/x-mpegURL"
        },
        function() {
          this.play();

          // setTimeout(() => {
          //   this.pause();
          //   this.load();
          // });
        }
      );
      this.player.src({ src });
    }
  }

  render() {
    return (
      <video
        id="main-video"
        muted
        autoPlay
        className="video-js"
        controls
        preload="auto"
      ></video>
    );
  }
}
{
  /* <video id="custom-video" muted autoPlay className="video-js" controls preload="auto"></video> */
}

export default VideoPlayer;
