import React, { useEffect, useState } from 'react'
import styleGame from './../css/Games/buscaminas.module.css'
import Square from './Buscaminas/Square'
export default function Tablero({rows, columns, algoritmo, numMines}) {
    const [tablero,setTablero] = useState(Array(rows).map(e => e.push(Array(columns).fill(0))))
    
    
    useEffect(()=>{
      setTablero(algoritmo(rows, columns,numMines))
    },[])
    
  return (
    <div className={styleGame['tablero']}>
        {tablero.map((row, xIndex) => {
            
                return <div key={xIndex} className={styleGame['row-tablero']}>
                    {row.map((column, yIndex) => {
                        return <Square key={yIndex} xAxis={xIndex} yAxis={yIndex} isMine={tablero[xIndex][yIndex]?true:false}/>
                    })
        }
            
                </div>
        })}
    </div>
  )
}
