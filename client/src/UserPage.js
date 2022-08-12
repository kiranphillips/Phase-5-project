import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Activities from 'react'

function UserPage ({ setIsLoggedIn }) {
  const params = useParams()
  const { id } = params

  console.log('userpageid:', id)

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("loggedIn"))
  }, [])

    return (
      <Activities setIsLoggedIn={setIsLoggedIn} page={'guest'} loggedInUserId={id} />
    )
}

export default UserPage;