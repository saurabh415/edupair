import { Link as RouterLink } from 'react-router-dom'
import { FaUser, FaBook, FaCoins } from 'react-icons/fa'
import '../styles/components/_navbar.scss'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <RouterLink to="/" className="navbar__logo">
          EduPair
        </RouterLink>
        
        <div className="navbar__nav">
          <RouterLink to="/profile">
            <button className="navbar__button">
              <FaUser />
              Profile
            </button>
          </RouterLink>
          <RouterLink to="/sessions">
            <button className="navbar__button">
              <FaBook />
              Sessions
            </button>
          </RouterLink>
          <RouterLink to="/credits">
            <button className="navbar__button">
              <FaCoins />
              Credits
            </button>
          </RouterLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 