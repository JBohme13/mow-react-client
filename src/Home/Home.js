import React, { Component } from 'react'
import './Home.css'

export default class Home extends Component {
    render() {
        return(
            <section id='home-container'>
                <h1 id='home-banner'>Click the Meal Schedule tab above to get started</h1>
                <h2 id='home-sub-banner'>your meal schedule will display here once you have set it up.</h2>
            </section>
        )
    }
}