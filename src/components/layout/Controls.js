import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { setTimeout } from 'timers';

class Controls extends Component {
    
    handleClick=()=>{
        var fire;
        fire = !(this.props.shotStatus) 
        this.props.appearShot(fire)
        setTimeout(() => {
            this.reload()
        }, 500);
    }
    reload=()=>{
        this.props.appearShot(false)
    }
    
  render(){  
        return (
            <div className="controls">
                <div className="currentWeapon">
                    Akturalna broń: {this.props.currentWeapon}
                </div>
                <button onClick={this.handleClick}>FIRE!</button>
                <div className="points">
                    0
                </div>
                <div className="feedPointer">
                    <div></div>
                </div>
            </div>
        )
    }
}

const MapStateToProps = (state) =>{
  return{
    currentWeapon: state.currentWeapon,
    shotStatus: state.appearShot
  }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        appearShot: (isAppear) => dispatch({type: 'SHOT', appearShot: isAppear})
    }
  }
export default  connect(MapStateToProps,mapDispatchToProps)(Controls)