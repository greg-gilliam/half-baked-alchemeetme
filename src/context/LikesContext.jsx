import { useContext, createContext, useState } from 'react'

const LikeContext = createContext()

const LikeProvider = ({ children }) => {
  const [likes, setLikes] = useState([])

  return <LikeContext.Provider value={{ likes, setLikes }}>{children}</LikeContext.Provider>
}

const useLikes = () => {
  const context = useContext(LikeContext)

  if (context === undefined) {
    throw new Error('useLikes must be used within a LikeContext Provider')
  }
  return context
}

export { LikeProvider, useLikes }
