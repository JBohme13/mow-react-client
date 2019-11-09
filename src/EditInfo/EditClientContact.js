import React, { Component } from 'react'
import Context from '../Context'
import ValidationError from '../ValidationError/ValidationError'
import SectionBanner from '../BasicComponents/SectionBanner'
import Button from '../BasicComponents/Button'
import TextInput from '../FormComponents/TextInput'
import TextArea from '../FormComponents/TextArea'

export default class EditClientContact extends Component {
    static contextType = Context;

  validateStartDate = () => {
    const startDate = Number(new Date(this.context.ClientContact.serviceStart.value));
    const currentTime = Number(new Date());
    if (startDate <= currentTime) {
      return 'Start date must be in the future'
    }
  }

  validateClientName = () => {
    const name = this.context.ClientContact.ClientName.value;
    if (name.trim() === '') {
      return 'Name is required'
    }
  }

  validateClientPhone = () => {
    const clientPhone = this.context.ClientContact.ClientPhone.value;
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (clientPhone.trim() === '') {
      return 'Phone number is required'
    }

    if (phoneRegex.test(clientPhone)) {
      //let formattedPhoneNumber = clientPhone.replace(phoneRegex, '($1) $2-$3');
    } else {
        return 'Invalid phone number'
    }
  }

  validateClientAddress = () => {
    const clientAddress = this.context.ClientContact.ClientAddress.value;
    if (clientAddress.trim() === '') {
      return 'Address is required'
    }
  }

  validateClientCity = () => {
    const clientCity = this.context.ClientContact.ClientCity.value;
    if (clientCity.trim() === '') {
      return 'City is required'
    }
  }

  validateClientZip = () => {
    const clientZip = this.context.ClientContact.ClientZip.value;
    const zipRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (clientZip === '') {
      return 'Zip code is required'
    }

    if (!zipRegex.test(clientZip)) {
      return 'Invalid zip code'
    }
  }

  validateClientDob = () => {
    const clientDob = this.context.ClientContact.ClientDob.value;
    if (clientDob.trim() === '') {
      return 'Date of birth is required'
    }
  }

    render () {
      const value = this.context;
        return(
          <form className='form-section'>
            <SectionBanner name='Contact information'/>
            <TextInput
              type='text'
              name='Name'
              id='client-name'
              required={true}
              placeholder='Your Name Here'
              onChange={e => value.handleClientNameChange(e.target.value)}
            />
            {this.context.ClientContact.ClientName.touched && <ValidationError message={this.validateClientName()} />}
            <TextInput
              type='text'
              name='Phone'
              id='client-phone'
              required={true}
              placeholder='(###) ### - ####'
              onChange={e => value.handleClientPhoneChange(e.target.value)}
            />
            {this.context.ClientContact.ClientPhone.touched && <ValidationError message={this.validateClientPhone()} />}
            <TextInput
              type='text'
              name='Email'
              id='client-address'
              required={true}
              placeholder='Your Delivery Address Here'
              onChange={e => value.handleClientEmailChange(e.target.value)}
            />
            {this.context.ClientContact.ClientAddress.touched && <ValidationError message={this.validateClientAddress()} />}
            <TextInput
              type='text'
              name='Address'
              id='client-address'
              required={true}
              placeholder='Your Delivery Address Here'
              onChange={e => value.handleClientAddressChange(e.target.value)}
            />
            {this.context.ClientContact.ClientAddress.touched && <ValidationError message={this.validateClientAddress()} />}
            <TextInput
              type='text'
              name='City'
              id='client-city'
              required={true}
              placeholder='Your City'
              onChange={e => value.handleClientCityChange(e.target.value)}
            />
            {this.context.ClientContact.ClientCity.touched && <ValidationError message={this.validateClientCity()} />}
            <TextInput
              type='text'
              name='Zip Code'
              id='client-address'
              required={true}
              placeholder='Your Delivery Address Here'
              onChange={e => value.handleClientZipChange(e.target.value)}
            />
            {this.context.ClientContact.ClientAddress.touched && <ValidationError message={this.validateClientZip()} />}
            <TextInput
              type='date'
              name='Date of Birth'
              id='client-dob'
              required={true}
              placeholder='mm/dd/yyy'
              onChange={e => value.handleClientDobChange(e.target.value)}
            />
            {this.context.ClientContact.ClientDob.touched && <ValidationError message={this.validateClientDob()} />}
            <TextArea
              name='Delivery Instructions'
              id='contact-delivery-instructions'
              placeholder='i.e. come to the side door'
              onChange={e => value.handleDeliveryInstructionsChange(e.target.value)}
            />
            <Button
              name='Save'
              onClick={event => value.handleEditClientContactNext(event)}
            />
          </form>
        )
    }
}