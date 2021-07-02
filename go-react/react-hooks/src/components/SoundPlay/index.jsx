import { PauseCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { Slider } from "antd";
import React, { Component } from "react";
import "./index.less";

/**
 * @description  音频播放功能
 * @author min
 * @date 2020-09-25
 * @class SoundPlay
 * @extends {Component}
 */
class SoundPlay extends Component {
  static defaultProps = {
    src: "", // 音频地址
  };

  state = {
    isCanPlay: false, // 判断音频是否加载完成
    playStatus: false, // 播放状态， true 播放中， false 暂停中，
    duration: 0, // 音频的时长
    currentDuration: 0, // 当前的播放时长
  };

  audioItem = null; // 把dom暴露给外部使用
  audio = new Audio(); // 一个音频对象
  timer = null; // 做一个滑条的防抖
  interval = null; // 定时查询播放时的当前时间

  componentDidMount() {
    this.init();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.src !== this.props.src) {
      // this.audio.pause();
      this.init(nextProps);
    }
    if (nextProps.nowPlay !== nextProps.src) {
      this.audio.pause();
      this.setState({
        playStatus: false,
      });
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    if (this.interval) {
      clearInterval(this.interval);
    }
    if (this.audio) {
      this.audio.currentTime = 0;
      this.audio.pause();
    }
  }

  // 播放音频
  play = () => {
    this.audio.play();
    this.props.handleChange(this.props.src);
    this.interval = setInterval(() => {
      const time = Math.floor(this.audio.currentTime);
      if (time < this.state.duration) {
        this.setState({
          currentDuration: time,
        });
      } else {
        // 播放结束后，直接重置播放时间，停止播放
        // Toast.info("播放完毕");
        console.log("播放完毕");
        clearInterval(this.interval);
        this.audio.currentTime = 0;
        this.audio.pause();
        this.setState({
          currentDuration: 0,
          playStatus: false,
        });
      }
    }, 1000);
  };

  // 暂停音频
  pause = () => {
    this.audio.pause();
    if (this.interval) {
      clearInterval(this.interval);
    }
  };

  // 播放状态切换
  handlePlayStatusChange = () => {
    const { playStatus, isCanPlay } = this.state;
    // 由于ios中不会预加载音频资源，所以只好去掉加载状态的判断，如果有好的建议也可以提
    // if(!isCanPlay) {
    //   Toast.info('音频还没加载完呢~');
    //   return;
    // }
    if (!playStatus) {
      this.play();
    } else {
      this.pause();
    }
    this.setState({
      playStatus: !playStatus,
    });
  };

  handleSilderChange = (value) => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    // 0.2s之内没有改动就修改当前的时间，做一个播放的防抖
    this.timer = setTimeout(() => {
      this.pause();
      this.audio.currentTime = value;
      this.setState(
        {
          currentDuration: value,
        },
        () => {
          if (this.state.playStatus) {
            this.play();
          }
        }
      );
    }, 200);
  };

  // 根据秒数，返回对应的xx:xx的时间格式
  getDurationString = (number) => {
    let num = Number(number);
    if (isNaN(num) || num <= 0) {
      return "00:00";
    }
    if (num === Infinity) {
      return "00:00";
    }
    if (num < 60) {
      return `00:${num.toString().padStart(2, 0)}`;
    } else if (num < 3600) {
      const minute = Math.floor(num / 60);
      const second = num % 60;
      return `${minute.toString().padStart(2, 0)}:${second
        .toString()
        .padStart(2, 0)}`;
    } else {
      const hour = Math.floor(num / 3600);
      const minute = Math.floor((num - hour * 3600) / 60);
      const second = num - hour * 3600 - minute * 60;
      return `${hour.toString().padStart(2, 0)}:${minute
        .toString()
        .padStart(2, 0)}:${second.toString().padStart(2, 0)}`;
    }
  };

  init = (props) => {
    // console.log(props);
    const { src } = props || this.props;
    if (!src) {
      return;
    }
    this.audio.preload = "automatic";
    this.audio.src = src;
    this.audio.load();
    // this.audio.src = '';
    // 监听音频的时长是否获取到了
    this.audio.ondurationchange = () => {
      const duration = Math.floor(this.audio.duration);
      this.setState({
        duration,
      });
    };
    // 监听音频是否可以播放了
    this.audio.oncanplay = () => {
      const duration = Math.floor(this.audio.duration);
      this.setState({
        duration,
        isCanPlay: true,
      });
    };
  };

  render() {
    const { playStatus, duration, currentDuration } = this.state;
    // const btn_img = playStatus ? icon_pause : icon_play;
    const btn_img = playStatus ? (
      <PauseCircleOutlined />
    ) : (
      <PlayCircleOutlined />
    );

    const durationStr = this.getDurationString(duration);
    const currentDurationStr = this.getDurationString(currentDuration);
    return (
      <div
        className="AudioItem"
        ref={(audioItem) => (this.audioItem = audioItem)}
      >
        <div className="audio-item">
          {/* 播放按钮 */}
          <div className="audio-item-btn" onClick={this.handlePlayStatusChange}>
            {/* <img src={btn_img} alt="icon" /> */}
            {btn_img}
          </div>
          <div className="audio-item-content">
            <div className="audio-item-top">
              {/* 播放中的动画 */}
              <div className={`audio-item-bars ${playStatus ? "animate" : ""}`}>
                <div className="audio-item-bar"></div>
                <div className="audio-item-bar"></div>
                <div className="audio-item-bar"></div>
                <div className="audio-item-bar"></div>
                <div className="audio-item-bar"></div>
              </div>
              {/* 播放的时长 */}
              <div className="audio-item-range">
                <div className="audio-item-current">{currentDurationStr}</div>
                <div className="audio-item-duration">{durationStr}</div>
              </div>
            </div>
            <div className="audio-item-bottom">
              <Slider
                trackStyle={{
                  height: "0.13rem",
                  backgroundColor: "#10C0DC",
                  borderRadius: "0.07rem 0 0 0.07rem",
                }}
                railStyle={{
                  height: "0.13rem",
                  backgroundColor: "#DEEAEC",
                  borderRadius: "0 0.07rem 0.07rem 0",
                }}
                handleStyle={{
                  width: "0.32rem",
                  height: "0.32rem",
                  border: "none",
                  marginTop: "-0.1rem",
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  boxShadow:
                    "0.08rem 0.08rem 0.21rem rgba(140, 181, 187, 0.3), -0.08rem -0.08rem 0.21rem rgba(140, 181, 187, 0.3)",
                }}
                style={{ marginLeft: "0.34rem", marginRight: 0 }}
                value={currentDuration}
                min={0}
                max={duration}
                onChange={this.handleSilderChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SoundPlay;
