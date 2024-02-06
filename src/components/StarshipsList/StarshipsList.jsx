import { useEffect, useState } from "react"

//api service
import * as starshipService from "../../services/sw-api"


import Starship from "../../components/Starships/Starship"

import { Link } from "react-router-dom"

const StarshipList = () => {

  const [starships, setStarships] = useState([])
  
  useEffect(() => {
    const fetchStarships= async () => {
      const starshipData = await starshipService.getStarships()
      setStarships(starshipData.results)
    }
    fetchStarships()
  }, [])

  if(!starships.length) return <h1>Loading...</h1>

  return ( 
    <>
      <section className='title-section'>
        <h1>Star Wars Starships</h1>
      </section>
      <section className='starships-wrapper'>
        <ul className='starships-list'>
          {starships.map((ship,idx) => {

          let shipID = (ship.url).replace('https://swapi.dev/api/starships/',"")
          shipID=shipID.replace('/','')

            return (<Link key= {idx} to={`/starships/${shipID}`}>
              <Starship 
              starship={ship}
              />
            </Link>)
          })
        }
        </ul>
        </section>
    </>
   )
}
 
export default StarshipList;