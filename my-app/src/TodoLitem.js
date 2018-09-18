import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{

    constructor(props){       
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.content !== this.props.content){
            return true;
        }else{
            return false;
        }
    }
    render() {
        console.log('child render');
        const {content, test} = this.props;
        // 顺序是JSX -> 通过底层creatElement方法-> 生成JS对象也就是虚拟DOM -> 再生成真实DOM
        return (
        <div onClick={this.handleClick}>
            {test} - {content}
        </div>
        )
    }
    handleClick() {
        const {deleteItem, index} = this.props
        deleteItem(index);
    }
    // 当一个组件要从父组件接收参数
    // 如果这个组件第一次存在于父组件中，它不会被执行
    // 如果这个组件之前存在已经存在于父组件中，才会执行
    componentWillReceiveProps() {
        console.log('child componentWillReceiveProps');
    }

    // 当这个组件即将被从页面上剔除的时候，就会被执行
    componentWillUnmount() {
        console.log('child componentWillUnmount');
    }
}
// 类型校验
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}
// 默认值的设置
TodoItem.defaultProps = {
    test: 'MIN数据'
}

export default TodoItem;