import React, { Component } from 'react';
import Menu from './components/layout/Menu';
import MainGame from './components/layout/MainGame';
import Controls from './components/layout/Controls';
import { BrowserRouter, Route } from 'react-router-dom'
import GameStatus from './components/layout/GameStatus';
import MainContent from './components/MainContent'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        
        <Route exact path="/" component={MainContent}/>
        <Route path="/stats" component={GameStatus}/>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
