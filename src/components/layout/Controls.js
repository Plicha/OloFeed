import React,{ Component } from 'react'
import { connect } from 'react-redux'

class Controls extends Component {
    handleClick=()=>{
        console.log("Strzał!");
        this.props.bgColor('black');
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
    currentWeapon: state.currentWeapon
  }
}
const mapDispatchToProps = (dispatch) =>{
    return {
      bgColor: (color) => dispatch({type: 'CHANGE_COLOR', bgColor: color})
    }
  }
export default  connect(MapStateToProps,mapDispatchToProps)(Controls)