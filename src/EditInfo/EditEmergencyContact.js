import React, { Component } from 'react'
import Context from '../Context'
import ValidationError from '../ValidationError/ValidationError'

export default class EditEmergencyContact extends Component {
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
  
    render () {
        const value = this.context
        return(
          <form>
            <div className='form-section'>
              <h3 id='emergency-banner'>Emergency Contacts</h3>
              <h4 className='emergency-sub-banner'>Primary Contact</h4>
              <label 
                htmlFor='emergency-name-1'
                className='emergency-label'
              >
                Name
              </label>
              <input
                type='text'
                name='emergency-name-1'
                id='form-emergency-name-1'
                className='emergency-input'
                required={true}
                aria-required='true'
                placeholder='Emergency Contact Name'
                onChange={e => value.handleEmergencyName1(e.target.value)}
              />
              {value.EmergencyContact.EmergencyName1.touched && <ValidationError message={this.validateEmergencyName1()} />}
              <label 
                htmlFor='emergency-phone-1'
                className='emergency-label'
              >
                Phone
              </label>
              <input
                type='text'
                name='emergency-phone-1'
                id='form-emergency-phone-1'
                className='emergency-input'
                required={true}
                aria-required='true'
                placeholder='Emergency Contact Phone'
                onChange={e => value.handleEmergencyPhone1(e.target.value)}
              />
              {value.EmergencyContact.EmergencyPhone1.touched && <ValidationError message={this.validateEmergencyPhone1()} />}
              <label 
                htmlFor='emergency-address-1'
                className='emergency-label'
              >
                Address
              </label>
              <input
                type='text'
                name='emergency-address-1'
                id='form-emergency-address-1'
                className='emergency-input'
                required={true}
                aria-required='true'
                placeholder='Emergency Contact Address'
                onChange={e => value.handleEmergencyAddress1(e.target.value)}
              />
              {value.EmergencyContact.EmergencyAddress1.touched && <ValidationError message={this.validateEmergencyAddress1()} />}
              <label 
                htmlFor='emergency-relation-1'
                className='emergency-label'
              >
                Relation
              </label>
              <input
                type='text'
                name='emergency-relation-1'
                id='form-emergency-relation-1'
                className='emergency-input'
                required={true}
                aria-required='true'
                placeholder='Relation to Customer'
                onChange={e => value.handleEmergencyRelation1(e.target.value)}
              />
              {value.EmergencyContact.EmergencyRelation1.touched && <ValidationError message={this.validateEmergencyRelation1()} />}
              <h4 className='emergency-sub-banner'>Secondary Contact</h4>
              <label 
                htmlFor='emergency-name-2'
                className='emergency-label'
              >
                Name
              </label>
              <input
                type='text'
                name='emergency-name-2'
                id='form-emergency-name-2'
                className='emergency-input'
                required={false}
                aria-required='false'
                placeholder='Emergency Contact Name'
                onChange={e => value.handleEmergencyName2(e.target.value)}
              />
              <label 
                htmlFor='emergency-phone-2'
                className='emergency-label'
              >
                Phone
              </label>
              <input
                type='text'
                name='emergency-phone-2'
                id='form-emergency-phone-2'
                className='emergency-input'
                required={true}
                aria-required='true'
                placeholder='Emergency Contact Phone'
                onChange={e => value.handleEmergencyPhone2(e.target.value)}
              />
              {value.EmergencyContact.EmergencyPhone2.touched && <ValidationError message={this.validateEmergencyPhone2()} />}
              <label 
                htmlFor='emergency-address-2'
                className='emergency-label'
              >
                Address
              </label>
              <input
                type='text'
                name='emergency-address-1'
                id='form-emergency-address-2'
                className='emergency-input'
                required={true}
                aria-required='true'
                placeholder='Emergency Contact Address'
                onChange={e => value.handleEmergencyAddress2(e.target.value)}
              />
              <label 
                htmlFor='emergency-relation-2'
                className='emergency-label'
              >
                Relation
              </label>
              <input
                type='text'
                name='emergency-relation-2'
                id='form-emergency-relation-2'
                className='emergency-input'
                required={true}
                aria-required='true'
                placeholder='Relation to Customer'
                onChange={e => value.handleEmergencyRelation2(e.target.value)}
              />
            </div>
            <button
              id='emergency-button'
              onClick={event => value.handleEditEmergencyNext(event)}
            >
                Save
            </button>
          </form>
        )
    }
}