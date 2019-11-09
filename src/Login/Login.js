import React, { Component } from 'react'
import Context from '../Context'
import SectionBanner from '../BasicComponents/SectionBanner'
import SubBanner from '../BasicComponents/SubBanner'
import Button from '../BasicComponents/Button'
import TextInput from '../FormComponents/TextInput'
import './Login.css'

export default class Login extends Component {
    static contextType = Context

    handleLoginClick = () => {
        this.context.history.push('/home')
    }

    handleRegisterClick = () => {
        this.context.history.push('/newLogin')
    }
    render() {
        return(
            <form id='login-form'>
                <TextInput
                    type='text'
                    id='user-name'
                    name='User Name'
                    required={true}
                    placeholder='Your user name here'
                />
                <TextInput
                    type='text'
                    id='password'
                    name='Password'
                    required={true}
                    placeholder='Your password here'
                />
                <Button
                    name='Login'
                    onClick={this.handleLoginClick}
                />
                <SubBanner name='New to Meals on Wheels? Click Register below to Sign up!'/>
                <Button
                    name='Register' 
                    onClick={this.handleRegisterClick}
                />
            </form>
        )
    }
}