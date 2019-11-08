import React, { Component } from 'react'
import Context from '../Context'
import './ClientContactForm.css'
import ValidationError from '../ValidationError/ValidationError';
import TextInput from '../FormComponents/TextInput';
import SectionBanner from '../BasicComponents/SectionBanner';
import TextArea from '../FormComponents/TextArea';
import Button from '../BasicComponents/Button';

export default class ClientContactForm extends Component {
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
      return 'Phone number is required';
    }

    if (phoneRegex.test(clientPhone)) {
      //let formattedPhoneNumber = clientPhone.replace(phoneRegex, '($1) $2-$3');
    } else {
        return 'Invalid phone number';
    }
  }

  validateClientEmail = () => {
    const clientEmail = this.context.ClientContact.ClientEmail.value;
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if (clientEmail.trim() === '') {
      return 'Email is required';
    }

    if (!emailRegex.test(clientEmail)) {
      return 'Invalid email address';
    }
  }

  validateClientAddress = () => {
    const clientAddress = this.context.ClientContact.ClientAddress.value;
    if (clientAddress.trim() === '') {
      return 'Address is required';
    }
  }

  validateClientCity = () => {
    const clientCity = this.context.ClientContact.ClientCity.value;
    if (clientCity.trim() === '') {
      return 'City is required';
    }
  }

  validateClientZip = () => {
    const clientZip = this.context.ClientContact.ClientZip.value;
    const zipRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (clientZip === '') {
      return 'Zip code is required';
    }

    if (!zipRegex.test(clientZip)) {
      return 'Invalid zip code';
    }
  }

  validateClientDob = () => {
    const clientDob = this.context.ClientContact.ClientDob.value;
    if (clientDob.trim() === '') {
      return 'Date of birth is required';
    }
  }

    render () {
      const value = this.context;
        return(
                <form className='form-section'>
                  <SectionBanner name='Client Contact Information'/>
                  <TextInput
                    type='text'
                    id='client-name'
                    name='Name'
                    required={true}
                    placeholder='Client Name'
                    onChange={e => value.handleClientNameChange(e.target.value)}
                  />
                  {this.context.ClientContact.ClientName.touched && <ValidationError message={this.validateClientName()} />}
                  <TextInput
                    type='text'
                    id='client-phone'
                    name='Phone'
                    required={true}
                    placeholder='(###) ### - ####'
                    onChange={e => value.handleClientPhoneChange(e.target.value)}
                  />
                  {this.context.ClientContact.ClientPhone.touched && <ValidationError message={this.validateClientPhone()} />}
                  <TextInput
                    type='text'
                    id='client-email'
                    name='Email'
                    required={true}
                    placeholder='ex. Jane@Gmail.com'
                    onChange={e => value.handleClientEmailChange(e.target.value)}
                  />
                  {this.context.ClientContact.ClientEmail.touched && <ValidationError message={this.validateClientEmail()} />}
                  <TextInput
                    type='text'
                    id='client-address'
                    name='Delivery Address'
                    required={true}
                    placeholder=''
                    onChange={e => value.handleClientAddressChange(e.target.value)}
                  />
                  {this.context.ClientContact.ClientAddress.touched && <ValidationError message={this.validateClientAddress()} />}
                  <TextInput
                    type='text'
                    id='client-city'
                    name='City'
                    required={true}
                    placeholder=''
                    onChange={e => value.handleClientCityChange(e.target.value)}
                  />
                  {this.context.ClientContact.ClientCity.touched && <ValidationError message={this.validateClientCity()} />}
                  <TextInput
                    type='text'
                    id='client-zip'
                    name='Zip Code'
                    required={true}
                    placeholder='#####'
                    onChange={e => value.handleClientZipChange(e.target.value)}
                  />
                  {this.context.ClientContact.ClientZip.touched && <ValidationError message={this.validateClientZip()} />}
                  <TextInput
                    type='date'
                    id='client-dob'
                    name='Date of Birth'
                    required={true}
                    placeholder='mm/dd/yyy'
                    onChange={e => value.handleClientDobChange(e.target.value)}
                  />
                  {this.context.ClientContact.ClientDob.touched && <ValidationError message={this.validateClientDob()} />}
                  <TextArea
                    name='Delivery Instructions'
                    id='contact-delivery-instructions'
                    required={true}
                    placeholder='i.e. come to the side door'
                    onChange={e => value.handleDeliveryInstructionsChange(e.target.value)}
                  />
                  <Button
                    name='Continue'
                    onClick={event => value.handleNextForContact(event)}
                  />
                </form>
        )
    }
}