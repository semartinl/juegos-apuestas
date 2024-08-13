import React, { createContext, useState } from 'react'

const GamesContext = createContext()
function GamesProvider({children}) {
    const [moneyWagered, setMoneyWagered] = useState(0.0)
    
  return (
    <>
        <GamesContext.Provider value={{moneyWagered, setMoneyWagered}}>
            {children}
        </GamesContext.Provider>
    </>
  )
}

export default GamesProvider