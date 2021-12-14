import { useContext, createContext, useState } from 'react'

const UserContext = createContext()

const userProvider = ({ children }) => {
  const [user, setUser] = useState([])

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

const useUser = () => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('useUser must be used within a UserContext Provider')
  }
  return context
}

export { UserProvider, useUser }
