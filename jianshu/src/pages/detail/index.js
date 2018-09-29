import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper, Header, Content } from './style';
import {actionCreators } from './store';

class Detail extends Component {
    render(){
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html:this.props.content}} />
            </DetailWrapper>
        )
    }
    componentDidMount(){
        this.props.getDetail();
    }
}

const mapStateToProps = (state) => ({
    title:state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
});

const mapDispatchToProps = (dispatch) => ({
    getDetail() {
        dispatch(actionCreators.getDetail())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail) ;