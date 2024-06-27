import React from 'react'
import "./Breadcrumb.css"
import { Link } from 'react-router-dom'

function Breadcrumb({ heading }) {
    return (
        <div className='breadcrumb'>
            <Link to={"/"}> <h3>Home </h3>  </Link> / {heading}
        </div>
    )
}

export default Breadcrumb