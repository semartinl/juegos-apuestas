import React from 'react'
import styleGame from './../../css/Games/buscaminas.module.css'
import style from './../../css/styles.module.css'
export default function MostrarTablero({tablero}) {
  return (
    <div className={styleGame["tablero"]}>
        {tablero.map((row, xIndex) => {
            
                return <div key={xIndex} className={styleGame['row-tablero']}>
                    {row.map((column, yIndex) => {
                        if(tablero[xIndex][yIndex])
                            return <div key={xIndex} className={styleGame['bomb-square-incorrect']}></div>
                        else
                            return <div key={xIndex} className={`${styleGame['square']} ${style["correct"]}`}></div>
                    })
        }
            
                </div>
        })}
    </div>
  )
}
