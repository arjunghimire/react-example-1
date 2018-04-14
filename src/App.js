import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { term: ''};
  }

  render() {
    return (
      <div>
       <h4> value of input : { this.state.term} </h4> 
       <input onChange={ event => this.setState({term: event.target.value})} />
      </div>     
    );
  }
}

export default App;
