import { useContext, useEffect, useState } from 'react'
import stylesMain from './../../css/main.module.css'
import styleGame from './../../css/Games/buscaminas.module.css'
import Square from '../../Components/Buscaminas/Square'
import useStatusGame from '../../hooks/useStatusGame'
function Buscaminas() {
    const [tablero, setTablero] = useState(Array(Array(8)))
    const [minas, setMinas] = useState([])
    const {winner, setWinner, isOnePlayerNext, setNextPlayer} = useStatusGame()

    useEffect(()=>{

    },[])
    

  return (
    <main className={stylesMain["container-main"]}>
        <h1>BUSCAMINAS</h1>
        <h3>Turno del jugador {isOnePlayerNext? "2":"1"}</h3>

        <div className={styleGame['tablero']}>
        
            <div className={styleGame['row-tablero']}>
                <Square xAxis={0} yAxis={0} isMine={false}/>
                <Square xAxis={0} yAxis={0} isMine={true}/>
                <Square xAxis={0} yAxis={0} isMine={true}/>
                <Square xAxis={0} yAxis={0} isMine={true}/>
                <Square xAxis={0} yAxis={0} isMine={true}/>
                <Square xAxis={0} yAxis={0} isMine={true}/>
                <Square xAxis={0} yAxis={0} isMine={true}/>
                <Square xAxis={0} yAxis={0} isMine={true}/>
            </div>
            <div className={styleGame['row-tablero']}>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
            </div>
            <div className={styleGame['row-tablero']}>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
            </div>
            <div className={styleGame['row-tablero']}>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
            </div>
            <div className={styleGame['row-tablero']}>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
            </div>
            <div className={styleGame['row-tablero']}>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
            </div>
            <div className={styleGame['row-tablero']}>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
            </div>
            <div className={styleGame['row-tablero']}>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
                <button className={styleGame['square']}>1</button>
            </div>
        </div>
    </main>
  )
}

export default Buscaminas