const initState = {
    weaponDescription: [
        {id:1,value:'Makaron na patelni!'},
        {id:2,value:'Surfik!'},
        {id:3,value:'Zatecky Svetly Lezak'},
    ],
    currentWeapon: 3,
    appearShot:false,
    shotsAvailable: 4,
    gameResults:"Przegrana"    
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
    if(action.type ==='SHOTS_DEC'){
        let setShotStatus = action.shotsAvailable
        return{
            ...state,
            shotsAvailable: setShotStatus
        }
    }
    if(action.type === 'GAME_RESULTS'){
        let setResults = action.gameResults
        return{
            ...state,
            gameResults: setResults
        }
    }
    return state;
    
    
}

export default rootReducer