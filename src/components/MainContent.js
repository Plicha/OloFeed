import React, { Component } from 'react';
import Menu from './layout/Menu';
import MainGame from './layout/MainGame';
import Controls from './layout/Controls';


class MainContent extends Component {
  render() {
    return (

      <div className="MainContent">
          <div className="grid-container">
            <div className="menu">
              <Menu/>
          </div>
            <MainGame/>
            <Controls/>
          </div>
      </div>
    );
  }
}
export default MainContent;
