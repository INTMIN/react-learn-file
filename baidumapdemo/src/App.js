import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log(window)
    // const {BMap,BMAP_STATUS_SUCCESS}=window
    const {BMap}=window;
    let map = new BMap.Map('allmap');
    map.centerAndZoom(new BMap.Point(116.404,39.915),11);

    let p1=new BMap.Point(116.301934,39.977552);
    let p2 = new BMap.Point(116.508328,39.919141);

    let driving = new BMap.DrivingRoute(map,{renderOptions:{map:map,autoViewport:true}})
    driving.search(p1,p2);
    map.enableScrollWheelZoom(true);
  }

  render() {
    return (
      <div className="App">
        <div id='allmap' style={{position: 'absolute',top:0,left:0,width:'100vw',height:'100vh'}}></div>
      </div>
    );
  }
}

export default App;
