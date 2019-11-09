import React, { Component } from 'react'
import ValidationError from '../ValidationError/ValidationError'
import TextArea from '../FormComponents/TextArea'
import Select from '../FormComponents/Select'
import SectionBanner from '../BasicComponents/SectionBanner'
import SubBanner from '../BasicComponents/SubBanner'
import Button from '../BasicComponents/Button'
import ExplainBox from '../BasicComponents/ExplainBox'
import Context from '../Context'
import './ClientInfoForm.css'

export default class ClientInfoForm extends Component {
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
              <SectionBanner name='Tell us a bit about yourself!' />
              <TextArea
                id='form-reason-for-service'
                name='Reason for service'
                required={true}
                placeholder='Some examples include'
                onChange={e => value.handleReasonForServiceChange(e.target.value)}
              />
              {value.ClientInfo.ReasonForService.touched && <ValidationError message={this.validateReasonForService()} />}
              <TextArea
                id='dietary-restrictions'
                name='Dietary Restrictions'
                required={true}
                placeholder=''
                onChange={e => value.handleDietaryRestrictionsChange(e.target.value)}
              />
              {value.ClientInfo.DietaryRestrictions.touched && <ValidationError message={this.validateDietaryRestrictions()} />}
              <SubBanner name='Do you have limitations with any of the following?'/>
              <Select
                id='client-select-1'
                name='Vision'
                required={true}
                onChange={e => value.handleLimitedVisionChange(e.target.value)}
                options={[{value: false, name: 'No'}, {value: true, name: 'Yes'}]}
              />
              {value.ClientInfo.LimitedVision === 'true' ? <ExplainBox id='client-select-1'/> : ''}
              <Select
                id='client-select-2'
                name='Hearing'
                reqired={true}
                onChange={e => value.handleLimitedHearingChange(e.target.value)}
                options={[{value: false, name: 'No'}, {value: true, name: 'Yes'}]}
              />
              {value.ClientInfo.LimitedHearing === 'true' ? <ExplainBox id='client-select-2'/> : ''}
              <Select
                id='client-select-5'
                name='Mobility'
                reqired={true}
                onChange={e => value.handleLimitedMobilityChange(e.target.value)}
                options={[{value: false, name: 'No'}, {value: true, name: 'Yes'}]}
              />
              {value.ClientInfo.LimitedMobility === 'true' ? <ExplainBox id='client-select-3'/> : ''}
              <Select
                id='client-select-6'
                name='Confusion'
                reqired={true}
                onChange={e => value.handleConfusionChange(e.target.value)}
                options={[{value: false, name: 'No'}, {value: true, name: 'Yes'}]}
              />
              {value.ClientInfo.Confusion === 'true' ? <ExplainBox id='client-select-4'/> : ''}
              <Select
                id='client-select-3'
                name='Do you require oxygen?'
                reqired={true}
                onChange={e => value.handleRequireOxygenChange(e.target.value)}
                options={[{value: false, name: 'No'}, {value: true, name: 'Yes'}]}
              />
              {value.ClientInfo.RequireOxygen === 'true' ? <ExplainBox id='client-select-5'/> : ''}
              <Select
                id='client-select-4'
                name='Are you a smoker?'
                reqired={true}
                onChange={e => value.handleSmokerChange(e.target.value)}
                options={[{value: false, name: 'No'}, {value: true, name: 'Yes'}]}
              />
              {value.ClientInfo.Smoker === 'true' ? <ExplainBox id='client-select-6'/> : ''}
              <Select
                id='client-select-7'
                name='Do you have Lifeline?'
                reqired={true}
                onChange={e => value.handleLifeLineChange(e.target.value)}
                options={[{value: false, name: 'No'}, {value: true, name: 'Yes'}]}
              />
              {value.ClientInfo.Lifeline === 'true' ? <ExplainBox id='client-select-7'/> : ''}
              <Select
                id='client-select-8'
                name='Do you have pets?'
                reqired={true}
                onChange={e => value.handlePetsChange(e.target.value)}
                options={[{value: false, name: 'No'}, {value: true, name: 'Yes'}]}
              />
              {value.ClientInfo.Pets === 'true' ? <ExplainBox id='client-select-8'/> : ''}
              <Select
                id='client-select-9'
                name='Do you take more than 4 medications daily?'
                reqired={true}
                onChange={e => value.handleMedicationsChange(e.target.value)}
                options={[{value: false, name: 'No'}, {value: true, name: 'Yes'}]}
              />
              {value.ClientInfo.MedsTaken === 'true' ? <ExplainBox id='client-select-9'/> : ''}
              <Select
                id='client-select-10'
                name='Are you a Military Veteran?'
                reqired={true}
                onChange={e => value.handleFormerMilitayrChange(e.target.value)}
                options={[{value: false, name: 'No'}, {value: true, name: 'Yes'}]}
              />
              {value.ClientInfo.FormerMilitary === 'true' ? <ExplainBox id='client-select-10'/> : ''}
              <Button
                name='Continue'
                onClick={event => value.handleNextForInfo(event)}
              />
            </form>

        )
    }
}