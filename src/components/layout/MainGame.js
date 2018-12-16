import React,{ Component } from 'react'
import Gun from './Gun'
import { connect } from 'react-redux'

class MainGame extends Component {

  state={
    url:[
      {src:'/img/character.png',id:1},
      {src:'/img/character-pacMan.png',id:2}
    ]
  }
  render(){
        const shot = this.props.shotStatus
        var pacMan;
        if(shot === false){
          pacMan='/img/character.png'
        }else{
          pacMan='/img/character-pacMan.png'
        }

        return (
          <div className="mainGame">
              <Gun/>
              <div className="mainCharacter">
                  <img src={pacMan} alt="Olek"/>
              </div>
          </div>
        )
    }
  }

  const MapStateToProps = (state) =>{
    return{
      shotStatus: state.appearShot
    }
  }
export default connect(MapStateToProps)(MainGame)