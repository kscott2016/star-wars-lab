//node modules
import { Route, Routes } from "react-router-dom" 

//css
import './App.css'

//pages
import StarshipDetails from "./pages/StarshipDetails/StarshipDetails"

//components
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home/Home"

import StarshipList from "./components/StarshipsList/StarshipsList"


function App() {

  return (
    <>
    <NavBar />

      <Routes>
      <Route 
          path="/" 
          element={<Home/>} 
        />
        <Route 
          path="/starships" 
          element={<StarshipList/>} 
        />
        <Route 
          path="/starships/:starshipId/" 
          element={<StarshipDetails/>} 
        />
      </Routes>
    </>
  )
}

export default App
