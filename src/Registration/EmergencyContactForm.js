import React, { Component } from 'react'
import ValidationError from '../ValidationError/ValidationError'
import TextInput from '../FormComponents/TextInput'
import SectionBanner from '../BasicComponents/SectionBanner'
import SubBanner from '../BasicComponents/SubBanner'
import Context from '../Context';
import './EmergencyContactForm.css'
import Button from '../BasicComponents/Button'

export default class EmergencyContactForm extends Component {
    static contextType = Context;
    validateEmergencyName1 = () => {
      const name = this.context.EmergencyContact.EmergencyName1.value;
      if (name.trim() === '') {
        return 'Name is required'
      }
    }
  
    validateEmergencyPhone1 = () => {
      const phone = this.context.EmergencyContact.EmergencyPhone1.value;
      const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  
      if (phone.trim() === '') {
        return 'Phone number is required'
      }
  
      if (phoneRegex.test(phone)) {
        //let formattedPhoneNumber = phone.replace(phoneRegex, '($1) $2-$3');
      } else {
          return 'Invalid phone number'
      }
    }

    validateEmergencyEmail1 = () => {
      const email = this.context.EmergencyContact.EmergencyEmail1.value;
      const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

      if (email.trim() === '') {
        return 'Email is required';
      }

      if (!emailRegex.test(email)) {
        return 'Invalid email address'
      }
    }
  
    validateEmergencyAddress1 = () => {
      const address = this.context.EmergencyContact.EmergencyAddress1.value;
      if (address.trim() === '') {
        return 'Address is required'
      }
    }
  
    validateEmergencyRelation1 = () => {
      const relation = this.context.EmergencyContact.EmergencyRelation1.value;
      if (relation.trim() === '') {
        return 'Relation is required'
      }
    }
  
    validateEmergencyPhone2 = () => {
      const phone = this.context.EmergencyContact.EmergencyPhone2.value;
      const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  
      if (phoneRegex.test(phone)) {
        //let formattedPhoneNumber = phone.replace(phoneRegex, '($1) $2-$3');
      } else {
          return 'Invalid phone number'
      }
    }

    validateEmergencyEmail2 = () => {
      const email = this.context.EmergencyContact.EmergencyEmail1.value;
      const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

      if (!emailRegex.test(email)) {
        return 'Invalid email address'
      }
    }
  
    render () {
        const value = this.context
        return(
            <form className='form-section'>
              <SectionBanner name='Emergency Contacts'/>
              <p>*explaination here*</p>
              <SubBanner name='Primary Contact' />
              <TextInput
                type='text'
                id='emergency-name-1'
                name='Name'
                required={true}
                placeholder='Emergency Contact Name'
                onChange={e => this.context.handleEmergencyName1(e.target.value)}
              />
              {value.EmergencyContact.EmergencyName1.touched && <ValidationError message={this.validateEmergencyName1()} />}
              <TextInput
                type='text'
                id='emergency-phone-1'
                name='Phone'
                required={true}
                placeholder='Emergency Contact Phone'
                onChange={e => this.context.handleEmergencyPhone1(e.target.value)}
              />
              {value.EmergencyContact.EmergencyPhone1.touched && <ValidationError message={this.validateEmergencyPhone1()} />}
              <TextInput
                type='text'
                id='emergency-email-1'
                name='Email'
                required={true}
                placeholder='Emergency Contact Email'
                onChange={e => this.context.handleEmergencyEmail1(e.target.value)}
              />
              
              {value.EmergencyContact.EmergencyEmail1.touched && <ValidationError message={this.validateEmergencyEmail1()} />}
              <TextInput
                type='text'
                id='emergency-address-1'
                name='Address'
                required={true}
                placeholder='Emergency Contact Addresss'
                onChange={e => this.context.handleEmergencyAddress1(e.target.value)}
              />
              {value.EmergencyContact.EmergencyAddress1.touched && <ValidationError message={this.validateEmergencyAddress1()} />}
              <TextInput
                type='text'
                id='emergency-relation-1'
                name='Relation'
                required={true}
                placeholder='Emergency Contact Relation'
                onChange={e => this.context.handleEmergencyRelation1(e.target.value)}
              />
              {value.EmergencyContact.EmergencyRelation1.touched && <ValidationError message={this.validateEmergencyRelation1()} />}
              <SubBanner name='Secondary Contact'/>
              <TextInput
                type='text'
                id='emergency-name-2'
                name='Name'
                required={false}
                placeholder='Emergency Contact Name'
                onChange={e => this.context.handleEmergencyName2(e.target.value)}
              />
              <TextInput
                type='text'
                id='emergency-Phone-2'
                name='Phone'
                required={false}
                placeholder='Emergency Contact Phone'
                onChange={e => this.context.handleEmergencyPhone2(e.target.value)}
              />
              {value.EmergencyContact.EmergencyPhone2.touched && <ValidationError message={this.validateEmergencyPhone2()} />}
              <TextInput
                type='text'
                id='emergency-email-2'
                name='Email'
                required={false}
                placeholder='Emergency Contact Email'
                onChange={e => this.context.handleEmergencyEmail2(e.target.value)}
              />
              {value.EmergencyContact.EmergencyEmail2.touched && <ValidationError message={this.validateEmergencyEmail2()} />}
              <TextInput
                type='text'
                id='emergency-address-2'
                name='Address'
                required={false}
                placeholder='Emergency Contact Name'
                onChange={e => this.context.handleEmergencyAddress2(e.target.value)}
              />
              <TextInput
                type='text'
                id='emergency-relation-2'
                name='Relation'
                required={false}
                placeholder='Emergency Contact Relation'
                onChange={e => this.context.handleEmergencyRelation2(e.target.value)}
              />
              <Button
                name='Continue'
                onClick={event => value.handleNextForEmergency(event)}
              />
            </form>
        )
    }
}