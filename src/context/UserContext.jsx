import { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [credits, setCredits] = useState(0)

  useEffect(() => {
    // Load user data from localStorage
    const savedUser = localStorage.getItem('edupair_user')
    const savedCredits = localStorage.getItem('edupair_credits')
    
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    if (savedCredits) {
      setCredits(parseInt(savedCredits))
    }
  }, [])

  const updateUser = (userData) => {
    setUser(userData)
    localStorage.setItem('edupair_user', JSON.stringify(userData))
  }

  const updateCredits = (newCredits) => {
    setCredits(newCredits)
    localStorage.setItem('edupair_credits', newCredits.toString())
  }

  const addCredits = (amount) => {
    const newTotal = credits + amount
    updateCredits(newTotal)
  }

  const spendCredits = (amount) => {
    if (credits >= amount) {
      const newTotal = credits - amount
      updateCredits(newTotal)
      return true
    }
    return false
  }

  return (
    <UserContext.Provider value={{
      user,
      credits,
      updateUser,
      updateCredits,
      addCredits,
      spendCredits
    }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
} 