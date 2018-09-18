 import React, { Component, Fragment } from 'react';
 import TodoItem from './TodoLitem';
 import axios from 'axios';
 import './style.css';
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
    // 在组件即将被挂载到页面的时候自动执行，只执行一次
    // componentWillMount(){
    //     console.log('componentWillMount');
    // }
    
    render() {
        console.log('parent render');
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
            </Fragment>
        )
    }
    // 组件被挂载到页面之后，自动被执行，只执行一次
    // 一般Ajax请求就放到componentDidMount里面
    componentDidMount() {
        axios.get('/api/todolist')
        .then((res) => {
            console.log(res.data);
            this.setState(() => ({
                list: [...res.data]
            }));
        })
        .catch(() => {alert('err')})
        // console.log('componentDidMount');
    }

    // 组件被更新之前，它会自动被执行
    // shouldComponentUpdate() {
    //     console.log('shouldComponentUpdate');
    //     return true;
    // }

    // 组件被更新之前，它会自动被执行,但是他在shouldComponentUpdate只会执行
    // 只有shouldComponentUpdata返回true才执行
    // componentWillUpdate() {
    //     console.log('componentWillUpdate');
    // }

    // 组件更新完成后，才会被执行
    // componentDidUpdate() {
    //     console.log('componentDidUpdate');
    // }


    // componentWillReceiveProps() {
    //     console.log('componentWillReceiveProps');
    // }

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