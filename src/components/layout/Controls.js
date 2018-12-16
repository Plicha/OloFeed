import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { setTimeout } from 'timers';

class Controls extends Component {
    state={
        width: 20,
        timer:false,
        buttonFreeze: false,
    }
    handleClick=()=>{
        var fire;
        fire = !(this.props.shotStatus)
        
        this.props.appearShot(fire)
        this.props.shotsAvailable(this.props.shotsAvailable-1)
        this.setState({timer: !(this.state.timer)})
        setTimeout(() => {
            this.reload()

        }, 500);
    }
    reload=()=>{
        this.props.appearShot(false)
        //karmienie
        var minus = this.props.currentWeapon +15; 

        this.setState({
            width: this.state.width - minus,
        })

    }
    
    weaponDesc=()=>{
        var id;
        id = this.props.currentWeapon;
        //console.log(id);
        //console.log(this.props.weaponDescription[id-1].value);
        return{
        value: this.props.weaponDescription[id-1].value
        }
    }
    feedPointer=()=>{
        var x = this.state.width;
        
        if(this.state.timer){
            setTimeout(() => {
           if( this.state.width <100){
               this.setState({
                   width: this.state.width+5
               })
               console.log(this.state.width);  
           }else{
            this.setState({
                width: 100
            })
           }

        }, 1000);
        }
        
        //console.log(x);
        return{
            x,
        }
    }

  render(){  
        return (
            <div className="controls">
                <div className="currentWeapon">
                    Akturalna broń:
                    <p>{this.weaponDesc().value}</p> 
                </div>
                <button onClick={this.handleClick} disabled={this.state.buttonFreeze}>Nakarm!</button>
                <div className="points">
                    Wskaźnik głodu
                </div>
                <div className="feedPointer">
                    <div style={{width: this.feedPointer().x +'%'}}></div>
                </div>
                <div className="shotsAvailable">
                    Pozostało <span>{this.props.shotsStatus}</span> strzałów
                </div>
            </div>
        )
    }
}

const MapStateToProps = (state) =>{
  return{
    currentWeapon: state.currentWeapon,
    shotStatus: state.appearShot,
    weaponDescription: state.weaponDescription,
    shotsStatus: state.shotsAvailable
  }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        appearShot: (isAppear) => dispatch({type: 'SHOT', appearShot: isAppear}),
        shotsAvailable: (decrement) => dispatch({type: 'SHOTS_DEC',shotsAvailable: decrement })
    }
  }
export default  connect(MapStateToProps,mapDispatchToProps)(Controls)