import { useContext, useEffect, useState } from 'react'
import React from 'react'
import stylesMain from './../../css/main.module.css'
import styleGame from './../../css/Games/buscaminas.module.css'
import Square from '../../Components/Buscaminas/Square'
import useStatusGame from '../../hooks/useStatusGame'
import TableroBuscaminas from '../../Components/Buscaminas/TableroBuscaminas'
import MensajeGanador from '../../Components/Mensajes/MensajeGanador'
import MostrarTablero from '../../Components/Buscaminas/MostrarTablero'
import funciones from '../../Controllers/funciones'
function Buscaminas() {
    const [tablero, setTablero] = useState(null)
    const [mines, setMines] = useState(8 * Math.floor(8/5))

    const {winner, setWinner, isOnePlayerNext, setNextPlayer} = useStatusGame()

    useEffect(()=>{
      setTablero(funciones.crearTableroAleatorio(8,8,mines))
    },[mines])
    

  return (
    <main className={stylesMain["container-main"]}>
    
        <h1>BUSCAMINAS</h1>
        {!winner?
        <>
        <h3>Turno del jugador {isOnePlayerNext? "2":"1"}</h3>
        <TableroBuscaminas columns={8} rows={8}/>
        
        </>:
        <>
        
        <MensajeGanador winner={winner}/>
        <MostrarTablero tablero={tablero}/>
        </>
        }
            
    </main>
  )
}

export default Buscaminas