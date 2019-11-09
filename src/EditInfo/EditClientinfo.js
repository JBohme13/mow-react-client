import React, { Component } from 'react'
import Context from '../Context'
import ValidationError from '../ValidationError/ValidationError'
import SectionBanner from '../BasicComponents/SectionBanner'
import SubBanner from '../BasicComponents/SubBanner'
import Button from '../BasicComponents/Button'
import ExplainBox from '../BasicComponents/ExplainBox'
import TextArea from '../FormComponents/TextArea'
import Select from '../FormComponents/Select'

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
          <form className='form-section'>
            <SectionBanner name='Personal Information'/>
            <TextArea
              name='Reason For Service'
              id='form-reason-for-service'
              required={true}
              placeholder='*future instructions here*'
              onChange={e => value.handleReasonForServiceChange(e.target.value)}
            />
            {value.ClientInfo.ReasonForService.touched && <ValidationError message={this.validateReasonForService()} />}
            <TextArea
              name='Dietary Restrictions'
              id='form-dietary-restrictions'
              required={true}
              placeholder='*future instructions here*'
              onChange={e => value.handleDietaryRestrictionsChange(e.target.value)}
            />
            {value.ClientInfo.DietaryRestrictions.touched && <ValidationError message={this.validateDietaryRestrictions()} />}
            <SubBanner name='Do you have limitations with any of the following?'/>
            <Select
              name='Vision'
              id='form-select-1'
              required={false}
              onChange={e => value.handleLimitedVisionChange(e.target.value)}
              options={[
                {value: false, name: 'No'},
                {value: true, name: 'Yes'}
              ]}
            />
            {value.ClientInfo.LimitedVision === 'true' ? <ExplainBox id='form-select-1'/> : ''}
            <Select
              name='Hearing'
              id='form-select-2'
              required={false}
              onChange={e => value.handleLimitedHearingChange(e.target.value)}
              options={[
                {value: false, name: 'No'},
                {value: true, name: 'Yes'}
              ]}
            />
            {value.ClientInfo.LimitedHearing === 'true' ? <ExplainBox id='form-select-2'/> : ''}
            <Select
              name='Mobility'
              id='form-select-3'
              required={false}
              onChange={e => value.handleLimitedMobilityChange(e.target.value)}
              options={[
                {value: false, name: 'No'},
                {value: true, name: 'Yes'}
              ]}
            />
            {value.ClientInfo.LimitedMobility === 'true' ? <ExplainBox id='form-select-3'/> : ''}
            <Select
              name='Confusion'
              id='form-select-4'
              required={false}
              onChange={e => value.handleConfusionChange(e.target.value)}
              options={[
                {value: false, name: 'No'},
                {value: true, name: 'Yes'}
              ]}
            />
            {value.ClientInfo.Confusion === 'true' ? <ExplainBox id='form-select-4'/> : ''}
            <Select
              name='Do you require oxygen?'
              id='form-select-5'
              required={false}
              onChange={e => value.handleRequireOxygenChange(e.target.value)}
              options={[
                {value: false, name: 'No'},
                {value: true, name: 'Yes'}
              ]}
            />
            {value.ClientInfo.RequireOxygen === 'true' ? <ExplainBox id='form-select-5'/> : ''}
            <Select
              name='Are you a smoker?'
              id='form-select-6'
              required={false}
              onChange={e => value.handleSmokerChange(e.target.value)}
              options={[
                {value: false, name: 'No'},
                {value: true, name: 'Yes'}
              ]}
            />
            {value.ClientInfo.Smoker === 'true' ? <ExplainBox id='form-select-6'/> : ''}
            <Select
              name='Do you have Lifeline?'
              id='form-select-7'
              required={false}
              onChange={e => value.handleLifeLineChange(e.target.value)}
              options={[
                {value: false, name: 'No'},
                {value: true, name: 'yes'}
              ]}
            />
            {value.ClientInfo.Lifeline === 'true' ? <ExplainBox id='form-select-7'/> : ''}
            <Select
              name='Do you have any pets?'
              id='form-select-8'
              required={false}
              onChange={e => value.handlePetsChange(e.target.value)}
              options={[
                {value: false, name: 'No'},
                {value: true, name: 'Yes'}
              ]}
            />
            {value.ClientInfo.Pets === 'true' ? <ExplainBox id='form-select-8'/> : ''}
            <Select
              name='Do you take more than 4 medications daily?'
              id='form-select-9'
              required={false}
              onChange={e => value.handleMedicationsChange(e.target.value)}
              options={[
                {value: false, name: 'No'},
                {value: true, name: 'Yes'}
              ]}
            />
            {value.ClientInfo.MedsTaken === 'true' ? <ExplainBox id='form-select-9'/> : ''}
            <Select
              name='Are you former military?'
              id='form-select-10'
              required={false}
              onChange={e => value.handleFormerMilitayrChange(e.target.value)}
              options={[
                {value: false, name: 'No'},
                {value: true, name: 'Yes'}
              ]}
            />
            {value.ClientInfo.FormerMilitary === 'true' ? <ExplainBox id='form-select-10'/> : ''}
            <Button
              name='Save'
              onClick={event => value.handleEditClientInfoNext(event)}
            />
          </form>
        )
    }
}