import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const CareersError = () => {
    const error = useRouteError();
  return (
    <div>
       <h1>Career not found</h1>
        <p>{error.message}</p>
        <Link to="/">Go back to Home Page</Link>
    </div>
  )
}

export default CareersError