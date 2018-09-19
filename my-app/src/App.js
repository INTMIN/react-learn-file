import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './style1.css';
// 上面的那个等价于
// import React from 'react'
// const Component = React.Component

class App extends Component {
    constructor(props) {
        super(props);
        this.state = this.state = {
            items: ['hello', 'world', 'click', 'me']
        }
        this.handleAddItem = this.handleAddItem.bind(this);
    }
    handleAddItem() {
        const newItems = this.state.items.concat([
            prompt('Enter some text')
          ]);
          this.setState({items: newItems});
    }
    handleRemove(i) {
        let newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({items: newItems});
    }
    
    
    render() {
        const items = this.state.items.map((item, i) => (
            <CSSTransition
                key={i}
                classNames="example"
                timeout={{ enter: 500, exit: 300 }}
            >
                <div onClick={() => this.handleRemove(i)}>
                    {item}
                </div>
            </CSSTransition>
        ));
            return (
                <div>
                <button onClick={this.handleAddItem}>toggle</button>
                <TransitionGroup>
                    {items}
                </TransitionGroup>
            </div>
    )
  }
  
}

export default App;
