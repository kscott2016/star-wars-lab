//modules
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

//api service
// import * as starshipService from "../../services/sw-api"
import { getStarships } from "../../services/sw-api" 

//css
import './StarshipsList.css'

//components
import Starship from "../Starships/Starships"

const StarshipList = () => {

  const [starshipList, setStarshipList] = useState([])
  
  useEffect(() => {
    const fetchStarships= async () => {
      const starshipData = await getStarships()
      setStarshipList(starshipData.results)
    }
    fetchStarships()
  }, [])

  if(!starshipList.length) return <h1 className="loading-heading">Loading...</h1>

  return ( 
    <>
      <section className='title-section'>
        <h1>Star Wars Starships</h1>
      </section>
      <section className='starships-wrapper'>
        <ul className='starships-list'>
          {starshipList.map((ship,idx) => {
        
          let shipID = (ship.url).replace('https://swapi.dev/api/starships/',"")
          shipID=shipID.replace('/','')

          return (<Link key= {idx} to={`/starships/${shipID}`}>
            <Starship key={shipID}
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