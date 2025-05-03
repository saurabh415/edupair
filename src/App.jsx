import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Sessions from './pages/Sessions'
import Credits from './pages/Credits'
import './styles/main.scss'

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/sessions" element={<Sessions />} />
            <Route path="/credits" element={<Credits />} />
          </Routes>
        </main>
      </Router>
    </UserProvider>
  )
}

export default App
