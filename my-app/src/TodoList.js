 import React, { Component, Fragment } from 'react';
 import './style.css';
 import TodoItem from "./TodoLitem";
//  可以直接引入

 class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }
    
    render() {
        return (
            <Fragment>
              <div>
                <label htmlFor="insterArea">输入内容</label>
                {/* 光标聚焦 */}
                <input 
                  id="insterArea"
                  className='input'
                  value = {this.state.inputValue}
                  onChange = {this.handleInputChange.bind(this)}
                />
                {/* 事件绑定 onChange*/}
                <button onClick ={this.handleBtnClick.bind(this)}>提交</button>
                {
                    // onClick事件绑定 
                }
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <div>
                                {
                                    //  父组件通过属性向子组件传递内容 
                                }
                                <TodoItem 
                                    content={item} 
                                    index={index}
                                    deleteItem={this.handLeItemDelete.bind(this)}
                                />
                                {/* <li 
                                key={index} 
                                onClick={this.handLeItemDelet.bind(this, index)}
                                dangerouslySetInnerHTML={{__html:item}}
                                // 不转译 dangerouslySetInnerHTML={{__html:item}}
                                >
                                </li> */}
                                </div>
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
    handLeItemDelete(index) {
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