import React, { Component } from 'react';
// import Form from './Form';
import Input from './components/Input';


class App extends Component {

  state = {
    jmeno: '',
    prijmeni: '88',
    vaha: 0
  }

  // handleJmenoChange = (value) => {
  //   this.setState({
  //     jmeno: value
  //   })
  // }
  // handlePrijmeniChange = (value) => {
  //   this.setState({
  //     prijmeni: value
  //   })
  // }


  render() {
    const { jmeno, prijmeni, vaha } = this.state

    const createHandler = (key) => (value) => {
      this.setState({
        [key]: value
      })
    }



    return (
      <div className="App">
        {/*
          <Input v={jmeno} label="Jméno pacholka" onWrite={this.handleJmenoChange} />
          <Input v={prijmeni} label="Prijmeni pacholka" onWrite={this.handlePrijmeniChange} />
          */}

        <Input v={jmeno} label="Jméno pacholka" onWrite={createHandler('jmeno')} />
        <Input v={prijmeni} label="Prijmeni pacholka" onWrite={createHandler('prijmeni')} />
        <Input number={true} v={vaha} label="Váha pacholka" onWrite={createHandler('vaha')} />

        <div>
          {jmeno}
          {" "}
          {prijmeni}
        </div>

      </div>
    );
  }
}

export default App;
