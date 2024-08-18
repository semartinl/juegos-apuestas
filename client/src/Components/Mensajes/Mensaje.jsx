
import React from 'react'
import style from "./../../css/styles.module.css"
export default function Mensaje({mensaje}) {
  return (
    <div className={style["mensaje"]}>
        <h2>{mensaje}</h2>
    </div>
  )
}
