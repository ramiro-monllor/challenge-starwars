import React from 'react'
import Card from './Card'
import style from "./Cards.module.css"


function Cards({info,characters}) {
  return (
    <div className={style.divCards}>
        <Card
        characters={characters}
        card="cardLeft"
        />
        <Card
        characters={characters}
        card="cardRight"
        />
    </div>
  )
}

export default Cards