import React, { Component } from 'react'
import Context from '../Context'
import ValidationError from '../ValidationError/ValidationError'

export default class EditClientinfo extends Component {
    static contextType = Context;

    validateReasonForService = () => {
      const reason = this.context.ClientInfo.ReasonForService.value;
      if (reason.trim() === '') {
        return 'Reason for service if required'
      }
    }

    validateDietaryRestrictions = () => {
      const diet = this.context.ClientInfo.DietaryRestrictions.value;
      if (diet.trim() === '') {
        return 'Dietary restrictions is required'
      }
    }
    render () {
        const value = this.context;
        return (
            <div className='form-container'>
              <form className='form-section'>
                <h3 id='client-banner'>Personal Information</h3>
                <label 
                  htmlFor='reason-for-service'
                  className='client-label'
                >
                  Reason for service
                </label>
                <textarea
                  name='reason-for-service'
                  id='form-reason-for-service'
                  className='client-textarea'
                  required={true}
                  aria-required='true'
                  placeholder='*future instructions here*'
                  onChange={e => value.handleReasonForServiceChange(e.target.value)}
                />
                {value.ClientInfo.ReasonForService.touched && <ValidationError message={this.validateReasonForService()} />}
                <label 
                  htmlFor='dietary-restrictions'
                  className='client-label'
                >
                  Dietary Restrictions
                </label>
                <textarea
                  name='dietary-restrictions'
                  id='form-dietary-restrictions'
                  className='client-textarea'
                  required={true}
                  aria-required='true'
                  placeholder='*future instructions here*'
                  onChange={e => value.handleDietaryRestrictionsChange(e.target.value)}
                />
                {value.ClientInfo.DietaryRestrictions.touched && <ValidationError message={this.validateDietaryRestrictions()} />}
                <label 
                  htmlFor='fish'
                  className='client-label'
                >
                  Do you eat Fish?
                </label>
                <select
                  name='fish'
                  id='client-select'
                  required={true}
                  aria-required='true'
                  onChange={e => value.handleFishSelectChange(e.target.value)}
                >
                    <option value=''>--Select one</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
                <h4 id='client-sub-banner'>Please select all that apply</h4>
                <div className='form-sub-container'>
                  <label 
                    htmlFor='checkbox-1'
                    className='client-label'
                  >
                    Limited Vision
                  </label>
                  <select
                    name='checkbox-1'
                    id='form-checkbox-1'
                    className='client-checkbox'
                    required={false}
                    onChange={e => value.handleLimitedVisionChange(e.target.value)}
                  >
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                  </select> 
                </div>
                <div className='form-sub-container'>
                  <label 
                    htmlFor='checkbox-2'
                    className='client-label'
                  >
                    Limited Hearing
                  </label>
                  <select 

                    name='checkbox-2'
                    id='form-checkbox-2'
                    className='client-checkbox'
                    required={false}
                    onChange={e => value.handleLimitedHearingChange(e.target.value)}
                  >
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                  </select> 
                </div>
                <div className='form-sub-container'>
                  <label 
                    htmlFor='checkbox-3'
                    className='client-label'
                  >
                    Require Oxygen
                  </label>
                  <select
                    name='checkbox-3'
                    id='form-checkbox-3'
                    className='client-checkbox'
                    required={false}
                    onChange={e => value.handleRequireOxygenChange(e.target.value)}
                  >
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                  </select> 
                </div>
                <div className='form-sub-container'>
                  <label 
                    htmlFor='checkbox-4'
                    className='client-label'
                  >
                    Smoker
                  </label>
                  <select
                    name='checkbox-4'
                    id='form-checkbox-4'
                    className='client-checkbox'
                    required={false}
                    onChange={e => value.handleSmokerChange(e.target.value)}
                  >
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                  </select> 
                </div>
                <div className='form-sub-container'>
                  <label 
                    htmlFor='checkbox-5'
                    className='client-label'
                  >
                    Limited Mobility
                  </label>
                  <select
                    name='checkbox-5'
                    id='form-checkbox-5'
                    className='client-checkbox'
                    required={false}
                    onChange={e => value.handleLimitedMobilityChange(e.target.value)}
                  >
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                  </select> 
                </div>
                <div className='form-sub-container'>
                  <label 
                    htmlFor='checkbox-6'
                    className='client-label'
                  >
                    Confusion
                  </label>
                  <select
                    name='checkbox-5'
                    id='form-checkbox-6'
                    className='client-checkbox'
                    required={false}
                    onChange={e => value.handleConfusionChange(e.target.value)}
                  >
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                  </select> 
                </div>
                <div className='form-sub-container'>
                  <label 
                    htmlFor='checkbox-7'
                    className='client-label'
                  >
                    Lifeline
                  </label>
                  <select
                    name='chekcbox-7'
                    id='form-checkbox-7'
                    className='client-checkbox'
                    required={false}
                    onChange={e => value.handleLifeLineChange(e.target.value)}
                  >
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                  </select> 
                </div>
                <div className='form-sub-container'>
                  <label 
                    htmlFor='checkbox-8'
                    className='client-label'
                  >
                    Pets
                  </label>
                  <select
                    name='checkbox-8'
                    id='form-checkbox-8'
                    className='client-checkbox'
                    required={false}
                    onChange={e => value.handlePetsChange(e.target.value)}
                  >
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                  </select> 
                </div>
                <div className='form-sub-container'>
                  <label 
                    htmlFor='checkbox-9'
                    className='client-label'
                  >
                    Medications taken more than 4 times daily
                  </label>
                  <select
                    name='checkbox-9'
                    id='form-checkbox-9'
                    className='client-checkbox'
                    required={false}
                    onChange={e => value.handleMedicationsChange(e.target.value)}
                  >
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                  </select> 
                </div>
                <div className='form-sub-container'>
                  <label 
                    htmlFor='checkbox-10'
                    className='client-label'
                  >
                    Former Military
                  </label>
                  <select
                    name='checkbox-10'
                    id='form-checkbox-10'
                    className='client-checkbox'
                    required={false}
                    onChange={e => value.handleFormerMilitayrChange(e.target.value)}
                  >
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                  </select> 
                </div>
                <button
                  id='client-button'
                  onClick={event => value.handleEditClientInfoNext(event)}
                >
                    Save
                </button>
              </form>
            </div>
        )
    }
}