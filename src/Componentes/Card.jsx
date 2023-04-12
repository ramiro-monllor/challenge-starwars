import React from 'react'
import style from "./Card.module.css"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Card({characters,card}) {

const mostrarData = () => {
  console.log(characters)
}

  return (
    <div className={style.cardEntera}>

      <Accordion sx={{width:"25rem"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" onClick={mostrarData()}>
          <Typography>Character</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {
            characters[card] ?
            <div>
            <h1 className={style.titulo}>{characters[card].name}</h1>
            <h3 className={style.subtitulo}>Identificador Espacial:{characters[card].id}</h3>
            <img src={characters[card].image} className={style.foto}/>
            <div className={style.divInfo}>
            <h5 className={style.textH5}>{characters[card].gender}</h5>
            <h5 className={style.textH5}>{characters[card].species}</h5>
            <h5 className={style.textH5}>{characters[card].homeworld}</h5>
            </div>
            </div>
            :
            <h1 className={style.titulo}>Select Character</h1>
          }
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Card