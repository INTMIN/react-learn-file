import React, { Component } from 'react';
import styled,{ css } from 'styled-components';




const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;



class App extends Component {
  render() {
    return (
      <div className='dell'>
        Hello React
      
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
    
      </div>
    );
  }
}

export default App;
