 import React, { Component, Fragment } from 'react';

 class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['学习代码','学习react']
        }
    }
    
    render() {
        return (
            <Fragment>
            <div>
                <input value = {this.state.inputValue}
                onChange = {this.handleInputChange.bind(this)}
                />
                {/* 事件绑定 onChange*/}
                <button onClick ={this.handleBtnClick.bind(this)}>提交</button>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li 
                                key={index} onClick={this.handLeItemDelet.bind(this, index)}
                                >
                                {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            </Fragment>
        )
    }
    handleInputChange(e) {
        // console.log(e.target.value);
        this.setState({
            inputValue: e.target.value
        })
    }
    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue]
            // 展开运算符...
        })
    }
    handLeItemDelet(index) {
        // immutable
        // react里面state 不允许我们做任何改变，只能拷贝出来修改
        const list = [...this.state.list];
        // 把数组拷贝到list里面
        list.splice(index, 1);
        
        this.setState({
            list: list
        })
        console.log(index);
    }
}
export default TodoList;