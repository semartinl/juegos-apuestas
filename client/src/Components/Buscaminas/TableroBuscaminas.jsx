import React from 'react'
import Square from './Square'
import styleGame from './../../css/Games/buscaminas.module.css'
import Tablero from '../Tablero'
import funciones from '../../Controllers/funciones'
function TableroBuscaminas({rows, columns}) {
    const [mines, setMines] = React.useState(rows * Math.floor(columns/5))
    
  return (
    <>
        <Tablero columns={columns} rows={rows} algoritmo = {funciones.crearTableroAleatorio} numMines={mines}/>
    </>
        
            
  )
}

export default TableroBuscaminas