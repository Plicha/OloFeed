import React,{ Component } from 'react'
import { connect } from 'react-redux'


    
class Gun extends Component {
  render(){
    const id = "./img/"+this.props.currentWeapon+".png";
    const color = this.props.backgroundColor;
    const bgColor = {
      backgroundColor: color
    }
  return (
    
    <div className="gunBG" style={bgColor}>
      <img src={id} alt=""/>
    </div>
  )
}
}
const MapStateToProps = (state) =>{
  return{
    currentWeapon: state.currentWeapon,
    backgroundColor: state.backgroundColor
  }
}
export default connect(MapStateToProps)(Gun)