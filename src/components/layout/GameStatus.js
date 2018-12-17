import React, { Component } from 'react'
import { connect } from 'react-redux'
class GameStatus extends Component {

    statusColor=()=>{
        var color;
        if(this.props.gameResults==='Przegrana'){
            return{
                color: '#da3832'
            }
        }else{
            return{
                color: '#377d4e',
                src: '/img/win.png'
            }
        }
    }

  render() {
    return (
      <div className="GameStatus">
          <div>
              koniec gry
              <p style={{color: this.statusColor().color}}>
                  {this.props.gameResults}
                  
              </p>
              <p><a href='/'><button>Spróbuj ponownie</button></a></p>
              <img src={this.statusColor().src} alt=""/>
          </div>
      </div>
    )
  }
}
const MapStateToProps = (state) =>{
    return {
        gameResults: state.gameResults
    }
}

export default connect(MapStateToProps)(GameStatus)