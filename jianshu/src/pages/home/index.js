import React, { Component } from 'react';
import {connect} from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {actionCreators} from './store';
import {
    HomeWrapper, 
    HomeLeft, 
    HomeRight
} from './style' ;

class Home extends Component {
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4485/d0fb5320f8539c5c8b643fe88cbf512d1f4ced38.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540"></img>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
    }
}
const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    } 
});


export default connect(null, mapDispatch)(Home);