import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class Form extends Component {
  state = { text : "" }


  fceChange(e) {
    //debugger;
    this.setState({text:e.target.value})
  }

  fceOdeslat() {
    //debugger;
    alert(this.state.text);
  }

  render() {
    var submitName = this.props.submitName || "odeslat";
    return (
      <div className="App">
      <br/>
        <input type="text" onBlur={ () => { this.props.onNevim("123") }} onChange={this.fceChange.bind(this)} value={this.state.text}/><button onClick={this.fceOdeslat.bind(this)}>{submitName}</button>
      </div>
    );
  }
}

export default Form;
