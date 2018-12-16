import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from "react-transition-group";
    
class Gun extends Component {
  render(){
    const id = "./img/"+this.props.currentWeapon+".png";
    
  return (
    
    <div className="gunBG">
        <CSSTransition
        in={this.props.appearShot}
        appear={true}
        timeout={600}
        classNames="shot"
        >
          <img src={id} alt=""/>
        </CSSTransition>
    </div>
  )
}
}
const MapStateToProps = (state) =>{
  return{
    currentWeapon: state.currentWeapon,
    appearShot: state.appearShot
  }
}
export default connect(MapStateToProps)(Gun)