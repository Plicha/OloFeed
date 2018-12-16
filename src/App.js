import React, { Component } from 'react';
import Menu from './components/layout/Menu';
import MainGame from './components/layout/MainGame';
import Controls from './components/layout/Controls';

class App extends Component {
  state={
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="grid-container">
            <div className="menu">
              <Menu/>
            </div>
            <MainGame/>
            <Controls/>
          </div>
        </header>
      </div>
    );
  }
}
export default App;
