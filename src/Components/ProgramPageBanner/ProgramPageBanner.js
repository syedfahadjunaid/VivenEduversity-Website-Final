import React from 'react'
import "./ProgramPageBanner.css"
import Breadcrumb from '../breadcrumb/Breadcrumb'

function ProgramPageBanner({ img, heading }) {
    return (
        <div className="app-container-flex-center program-page-banner-container">

            <div className='program-page-banner-img'>
                <img src={img} alt="" />
            </div>
            <div className='program-page-banner-heading'>
                <h2>{heading}</h2>
            </div>
            <div className='program-page-banner-button'>
                <Breadcrumb
                    heading={heading} />
            </div>

        </div>
    )
}

export default ProgramPageBanner