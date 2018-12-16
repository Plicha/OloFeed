import React from 'react'
import Gun from './Gun'
function mainGame() {
  return (
    <div className="mainGame">
        <Gun/>
        <div className="mainCharacter">
            <img src="/img/character.png" alt="Olek"/>
        </div>
    </div>
  )
}
export default mainGame