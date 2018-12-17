import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { setTimeout } from 'timers'
import { Link } from 'react-router-dom';

class Controls extends Component {
    state={
        width: 30,
        timer:false,
        buttonFreeze: false,
        gameOver: "",
    }

    handleClick=()=>{
        var fire;
        fire = !(this.props.shotStatus)
        this.props.appearShot(fire)
        
        this.newShotStatus()

        this.setState({timer: !(this.state.timer)})
        setTimeout(() => {
            this.reload()

        }, 500);
    }

    reload=()=>{
        this.props.appearShot(false)
        //karmienie
        var minus = this.props.currentWeapon +12; 

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
                            width: this.state.width+2
                        }) 
                    }else{
                        this.setState({
                            width: 100
                        })
                    }
                    if(this.state.width <0){
                        this.props.gameResults("Wygrana!")
                    }
                    console.log(this.state.width);
                    
                }, 250);
            }
        return{
            x,
        }}

    newShotStatus=()=>{
        var newStatus;
        newStatus = (this.props.shotsStatus)-1
        if(newStatus>0){
            this.props.shotsAvailable(newStatus);
        }else{
            this.props.shotsAvailable(0)
            this.setState({gameOver:'/stats'})
        }
        
    }

  render(){  
        return (
            <div className="controls">
                <div className="currentWeapon">
                    Akturalna broń:
                    <p>{this.weaponDesc().value}</p> 
                </div>
                <Link to={this.state.gameOver}>
                <button onClick={this.handleClick} disabled={this.state.buttonFreeze}>Nakarm!</button>
                </Link>
                <div className="points">
                    Wskaźnik głodu
                </div>
                <div className="feedPointer">
                    <div style={{width: this.feedPointer().x +'%'}}></div>
                </div>
                <div className="shotsAvailable">
                    Pozostało <span>{(this.props.shotsStatus)+1}</span> strzałów
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
        shotsAvailable: (decrement) => dispatch({type: 'SHOTS_DEC',shotsAvailable: decrement }),
        gameResults: (result) => dispatch({type: 'GAME_RESULTS', gameResults: result}),
    }
  }
export default  connect(MapStateToProps,mapDispatchToProps)(Controls)