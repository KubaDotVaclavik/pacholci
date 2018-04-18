import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Form from './Form';

class App extends Component {
  
handleNevim(text) {
  alert(text);
}


  render() {
    return (
      <div className="App">
        <Form submitName="nevim" onNevim={this.handleNevim.bind(this)}/>
        <Form/>
      </div>
    );
  }
}

export default App;
