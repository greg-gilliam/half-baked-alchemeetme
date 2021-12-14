import { useContext, createContext, useState } from 'react'

const ProfileContext = createContext()

const ProfileProvider = ({ children, user }) => {
  const [profile, setProfile] = useState('')

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {(children, user)}
    </ProfileContext.Provider>
  )
}

const useProfile = () => {
  const context = useContext(ProfileContext)

  if (context === undefined) {
    throw new Error('useProfile hook must be called within a ProfileContext Provider')
  }
  return context
}

export { ProfileProvider, useProfile }
