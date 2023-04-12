import React from 'react'
import CompNav from './CompNav'
import style from "./Navbar.module.css"
import Button from '@mui/material/Button';

const Navbar = ({setAyudin,ayudin,characters,setCharacters,info}) => {

  const viewCharacters = () => {
    setAyudin(!ayudin)
    console.log(ayudin)
    console.log(info)
  }

  return (
    <div>
        <div className={style.divComp}>
        <CompNav
        characters={characters}
        setCharacters={setCharacters}
        card="cardLeft"
        card2="cardRight"
        info={info}
        />
        <Button variant="outlined" color="secondary" onClick={viewCharacters}>
          ALL CHARACTERS
        </Button>
        <CompNav
        characters={characters}
        setCharacters={setCharacters}
        card="cardRight"
        card2="cardLeft"
        info={info}
        />
        </div>
    </div>
  )
}

export default Navbar