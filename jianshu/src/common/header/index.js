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
        const {focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;
        const newList = list.toJS();
        const pageList = [];


        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                // console.log(newList[i]);
                pageList.push(
                <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch 
                            onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
                        >
                            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin" style={{"transform": "rotate(0deg)"}}>&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfolist>
                        {pageList}
                    </SearchInfolist>
                </SearchInfo>
            )
        }else {
            return null;
        }
    }
    render() {
        const {focused, handleInputBlur, handleInputFocus, list} = this.props;
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
                            onFocus={() => handleInputFocus(list)}
                            onBlur={handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
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
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            if (list.size === 0) {
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalpage, spin) {
            // spin.style.transform = 'rotate(360deg)';
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10); 
            }else {
                originAngle = 0;
            }
            console.log(originAngle);
        
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            // console.log(spin.style.transform);
            // console.log(spin);


            if (page < totalpage) {
                dispatch(actionCreators.changePage(page + 1));
            }else {
                dispatch(actionCreators.changePage(1));
            }
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);