import { useEffect, useState } from 'react'
import stylesMain from './../../css/main.module.css'
import styleGame from './../../css/Games/buscaminas.module.css'
function Buscaminas() {
    const [tablero, setTablero] = useState([])

    useEffect(()=>{

    },[])


  return (
    <main className={stylesMain["container-main"]}>
        <div className={styleGame['tablero']}>
        
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