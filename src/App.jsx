import { useState , useEffect} from 'react'
import { Route, Routes } from "react-router-dom" 

import './App.css'

import * as starshipService from "./services/sw-api"

import Starship from './components/Starship'

function App() {

  const [starships, setStarships] = useState([])
  
  useEffect(() => {
    const fetchStarships= async () => {
      const starshipData = await starshipService.getStarships()
      console.log('Response from server:', starshipData)
      setStarships(starshipData.results)
    }
    fetchStarships()
  }, [])

  return (
    <>
    {/* <h1>Test</h1> */}
    <section className='title-section'>
      <h1>Star Wars Starships</h1>
    </section>
    <section className='starships-wrapper'>
      <ul className='starships-list'>
        {starships.map((ship,idx) => (
          <Starship 
          key= {idx}
          starship={ship}
          />
        ))}
      </ul>
      </section>
    </>
  )
}

export default App
