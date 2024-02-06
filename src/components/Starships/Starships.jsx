import './Starships.css'

const Starship =({starship}) => {

  return (
    <li className="starship-item">
      <h2>{starship.name}</h2>
  </li>
  )
}

export default Starship