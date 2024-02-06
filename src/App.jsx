//node modules
import { useState , useEffect} from 'react'
import { Route, Routes } from "react-router-dom" 

import { Link } from "react-router-dom"

//css
import './App.css'

//api service
import * as starshipService from "./services/sw-api"

//components

import Starship from './components/Starships/Starship'

//pages
import StarshipDetails from "./pages/StarshipDetails/StarshipDetails"

function App() {

  const [starships, setStarships] = useState([])
  
  useEffect(() => {
    const fetchStarships= async () => {
      const starshipData = await starshipService.getStarships()
      //console.log('Response from server:', starshipData)
      setStarships(starshipData.results)
    }
    fetchStarships()
  }, [])

  if(!starships.length) return <h1>Loading...</h1>

  return (
    <>
      <Routes>
        <Route 
          path="/starships/:id/" 
          element={<StarshipDetails/>} 
        />
      </Routes>
    {/* <h1>Test</h1> */}
    <section className='title-section'>
      <h1>Star Wars Starships</h1>
    </section>
    <section className='starships-wrapper'>
      <ul className='starships-list'>
        {starships.map((ship,idx) => {

        let shipID = (ship.url).replace('https://swapi.dev/api/starships/',"")
        shipID=shipID.replace('/','')
       
          // console.log(`Just Ship Url: ${shipID}` )

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

export default App
