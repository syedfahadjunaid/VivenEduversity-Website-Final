import React from 'react'
import "./ProgramDetailsCard.css"


function ProgramDetailsCard({ img, number, heading }) {
    return (
        <div className='program-page-program-details-card-box'>
            <img src={img} alt="" />
            <h4>{number}</h4>
            <h5>{heading}</h5>
        </div>
    )
}

export default ProgramDetailsCard