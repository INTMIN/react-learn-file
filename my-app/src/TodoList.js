 import React, { Component, Fragment } from 'react';
 import './style.css';
 import TodoItem from "./TodoLitem";
 import Test from "./Test";
//  可以直接引入

 class TodoList extends Component {

    constructor(props) {
        super(props);
        // 当组件的state或者props发生改变的时候，render函数就会重新执行
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handLeItemDelete = this.handLeItemDelete.bind(this);
    }
    
    render() {
        console.log('render');
        return (
            <Fragment>
              <div>
                <label htmlFor="insterArea">输入内容</label>
                {/* 光标聚焦 */}
                <input 
                  id="insterArea"
                  className='input'
                  value = {this.state.inputValue}
                  onChange = {this.handleInputChange}
                />
                {/* 事件绑定 onChange*/}
                <button onClick ={this.handleBtnClick}>提交</button>
                {
                    // onClick事件绑定 
                }
            </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
                <Test content={this.state.inputValue}/>
            </Fragment>
        )
    }
    // 代码拆分
    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem 
                    key={item}
                    content={item} 
                    index={index}
                    deleteItem={this.handLeItemDelete}
                />
            )
        })
    }
    handleInputChange(e) {
        const value = e.target.value;
        // console.log(e.target.value);
        this.setState(() => ({
            inputValue: value
        }))
    }
    handleBtnClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],//     展开运算符...
            inputValue: ''
        }))     
    }
    handLeItemDelete(index) {
        // immutable
        // react里面state 不允许我们做任何改变，只能拷贝出来修改       
        this.setState((prevState) => {
            const list = [...prevState.list]; 
            list.splice(index, 1);// 把数组拷贝到list里面
            return {list}
        });
    }
}
export default TodoList;