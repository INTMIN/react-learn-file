import React, { useState } from "react";
import Swiper from "react-id-swiper";
import SoundPlay from "src/components/SoundPlay";
// import "swiper/swiper.less";
import "./index.less";

const SoundSwiper = (props) => {
  const [nowPlay, setnowPlay] = useState("");
  const data = [
    "https://mus933.mp3",
    "https://mu455.mp3",
    "https://mus014.mp3",
    "https://m589.mp3",
    "https://mu0589.mp3",
    "https://mu665933.mp3",
    "https://mus0755.mp3",
    "https://mu9995372.mp3",
    "https://m0.mp3",
  ];

  const changeNow = (newPlay) => {
    setnowPlay(newPlay);
  };

  return (
    <div>
      <Swiper slidesPerView={6}>
        {data.map((item) => (
          <div key={item} style={{ height: 190 }}>
            <img
              style={{ height: 100 }}
              src=""
              alt=""
            />
            <SoundPlay src={item} nowPlay={nowPlay} handleChange={changeNow} />
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default SoundSwiper;
