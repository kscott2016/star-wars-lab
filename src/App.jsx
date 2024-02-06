//node modules
import { Route, Routes } from "react-router-dom" 

//css
import './App.css'

//components

//pages
import StarshipDetails from "./pages/StarshipDetails/StarshipDetails"

import StarshipList from "./components/StarshipsList/StarshipsList"


function App() {

  return (
    <>
      
      <Routes>
        <Route 
          path="/starships" 
          element={<StarshipList/>} 
        />
        <Route 
          path="/starships/:id/" 
          element={<StarshipDetails/>} 
        />
      </Routes>
      
    </>
  )
}

export default App
