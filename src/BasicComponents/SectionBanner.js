import React from 'react'
import './SectionBanner.css'

export default function SectionBanner(props) {
    return(
        <h2 id='section-banner'>{props.name}</h2>
    )
}