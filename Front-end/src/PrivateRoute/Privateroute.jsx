import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function PrivateRoute({ Component, isAuthenticated }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated, navigate])

  return (
    <div>
      {isAuthenticated && <Component />}
    </div>
  )
}

export default PrivateRoute