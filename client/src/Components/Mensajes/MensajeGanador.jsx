import React from 'react'
import Mensaje from './Mensaje'
export default function MensajeGanador({winner}) {
  const message = `El ganador de la partida es ${winner}`
  return (
        <Mensaje mensaje={message}/>
    
  )
}
