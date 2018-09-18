import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{

    constructor(props){       
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        const {content, test} = this.props;
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
}
// 类型校验
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.number, PropTypes.string),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}
// 默认值的设置
TodoItem.defaultProps = {
    test: 'MIN数据'
}

export default TodoItem;