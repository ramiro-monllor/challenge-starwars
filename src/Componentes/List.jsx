import React from 'react'
import style from "./List.module.css"

function List({info,ayudin}) {

  return (
    <div className={style.divAllNombres}>
      {
        info.length && ayudin===true ?
        <div className={style.divNombres}>
        {
        info.map((p) => (
          <h1 className={style.hNombres}>{p.name}</h1>
        ))
        }
        </div>
        :
        null
      }
    </div>
  )
}

export default List