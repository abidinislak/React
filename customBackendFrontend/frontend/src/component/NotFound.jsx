import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>

            <div className="container">

                <h1>Oops! You seem to be lost.</h1>
                <p>Here are some helpful links:</p>
                <Link to="https://google.com">Click me</Link>
            </div>
        </>
    )
}

export default NotFound
