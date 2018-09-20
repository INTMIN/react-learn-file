import React, { Component } from 'react'
import 'antd/dist/antd.css';
import store from './store';
import { initListAction, getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators';
import TodoListUI from './TodoListUI';
import axios from 'axios';



    class TodoList extends Component {
        constructor(props) {
            super(props);
            this.state = store.getState();
            this.handleInputChange = this.handleInputChange.bind(this);
            this.handleStoreChange = this.handleStoreChange.bind(this);
            this.handleBtnClick = this.handleBtnClick.bind(this);
            this.handItemDelete = this.handItemDelete.bind(this);
            store.subscribe(this.handleStoreChange);
        }
        render() {
        return (
        <TodoListUI 
            inputValue={this.state.inputValue}
            list={this.state.list}
            handleInputChange={this.handleInputChange}
            handleBtnClick={this.handleBtnClick}
            handItemDelete={this.handItemDelete}
        />
        )
    }
    componentDidMount() {
        axios.get('/list.json').then((res) => {
            const data = res.data;
            const action = initListAction(data);
            store.dispatch(action);
        })
    }
    
    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleStoreChange() {
        this.setState(store.getState());
    }
    handleBtnClick() {
        const action = getAddItemAction();
        store.dispatch(action);
    }
    handItemDelete(index) {
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
}

export default TodoList;