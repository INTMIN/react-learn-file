import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style1.css';
// 上面的那个等价于
// import React from 'react'
// const Component = React.Component

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
        this.handleAddItem = this.handleAddItem.bind(this);
    }
    
  render() {
    return (
        <Fragment>
          {/* <CSSTransitionGroup> */}
            {
                this.state.list.map((item, index) => {
                    return (
                        <CSSTransition
                            timeout={1000}
                            classNames='fade'
                            unmountOnExit
                            onEntered={(el) => {el.style.color='blue'}}
                            appear={true}
                            key={index}
                        >
                            <div>{item}</div>
                        </CSSTransition>
                    )  
                })
            }
            <button onClick={this.handleAddItem}>toggle</button>
            {/* </CSSTransitionGroup> */}
      </Fragment>
    )
  }
  handleAddItem() {
      this.setState((prevState) => {
          return{
            list: [...prevState.list, 'item']
        }    
      })
  }
}

export default App;
