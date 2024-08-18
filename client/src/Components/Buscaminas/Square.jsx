import React, { useState } from 'react'
import styleGame from './../../css/Games/buscaminas.module.css'
import style from './../../css/styles.module.css'
import mineSVG from './../../assets/Games/bomb-solid.svg'

import useStatusGame from '../../hooks/useStatusGame'
function Square({xAxis, yAxis, isMine }) {
    
    const [isRevealed, setIsRevealed] = useState(false)
    const {winner, setWinner, isOnePlayerNext, setNextPlayer} = useStatusGame()

    const calcularGanador = async  ()=>{
      if(isOnePlayerNext){
        setWinner("Player 1")
      } else{
        setWinner("Player 2")
      }
    }

    const cambiarNextPlayer = async ()=>{
      if(isOnePlayerNext){
        setNextPlayer(false)
      }
      else{
        setNextPlayer(true)
        }
    }
    const handleRevealed = ()=>{
        cambiarNextPlayer()
        setIsRevealed(true)
        if(isMine){
          calcularGanador()

        }
          
        
        
    }
  return (
    <>
    
      {!isRevealed?<>
        <button onClick={handleRevealed} className={styleGame['square']} disabled={isRevealed}></button>
      </>:
      isMine? 
      <div className={styleGame['bomb-square-incorrect']}></div>:
      <div className={`${styleGame['square']} ${style["correct"]}`}></div>
      }
    </>

  )
}

export default Square