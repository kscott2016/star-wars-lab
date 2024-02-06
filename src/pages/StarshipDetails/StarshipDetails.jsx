// npm modules
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

//css
import './StarshipDetails.css'

// services
import { getStarship} from "../../services/sw-api"

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})

  const {starshipId} = useParams()
  console.log("Inside starShipDetails StarshipId:")
  console.dir({starshipId})
  

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getStarship({starshipId}.starshipId)
      setStarshipDetails(starshipData)
    }
    
    fetchDetails()
  }, [starshipId])



  return (
    <>
   
    <h1>TEST</h1>
      <main className="starship-details">
        <div className="starship-card">
          <h2>Name: {starshipDetails.name}</h2>
          <h2>Model: {starshipDetails.model}</h2>

          Return Link
        </div>
      </main>
    </>
  )
}

export default StarshipDetails