// npm modules
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// services
import { getStarships} from "../../services/sw-api"

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})

  const { starshipId } = useParams()
  console.log("StarshipId:"+ {starshipId})
  

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getStarships(starshipId)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [starshipId])

 

  return (
    <main className="starship-details">
      <div className="starship-card">
        <h2>Name: {starshipDetails.name}</h2>
        <h2>Model: {starshipDetails.model}</h2>

        Return Link
      </div>
    </main>
  )
}

export default StarshipDetails