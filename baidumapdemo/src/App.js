import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    // console.log(window)
    // const {BMap,BMAP_STATUS_SUCCESS}=window
    const {BMap}=window;
    let map = new BMap.Map('allmap');
    map.centerAndZoom(new BMap.Point(121.479246,31.239016),12);
    // 初始化地图,设置中心点坐标和地图级别

    let p1=new BMap.Point(121.481941,31.234308);
    let p2 = new BMap.Point(121.506375,31.244636);

    let driving = new BMap.DrivingRoute(map,{renderOptions:{map:map,autoViewport:true}})
    driving.search(p1,p2);
    map.enableScrollWheelZoom(true);
    // 覆盖区域图层测试
    // map.addTileLayer(new BMap.PanoramaCoverageLayer());

    let stCtrl = new BMap.PanoramaControl(); //构造全景控件
    stCtrl.setOffset(new BMap.Size(20, 20));
    map.addControl(stCtrl);//添加全景控件
  }

  render() {
    return (
      <div className="App">
        <p>在地图上添加全景空间，点击全景空间进入全景图</p>
        <div id='allmap' style={{position: 'absolute',top:0,left:0,width:'100vw',height:'100vh'}}></div>
      </div>
    );
  }
}

export default App;
