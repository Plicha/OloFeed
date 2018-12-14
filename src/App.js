import React, { Component } from 'react';
import Menu from './components/layout/Menu';
import Gun from './components/layout/Gun';
import MainGame from './components/layout/MainGame';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="grid-container">
            <div className="menu">
              <Menu />
            </div>
            
            <MainGame><Gun/></MainGame>
            <div className="controls"></div>
          </div>
        </header>
      </div>
    );
  }
}
//nie można btać między tagi <MainGame><Gun/></MainGame>
export default App;
