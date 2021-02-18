import React from 'react';
import './App.css';
// import SimplyScansion from './SimplyScansion.js'
import AddPoemInterface from './AddPoemInterface'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h3 className = "Title">
            Simply Scansion
          </h3>
          <AddPoemInterface/>
        </header>
      </div>
    );
  }
}

export default App;
