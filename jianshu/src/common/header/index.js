import React, {Component} from 'react';
import  CSSTransition from 'react-transition-group/CSSTransition';
// 官方文档写错了这里不需要加{}所以导致的错误
import {connect} from 'react-redux';
import  { actionCreators } from './store';
import { 
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfolist
} from './style';

class Header extends Component {

    getListArea() {
        const {focused, list} = this.props;
        if(focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfolist>
                        {
                            list.map((item) => {
                                return<SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        }
                    </SearchInfolist>
                </SearchInfo>
            )
        }else {
            return null;
        }
    }
    render() {
        const {focused, handleInputBlur, handleInputFocus} = this.props;
        return(
            <HeaderWrapper>
                <Logo />
                    <Nav>
                        <NavItem className='left active'>首页</NavItem>
                        <NavItem className='left'>下载app</NavItem>
                        <NavItem className='right'>登陆</NavItem>
                        <NavItem className='right'>
                            <i className="iconfont">&#xe636;</i>
                        </NavItem>
                        <SearchWrapper>
                    <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                        <NavSearch
                            className={focused ? 'focused' : ''}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                        <i className={focused ? 'focused iconfont' : 'iconfont'}>
                            &#xe6cf;
                        </i>
                        {this.getListArea()}
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Button className='writing'>
                        <i className="iconfont">&#xe608;</i>
                        写文章
                        </Button>     
                        <Button className='reg'>注册</Button> 
                </Addition>
            </HeaderWrapper>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header','focused']),
        list: state.getIn(['header', 'list'])
        // 等同于state.get('header').get('focused')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);