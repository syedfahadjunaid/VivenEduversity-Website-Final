import React from 'react'
import "./BannerPage.css"


function BannerPage({ img, heading, para }) {
    return (
        <div className="app-container-flex-center bannerPage-container">
            <img src={img} alt="" />
            <h1>{heading}</h1>
            <span>{para}</span>
        </div>
    )
}

export default BannerPage