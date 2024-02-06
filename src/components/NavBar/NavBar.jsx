// npm module
import { Link } from "react-router-dom"

import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <nav>
      <Link to='/'>Home</Link>
        <Link to='/starships'>All Starships</Link>
      </nav>
    </header>
  )
}

export default NavBar