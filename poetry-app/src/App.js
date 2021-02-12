import React from 'react';
import './App.css';
import SimplyScansion from './SimplyScansion.js'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h3 className = "Title">
            Simply Scansion
          </h3>
          <SimplyScansion/>
        </header>
      </div>
    );
  }
}

export default App;
