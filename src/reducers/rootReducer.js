const initState = {
    weaponDescription: [
        {id:1,value:'Makaron na patelni!'},
        {id:2,value:'Surfik!'},
        {id:3,value:'Zatecky Svetly Lezak'},
    ],
    currentWeapon: 3,
    appearShot:false,
    shotsAvailable: 10
    
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