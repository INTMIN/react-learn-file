import React, { Component, Fragment } from 'react';
import './style.css'
// 上面的那个等价于
// import React from 'react'
// const Component = React.Component

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
        this.handleToggole = this.handleToggole.bind(this);
    }
    
  render() {
    return (
        <Fragment>
      <div className={this.state.show ? 'show' :'hide'}>Hello React</div>
      <button onClick={this.handleToggole}>toggle</button>
      </Fragment>
    )
  }
  handleToggole() {
      this.setState({
          show: this.state.show ? false : true
      })
  }
}

export default App;
