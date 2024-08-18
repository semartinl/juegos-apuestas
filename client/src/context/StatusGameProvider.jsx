import React, { createContext, useState } from 'react'
export const StatusGameContext = createContext()

export default function StatusGameProvider({children}) {
    const [winner, setWinner]= useState(null)
    const [isOnePlayerNext, setNextPlayer] = useState(false) //Esta constante establecerá si el jugador 1 le toca realizar alguna acción.
    
  return (
      <StatusGameContext.Provider value={{winner, setWinner, isOnePlayerNext, setNextPlayer}}>
        <>{children}</>
      </StatusGameContext.Provider>
  )
}
