import React, { Component } from 'react'
import Context from '../Context'
import './Thankyou.css'

export default class Thankyou extends Component {
    static contextType = Context;

    handleContinueButton = () => {
        this.context.history.push('/home')
    }

    render() {
        return(
            <div>
                <h2 id='thankyou-banner'>Thank you for registering with Fresh Meals on Wheels!</h2>
                <p id='thankyou-sub-banner'>Click continue to go to your home page where you can select a meal schedule to begin service!</p>
                <button
                    id='thankyou-button'
                    onClick={this.handleContinueButton}
                >Continue</button>
            </div>
        )
    }
}