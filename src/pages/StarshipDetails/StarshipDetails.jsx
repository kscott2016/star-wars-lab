// npm modules
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

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

  if(!starshipDetails.length) return <h1 className="loading-heading">Loading...</h1>

  return (
    <>

      <section className='title-section'>
        <h1>Star Wars Starships</h1>
      </section>
      <main className="starship-details">
        <div className="starship-card">
          <h2>Name: {starshipDetails.name}</h2>
          <h2>Model: {starshipDetails.model}</h2>
          <Link className="return-link" to={`/starships/`}>
          Return</Link>
        </div>
      </main>
    </>
  )
}

export default StarshipDetails