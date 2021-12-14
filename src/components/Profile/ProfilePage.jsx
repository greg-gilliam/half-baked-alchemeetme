import { useState } from 'react'
import { useLikes } from '../../context/UserContext'
import { useProfile } from '../../context/ProfileContext'

export default function ProfilePage() {
  const [name, setName] = useState('')
  const [likeEntry, setLikeEntry] = useState('')
  const { likes, setLikes } = useLikes()
  const { profile, setProfile } = useProfile()

  function updateProfile() {
      if (!likeEntry) return
      setProfile(name)
      setLikes([...likes, {name, message: likeEntry}])
      setLikeEntry('')
  }
  const handleSubmit = (event) => {
      event.preventDefault()
      updateProfile()
  }
  const displayMessage = profile ? `Check out your ${profile}!` : 'Please create a profile!'

  return (
      <>
      <form onSubmit={handleSubmit}></form>
      <button className='button' type='submit'>Create</button>
      <button type='button' className='signOut' onClick={() => {
          setLikes('') setName('') setProfile('')
      }}>Not {profile}?</button>
  )
}
