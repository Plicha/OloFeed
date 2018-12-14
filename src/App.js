import React, { Component } from 'react';
import Menu from './components/layout/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="grid-container">
            <div className="menu">
              <Menu />
            </div>
            <div className="mainGame"></div>
            <div className="controls"></div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
