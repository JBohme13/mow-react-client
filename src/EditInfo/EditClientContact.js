import React, { Component } from 'react'
import Context from '../Context'
import ValidationError from '../ValidationError'
import './EditClientContact.css'

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
                <form className='new-client-form'>
                  <div className='form-section'>
                    <h3 id='contact-banner'>Contact information</h3>
                    <label 
                      htmlFor='client-name'
                      className='contact-label'
                    >
                      Name
                    </label>
                    <input
                      type='text'
                      name='client-name'
                      id='client-name'
                      className='contact-input'
                      required={true}
                      aria-required={true}
                      placeholder='Your Name Here'
                      onChange={e => value.handleClientNameChange(e.target.value)}
                    />
                    {this.context.ClientContact.ClientName.touched && <ValidationError message={this.validateClientName()} />}
                    <label 
                      htmlFor='client-phone'
                      className='contact-label'
                    >
                      Phone Number
                    </label>
                    <input
                      type='text'
                      name='client-phone'
                      id='client-phone'
                      className='contact-input'
                      required={true}
                      aria-required='true'
                      placeholder='(###) ### - ####'
                      onChange={e => value.handleClientPhoneChange(e.target.value)}
                    />
                    {this.context.ClientContact.ClientPhone.touched && <ValidationError message={this.validateClientPhone()} />}
                    <label 
                      htmlFor='client-address'
                      className='contact-label'
                    >
                      Delivery Address
                    </label>
                    <input
                      type='text'
                      name='client-address'
                      id='client-address'
                      className='contact-input'
                      required={true}
                      aria-required='true'
                      placeholder='Your Delivery Address Here'
                      onChange={e => value.handleClientAddressChange(e.target.value)}
                    />
                    {this.context.ClientContact.ClientAddress.touched && <ValidationError message={this.validateClientAddress()} />}
                    <label 
                      htmlFor='client-city'
                      className='contact-label'
                    >
                      City
                    </label>
                    <input
                      type='text'
                      name='client-city'
                      id='client-city'
                      className='contact-input'
                      required={true}
                      aria-required='true'
                      placeholder='Your City'
                      onChange={e => value.handleClientCityChange(e.target.value)}
                    />
                    {this.context.ClientContact.ClientCity.touched && <ValidationError message={this.validateClientCity()} />}
                    <label 
                      htmlFor='client-zip'
                      className='contact-label'
                    >
                      Zip Code
                    </label>
                    <input
                      type='text'
                      name='client-zip'
                      id='client-zip'
                      className='contact-input'
                      required={true}
                      aria-required='true'
                      placeholder='Your Zip Code'
                      onChange={e => value.handleClientZipChange(e.target.value)}
                    />
                    {this.context.ClientContact.ClientZip.touched && <ValidationError message={this.validateClientZip()} />}
                    <label 
                      htmlFor='client-dob'
                      className='contact-label'
                    >
                      Date Of Birth
                    </label>
                    <input
                      type='date'
                      name='client-dob'
                      id='client-dob'
                      className='contact-input'
                      required={true}
                      aria-required='true'
                      placeholder='mm/dd/yyy'
                      onChange={e => value.handleClientDobChange(e.target.value)}
                    />
                    {this.context.ClientContact.ClientDob.touched && <ValidationError message={this.validateClientDob()} />}
                    <label 
                      htmlFor='delivery-instructions'
                      className='contact-label'
                    >
                        Delivery Instructions
                    </label>
                    <textarea
                      type='text'
                      name='delivery-instructions'
                      id='contact-delivery-instructions'
                      className='contact-input'
                      aria-required='true'
                      placeholder='i.e. come to the side door'
                      onChange={e => value.handleDeliveryInstructionsChange(e.target.value)}
                    />
                  </div>
                  <button
                    id='contact-button'
                    onClick={event => value.handleEditClientContactNext(event)}
                  >
                    Save
                  </button>
                </form>
        )
    }
}