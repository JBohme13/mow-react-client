import React, { Component } from 'react'
import Context from '../Context'
import SectionBanner from '../BasicComponents/SectionBanner'
import SubBanner from '../BasicComponents/SubBanner'
import Button from '../BasicComponents/Button'

export default class Thankyou extends Component {
    static contextType = Context;

    handleContinueButton = () => {
        this.context.history.push('/home')
    }

    render() {
        return(
            <div>
                <SectionBanner name='Thank you for registering with Fresh Meals on Wheels!'/>
                <SubBanner name='Click continue to go to your home page where you can select a meal schedule to begin service!'/>
                <Button
                    name='Continue'
                    onClick={this.handleContinueButton}
                />
            </div>
        )
    }
}