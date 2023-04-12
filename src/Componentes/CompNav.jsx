import React, { useRef, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';


const CompNav = ({characters,setCharacters,card,card2,info}) => {

  const [numbRandom, setnumbRandom] = useState()
  const previusNumber = useRef(numbRandom)

  const[estadoPersonaje,setEstadoPersonaje] = useState("")


  const handleInput = (e) => {
    setEstadoPersonaje(e.target.value)
    console.log(characters)
  }

  const handleClick = (e) => {
    e.preventDefault()
    const findCharacter = info.find((i) => i.name === estadoPersonaje)
    if(!findCharacter) return alert("no existe el personaje")
    if(characters[card2].name === findCharacter.name) return alert("seleccionar otro personaje")
    setCharacters({
      ...characters,
      [card]: findCharacter
    })
    console.log(characters)
  }
  
  const randomNumber = () => {
    const newNumber = Math.floor(Math.random() * (87 - 1) + 1);
    if ( newNumber === previusNumber.current) return randomNumber()
    setnumbRandom(newNumber)
    previusNumber.current = newNumber
    console.log(newNumber)
    if(characters[card2] === info[numbRandom]) return randomNumber()
    setCharacters({
      ...characters,
      [card]: info[numbRandom]
    })
    console.log(characters)
  }

  return (
    <div>
        <Button variant="contained" color="error" onClick={randomNumber}>
        RANDOM
        </Button>

        <TextField
        label="Search Character"
        variant="standard"
        color="error"
        focused
        sx={{
          marginLeft:"2rem",
          input: { color: 'white' }
        }}
        name={card}
        onChange ={(e) => handleInput(e)}
      />
      <IconButton aria-label="delete" size="small" color="warning" sx={{marginTop:"0.5rem"}} onClick={(e) => handleClick(e)} >
      <SearchIcon fontSize="medium" />
      </IconButton>

    </div>
  )
}

export default CompNav