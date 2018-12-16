const initState = {
    currentWeapon: 3,
    appearShot:false
    
}
const rootReducer = (state = initState, action) =>{
    
    if(action.type === 'CHANGE_WEAPON'){
        let newWeapon = action.currentWeapon
        return{
            ...state,
            currentWeapon: newWeapon,
        }
    }
    if(action.type ==='SHOT'){
        let setShot = action.appearShot
        return{
            ...state,
            appearShot: setShot
        }
    }
    return state;
    
    
}

export default rootReducer