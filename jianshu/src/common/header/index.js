import React from 'react';
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
    SearchWrapper
} from './style';


const Header = (props) => {
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
                    in={props.focused}
                    timeout={200}
                    classNames="slide"
                >
                <NavSearch
                    className={props.focused ? 'focused' : ''}
                    onFocus={props.handleInputFocus}
                    onBlur={props.handleInputBlur}
                ></NavSearch>
            </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>
                    &#xe6cf;
                    </i>
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
    )
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header','focused'])
        // 等同于state.get('header').get('focused')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);