const initState = {
    currentWeapon: 3,
    backgroundColor: 'red'
    
}
const rootReducer = (state = initState, action) =>{
    
    if(action.type === 'CHANGE_WEAPON'){
        let newWeapon = action.currentWeapon
        return{
            ...state,
            currentWeapon: newWeapon,
        }
    }
    if(action.type ==='CHANGE_COLOR'){
        let newColor = action.bgColor
        return{
            ...state,
            backgroundColor: newColor
        }
    }
    return state;
    
    
}

export default rootReducer