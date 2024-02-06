//node modules
import { Route, Routes } from "react-router-dom" 

//css
import './App.css'

//pages
import StarshipDetails from "./pages/StarshipDetails/StarshipDetails"

//components
import NavBar from "./components/NavBar/NavBar"

import StarshipList from "./components/StarshipsList/StarshipsList"


function App() {

  return (
    <>
    <NavBar />
    <main>
      <img src="https://i.pinimg.com/originals/32/a1/da/32a1da27229539e02f5676b9bc8aa1b3.png" />
    </main>
      <Routes>
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
