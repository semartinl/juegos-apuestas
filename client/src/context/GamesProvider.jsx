import React, { createContext, useState } from 'react'

const GamesContext = createContext()
function GamesProvider({children}) {
    const [moneyWagered, setMoneyWagered] = useState(0.0)
    const [isOnePlayerNext, setNextPlayer] = useState(true) //Esta constante establecerá si el jugador 1 le toca realizar alguna acción.
    
  return (
    <>
        <GamesContext.Provider value={{moneyWagered, setMoneyWagered, isOnePlayerNext, setNextPlayer}}>
            {children}
        </GamesContext.Provider>
    </>
  )
}

export default GamesProvider