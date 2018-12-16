import React, { Component } from 'react'
import { connect } from 'react-redux'

class Menu extends Component {

  handleClick=(id)=>{
    this.props.currentWeapon(id);
  }
  
  
  render(){
    
  return (
    <div>
        <div className="bullet">
          <img src="/img/1.png" alt="pocisk" onClick={()=> this.handleClick(1)}/>
          <img src="/img/2.png" alt="pocisk" onClick={()=> this.handleClick(2)}/>
          <img src="/img/3.png" alt="pocisk" onClick={()=> this.handleClick(3)}/>
        </div>
    </div>
  )
}
}

const mapDispatchToProps = (dispatch) =>{
  return {
    currentWeapon: (id) => dispatch({type: 'CHANGE_WEAPON', currentWeapon: id})
  }
}

export default connect(null,mapDispatchToProps)(Menu)
