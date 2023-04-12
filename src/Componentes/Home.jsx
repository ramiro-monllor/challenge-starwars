import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
import Navbar from "./Navbar";
import List from "./List";
import Cards from "./Cards";

import style from "./Home.module.css"

function Home() {

  const [info,setInfo] = useState("")
  const [ayudin,setAyudin] = useState(false)
  const [characters,setCharacters] = useState({
    cardLeft: {},
    cardRight: {}
  })

  const searchInfo = async () => {
    const response = await axios.get(`https://akabab.github.io/starwars-api/api/all.json`)
    // console.log(response)
    const json = response.data
    setInfo(json)
  }

  useEffect(() => {
    searchInfo()
    console.log(info)
},[])


  return (
    <div className={style.divTODO}>
      <Navbar
      setAyudin={setAyudin}
      ayudin={ayudin}
      characters={characters}
      setCharacters={setCharacters}
      info={info}
      />
      {
        info.length?
        <div>
      <Cards
      info={info}
      characters={characters}
      />
    </div>
    :
    <div>
      <h3>Loading...</h3>
    </div>
    }
    <List
    info={info}
    ayudin={ayudin}
    />
    </div>
  );
}

export default Home;
