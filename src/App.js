import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Main from './Main/Main'
import Header from './Header/Header'
import LandingPage from './LandingPage/LandingPage'
import Banner from './Banner/Banner'
import Home from './Home/Home'
import Nav from './Nav/Nav'
import Service from './Service/Service'
import EditInfo from './EditInfo/EditInfo'
import EditClientContact from './EditInfo/EditClientContact'
import EditEmergencyContact from './EditInfo/EditEmergencyContact'
import EditClientInfo from './EditInfo/EditClientinfo'
import LoginCredsForm from './Registration/LoginCredsForm'
import ClientContactForm from './Registration/ClientContactForm'
import EmergencyContactForm from './Registration/EmergencyContactForm'
import ClientInfoForm from './Registration/ClientInfoForm'
import Thankyou from './Registration/Thankyou'
import './App.css';
import Context from './Context';
import Login from './Login/Login';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      LoginCreds: {
        userName: {
          value: '',
          touched: false
        },
        password: {
          value: '',
          touched: false
        },
        RegisterSelect: ''
      },
      ClientContact: {
        serviceStart: {
          value: '',
          touched: false
        },
        ClientName: {
          value: '',
          touched: false
        },
        ClientPhone: {
          value: '',
          touched: false
        },
        ClientEmail: {
          value: '',
          touched: false
        },
        ClientAddress: {
          value: '',
          touched: false
        },
        ClientCity: {
          value: '',
          touched: false
        },
        ClientZip: {
          value: '',
          touched: false
        },
        ClientDob: {
          value: '',
          touched: false
        },
        DeliveryInstructions: {
          value: '',
          touched: false
        }
      },
      EmergencyContact: {
        EmergencyName1: {
          value: '',
          touched: false
        },
        EmergencyPhone1: {
          value: '',
          touched: false
        },
        EmergencyEmail1: {
          value: '',
          touched: false
        },
        EmergencyAddress1: {
          value: '',
          touched: false
        },
        EmergencyRelation1: {
          value: '',
          touched: false
        },
        EmergencyName2: {
          value: '',
          touched: false
        },
        EmergencyPhone2: {
          value: '',
          touched: false
        },
        EmergencyEmail2: {
          value: '',
          touched: false
        },
        EmergencyAddress2: {
          value: '',
          touched: false
        },
        EmergencyRelation2: {
          value: '',
          touched: false
        }
      },
      ClientInfo: {
        ReasonForService: {
          value: '',
          touched: false
        },
        DietaryRestrictions: {
          value: '',
          touched: false
        },
        DoYouEatFish: {
          value: '',
          touched: false
        },
        LimitedVision: false,
        LimitedHearing:false,
        RequireOxygen: false,
        Smoker: false,
        LimitedMobility: false,
        Confusion: false,
        Lifeline: false,
        Pets: false,
        MedsTaken: false,
        FormerMilitary: false,
      },
    }
  }

  handleNextForLandingPage = event => {
    event.preventDefault();
    this.props.history.push('/login');
  }

  handleNextForContact = event => {
    event.preventDefault();
    //fetch post here
    this.props.history.push('/emergency')
  }

  handleNextForEmergency = event => {
    event.preventDefault();
    //fetch post here
    this.props.history.push('/information')
  }

  handleNextForInfo = event => {
    event.preventDefault();
    // fetch post here
    this.props.history.push('/thankyou')
  }

  handleComplete = () => {
    this.props.history.push('/')

  }

  handleServiceSubmit = event => {
    event.preventDefault();
    this.props.history.push('/home')
  }

  handleEditClientContactNext = event => {
    event.preventDefault();
    this.props.history.push('/editInfo')
  }

  handleEditEmergencyNext = event => {
    event.preventDefault();
    this.props.history.push('/editInfo')
  }

  handleEditClientInfoNext = event => {
    event.preventDefault();
    this.props.history.push('/editInfo')
  }

  handleUserNameChange = value => {
    this.setState({
      LoginCreds: {
        userName: {
          value: value,
          touched: true
        },
        password: this.state.LoginCreds.password,
        RegisterSelect: this.state.LoginCreds.RegisterSelect
        
      }
    })
  }

  handlePasswordChange = value => {
    this.setState({
      LoginCreds: {
        userName: this.state.LoginCreds.userName,
        password: {
          value: value,
          touched: true
        },
        RegisterSelect: this.state.LoginCreds.RegisterSelect
      }
    })
  }

  handleRegisterSelectChange = value => {
    this.setState({
      LoginCreds: {
        userName: this.state.LoginCreds.userName,
        password: this.state.LoginCreds.password,
        RegisterSelect: value
      }
    })
  }
  //Moved service start from registration to service
  handleServiceStartChange = value => {
    this.setState({
      ClientContact: {
        serviceStart: {
          value: value,
          touched: true
        },
        ClientName: this.state.ClientContact.ClientName,
        ClientPhone: this.state.ClientContact.ClientPhone,
        ClientEmail: this.state.ClientContact.ClientEmail,
        ClientAddress: this.state.ClientContact.ClientAddress,
        ClientCity: this.state.ClientContact.ClientCity,
        ClientZip: this.state.ClientContact.ClientZip,
        ClientDob: this.state.ClientContact.ClientDob,
        DeliveryInstructions: this.state.ClientContact.DeliveryInstructions
      }
    })
  }

  handleClientNameChange = value => {
    this.setState({
      ClientContact: {
        serviceStart: this.state.ClientContact.serviceStart,
        ClientName: {
          value: value,
          touched: true
        },
        ClientPhone: this.state.ClientContact.ClientPhone,
        ClientEmail: this.state.ClientContact.ClientEmail,
        ClientAddress: this.state.ClientContact.ClientAddress,
        ClientCity: this.state.ClientContact.ClientCity,
        ClientZip: this.state.ClientContact.ClientZip,
        ClientDob: this.state.ClientContact.ClientDob,
        DeliveryInstructions: this.state.ClientContact.DeliveryInstructions
      } 
    })
  }

  handleClientPhoneChange = value => {
    this.setState({
      ClientContact: {
        serviceStart: this.state.ClientContact.serviceStart,
        ClientName: this.state.ClientContact.ClientName,
        ClientPhone: {
          value: value,
          touched: true
        },
        ClientEmail: this.state.ClientContact.ClientEmail,
        ClientAddress: this.state.ClientContact.ClientAddress,
        ClientCity: this.state.ClientContact.ClientCity,
        ClientZip: this.state.ClientContact.ClientZip,
        ClientDob: this.state.ClientContact.ClientDob,
        DeliveryInstructions: this.state.ClientContact.DeliveryInstructions
      }
    })
  }

  handleClientEmailChange = value => {
    this.setState({
      ClientContact: {
        serviceStart: this.state.ClientContact.serviceStart,
        ClientName: this.state.ClientContact.ClientName,
        ClientPhone: this.state.ClientContact.ClientPhone,
        ClientEmail: {
          value: value,
          touched: true
        },
        ClientAddress: this.state.ClientContact.ClientAddress,
        ClientCity: this.state.ClientContact.ClientCity,
        ClientZip: this.state.ClientContact.ClientZip,
        ClientDob: this.state.ClientContact.ClientDob,
        DeliveryInstructions: this.state.ClientContact.DeliveryInstructions
      }
    })
  }

  handleClientAddressChange = value => {
    this.setState({
      ClientContact: {
        serviceStart: this.state.ClientContact.serviceStart,
        ClientName: this.state.ClientContact.ClientName,
        ClientPhone: this.state.ClientContact.ClientPhone,
        ClientEmail: this.state.ClientContact.ClientEmail,
        ClientAddress: {
          value: value,
          touched: true
        },
        ClientCity: this.state.ClientContact.ClientCity,
        ClientZip: this.state.ClientContact.ClientZip,
        ClientDob: this.state.ClientContact.ClientDob,
        DeliveryInstructions: this.state.ClientContact.DeliveryInstructions
      }
    })
  }

  handleClientCityChange = value => {
    this.setState({
      ClientContact: {
        serviceStart: this.state.ClientContact.serviceStart,
        ClientName: this.state.ClientContact.ClientName,
        ClientPhone: this.state.ClientContact.ClientPhone,
        ClientEmail: this.state.ClientContact.ClientEmail,
        ClientAddress: this.state.ClientContact.ClientAddress,
        ClientCity: {
          value: value,
          touched: true
        },
        ClientZip: this.state.ClientContact.ClientZip,
        ClientDob: this.state.ClientContact.ClientDob,
        DeliveryInstructions: this.state.ClientContact.DeliveryInstructions
      }
    })
  }

  handleClientZipChange = value => {
    this.setState({
      ClientContact: {
        serviceStart: this.state.ClientContact.serviceStart,
        ClientName: this.state.ClientContact.ClientName,
        ClientPhone: this.state.ClientContact.ClientPhone,
        ClientEmail: this.state.ClientContact.ClientEmail,
        ClientAddress: this.state.ClientContact.ClientAddress,
        ClientCity: this.state.ClientContact.ClientCity,
        ClientZip: {
          value: value,
          touched: true
        },
        ClientDob: this.state.ClientContact.ClientDob,
        DeliveryInstructions: this.state.ClientContact.DeliveryInstructions
      }
    })
  }

  handleClientDobChange = value => {
    this.setState({
      ClientContact: {
        serviceStart: this.state.ClientContact.serviceStart,
        ClientName: this.state.ClientContact.ClientName,
        ClientPhone: this.state.ClientContact.ClientPhone,
        ClientEmail: this.state.ClientContact.ClientEmail,
        ClientAddress: this.state.ClientContact.ClientAddress,
        ClientCity: this.state.ClientContact.ClientCity,
        ClientZip: this.state.ClientContact.ClientZip,
        ClientDob: {
          value: value,
          touched: true
        },
        DeliveryInstructions: this.state.ClientContact.DeliveryInstructions
      }
    })
  }

  handleDeliveryInstructionsChange = value => {
    this.setState({
      ClientContact: {
        serviceStart: this.state.ClientContact.serviceStart,
        ClientName: this.state.ClientContact.ClientName,
        ClientPhone: this.state.ClientContact.ClientPhone,
        ClientEmail: this.state.ClientContact.ClientEmail,
        ClientAddress: this.state.ClientContact.ClientAddress,
        ClientCity: this.state.ClientContact.ClientCity,
        ClientZip: this.state.ClientContact.ClientZip,
        ClientDob: this.state.ClientContact.ClientDob,
        DeliveryInstructions: {
          value: value,
          touched: true
        }
      }
    })
  }

  handleEmergencyName1 = value => {
    this.setState({
      EmergencyContact: {
        EmergencyName1: {
          value: value,
          touched: true
        },
        EmergencyPhone1: this.state.EmergencyContact.EmergencyPhone1,
        EmergencyEmail1: this.state.EmergencyContact.EmergencyEmail1,
        EmergencyAddress1: this.state.EmergencyContact.EmergencyAddress1,
        EmergencyRelation1: this.state.EmergencyContact.EmergencyRelation1,
        EmergencyName2: this.state.EmergencyContact.EmergencyName2,
        EmergencyPhone2: this.state.EmergencyContact.EmergencyPhone2,
        EmergencyEmail2: this.state.EmergencyContact.EmergencyEmail2,
        EmergencyAddress2: this.state.EmergencyContact.EmergencyAddress2,
        EmergencyRelation2: this.state.EmergencyContact.EmergencyRelation2
      }
    })
  }

  handleEmergencyPhone1 = value => {
    this.setState({
      EmergencyContact: {
        EmergencyName1: this.state.EmergencyContact.EmergencyName1,
        EmergencyPhone1: {
          value: value,
          touched: true
        },
        EmergencyEmail1: this.state.EmergencyContact.EmergencyEmail1,
        EmergencyAddress1: this.state.EmergencyContact.EmergencyAddress1,
        EmergencyRelation1: this.state.EmergencyContact.EmergencyRelation1,
        EmergencyName2: this.state.EmergencyContact.EmergencyName2,
        EmergencyPhone2: this.state.EmergencyContact.EmergencyPhone2,
        EmergencyEmail2: this.state.EmergencyContact.EmergencyEmail2,
        EmergencyAddress2: this.state.EmergencyContact.EmergencyAddress2,
        EmergencyRelation2: this.state.EmergencyContact.EmergencyRelation2
      }
    })
  }

  handleEmergencyEmail1 = value => {
    this.setState({
      EmergencyContact: {
        EmergencyName1: this.state.EmergencyContact.EmergencyName1,
        EmergencyPhone1: this.state.EmergencyContact.EmergencyPhone1,
        EmergencyEmail1: {
          value: value,
          touched: true
        },
        EmergencyAddress1: this.state.EmergencyContact.EmergencyAddress1,
        EmergencyRelation1: this.state.EmergencyContact.EmergencyRelation1,
        EmergencyName2: this.state.EmergencyContact.EmergencyName2,
        EmergencyPhone2: this.state.EmergencyContact.EmergencyPhone2,
        EmergencyEmail2: this.state.EmergencyContact.EmergencyEmail2,
        EmergencyAddress2: this.state.EmergencyContact.EmergencyAddress2,
        EmergencyRelation2: this.state.EmergencyContact.EmergencyRelation2
      }
    })
  }

  handleEmergencyAddress1 = value => {
    this.setState({
      EmergencyContact: {
        EmergencyName1: this.state.EmergencyContact.EmergencyName1,
        EmergencyPhone1: this.state.EmergencyContact.EmergencyPhone1,
        EmergencyEmail1: this.state.EmergencyContact.EmergencyEmail1,
        EmergencyAddress1: {
          value: value,
          touched: true
        },
        EmergencyRelation1: this.state.EmergencyContact.EmergencyRelation1,
        EmergencyName2: this.state.EmergencyContact.EmergencyName2,
        EmergencyPhone2: this.state.EmergencyContact.EmergencyPhone2,
        EmergencyEmail2: this.state.EmergencyContact.EmergencyEmail2,
        EmergencyAddress2: this.state.EmergencyContact.EmergencyAddress2,
        EmergencyRelation2: this.state.EmergencyContact.EmergencyRelation2
      }
    })
  }

  handleEmergencyRelation1 = value => {
    this.setState({
      EmergencyContact: {
        EmergencyName1: this.state.EmergencyContact.EmergencyName1,
        EmergencyPhone1: this.state.EmergencyContact.EmergencyPhone1,
        EmergencyEmail1: this.state.EmergencyContact.EmergencyEmail1,
        EmergencyAddress1: this.state.EmergencyContact.EmergencyAddress1,
        EmergencyRelation1: {
          value: value,
          touched: true
        },
        EmergencyName2: this.state.EmergencyContact.EmergencyName2,
        EmergencyPhone2: this.state.EmergencyContact.EmergencyPhone2,
        EmergencyEmail2: this.state.EmergencyContact.EmergencyEmail2,
        EmergencyAddress2: this.state.EmergencyContact.EmergencyAddress2,
        EmergencyRelation2: this.state.EmergencyContact.EmergencyRelation2
      }
    })
  }

  handleEmergencyName2 = value => {
    this.setState({
      EmergencyContact: {
        EmergencyName1: this.state.EmergencyContact.EmergencyName1,
        EmergencyPhone1: this.state.EmergencyContact.EmergencyPhone1,
        EmergencyEmail1: this.state.EmergencyContact.EmergencyEmail1,
        EmergencyAddress1: this.state.EmergencyContact.EmergencyAddress1,
        EmergencyRelation1: this.state.EmergencyContact.EmergencyRelation1,
        EmergencyName2: {
          value: value,
          touched: true
        },
        EmergencyPhone2: this.state.EmergencyContact.EmergencyPhone2,
        EmergencyEmail2: this.state.EmergencyContact.EmergencyEmail2,
        EmergencyAddress2: this.state.EmergencyContact.EmergencyAddress2,
        EmergencyRelation2: this.state.EmergencyContact.EmergencyRelation2
      }
    })
  }

  handleEmergencyPhone2 = value => {
    this.setState({
      EmergencyContact: {
        EmergencyName1: this.state.EmergencyContact.EmergencyName1,
        EmergencyPhone1: this.state.EmergencyContact.EmergencyPhone1,
        EmergencyEmail1: this.state.EmergencyContact.EmergencyEmail1,
        EmergencyAddress1: this.state.EmergencyContact.EmergencyAddress1,
        EmergencyRelation1: this.state.EmergencyContact.EmergencyRelation1,
        EmergencyName2: this.state.EmergencyContact.EmergencyName2,
        EmergencyPhone2: {
          value: value,
          touched: true
        },
        EmergencyEmail2: this.state.EmergencyContact.EmergencyEmail2,
        EmergencyAddress2: this.state.EmergencyContact.EmergencyAddress2,
        EmergencyRelation2: this.state.EmergencyContact.EmergencyRelation2
      }
    })
  }
  
  handleEmergencyEmail2 = value => {
    this.setState({
      EmergencyContact: {
        EmergencyName1: this.state.EmergencyContact.EmergencyName1,
        EmergencyPhone1: this.state.EmergencyContact.EmergencyPhone1,
        EmergencyEmail1: this.state.EmergencyContact.EmergencyEmail1,
        EmergencyAddress1: this.state.EmergencyContact.EmergencyAddress1,
        EmergencyRelation1: this.state.EmergencyContact.EmergencyRelation1,
        EmergencyName2: this.state.EmergencyContact.EmergencyName2,
        EmergencyPhone2: this.state.EmergencyContact.EmergencyPhone2,
        EmergencyEmail2: {
          value: value,
          touched: true
        },
        EmergencyAddress2: this.state.EmergencyContact.EmergencyAddress2,
        EmergencyRelation2: this.state.EmergencyContact.EmergencyRelation2
      }
    })
  }
  
  handleEmergencyAddress2 = value => {
    this.setState({
      EmergencyContact: {
        EmergencyName1: this.state.EmergencyContact.EmergencyName1,
        EmergencyPhone1: this.state.EmergencyContact.EmergencyPhone1,
        EmergencyEmail1: this.state.EmergencyContact.EmergencyEmail1,
        EmergencyAddress1: this.state.EmergencyContact.EmergencyAddress1,
        EmergencyRelation1: this.state.EmergencyContact.EmergencyRelation1,
        EmergencyName2: this.state.EmergencyContact.EmergencyName2,
        EmergencyPhone2: this.state.EmergencyContact.EmergencyPhone2,
        EmergencyEmail2: this.state.EmergencyContact.EmergencyEmail2,
        EmergencyAddress2: {
          value: value,
          touched: true
        },
        EmergencyRelation2: this.state.EmergencyContact.EmergencyRelation2
      }
    })
  }

  handleEmergencyRelation2 = value => {
    this.setState({
      EmergencyContact: {
        EmergencyName1: this.state.EmergencyContact.EmergencyName1,
        EmergencyPhone1: this.state.EmergencyContact.EmergencyPhone1,
        EmergencyEmail1: this.state.EmergencyContact.EmergencyEmail1,
        EmergencyAddress1: this.state.EmergencyContact.EmergencyAddress1,
        EmergencyRelation1: this.state.EmergencyContact.EmergencyRelation1,
        EmergencyName2: this.state.EmergencyContact.EmergencyName2,
        EmergencyPhone2: this.state.EmergencyContact.EmergencyPhone2,
        EmergencyEmail2: this.state.EmergencyContact.EmergencyEmail2,
        EmergencyAddress2: this.state.EmergencyContact.EmergencyAddress2,
        EmergencyRelation2: {
          value: value,
          touched: true
        }
      }
    })
  }

  handleReasonForServiceChange = value => {
    this.setState({
      ClientInfo: {
        ReasonForService: {
          value: value,
          touched: true
        },
        DietaryRestrictions: this.state.ClientInfo.DietaryRestrictions,
        DoYouEatFish: this.state.ClientInfo.DoYouEatFish,
        LimitedVision: this.state.ClientInfo.LimitedVision,
        LimitedHearing: this.state.ClientInfo.LimitedHearing,
        RequireOxygen: this.state.ClientInfo.RequireOxygen,
        Smoker: this.state.ClientInfo.Smoker,
        LimitedMobility: this.state.ClientInfo.LimitedMobility,
        Confusion: this.state.ClientInfo.Confusion,
        Lifeline: this.state.ClientInfo.Lifeline,
        Pets: this.state.ClientInfo.Pets,
        MedsTaken: this.state.ClientInfo.MedsTaken,
        FormerMilitary: this.state.ClientInfo.FormerMilitary,
      }
    })
  }

  handleDietaryRestrictionsChange = value => {
    this.setState({
      ClientInfo: {
        ReasonForService: this.state.ClientInfo.ReasonForService,
        DietaryRestrictions: {
          value: value,
          touched: true
        },
        DoYouEatFish: this.state.ClientInfo.DoYouEatFish,
        LimitedVision: this.state.ClientInfo.LimitedVision,
        LimitedHearing: this.state.ClientInfo.LimitedHearing,
        RequireOxygen: this.state.ClientInfo.RequireOxygen,
        Smoker: this.state.ClientInfo.Smoker,
        LimitedMobility: this.state.ClientInfo.LimitedMobility,
        Confusion: this.state.ClientInfo.Confusion,
        Lifeline: this.state.ClientInfo.Lifeline,
        Pets: this.state.ClientInfo.Pets,
        MedsTaken: this.state.ClientInfo.MedsTaken,
        FormerMilitary: this.state.ClientInfo.FormerMilitary,
      }
    })
  }

  handleFishSelectChange = value => {
    this.setState({
      ClientInfo: {
        ReasonForService: this.state.ClientInfo.ReasonForService,
        DietaryRestrictions: this.state.ClientInfo.DietaryRestrictions,
        DoYouEatFish: {
          value: value,
          touched: true
        },
        LimitedVision: this.state.ClientInfo.LimitedVision,
        LimitedHearing: this.state.ClientInfo.LimitedHearing,
        RequireOxygen: this.state.ClientInfo.RequireOxygen,
        Smoker: this.state.ClientInfo.Smoker,
        LimitedMobility: this.state.ClientInfo.LimitedMobility,
        Confusion: this.state.ClientInfo.Confusion,
        Lifeline: this.state.ClientInfo.Lifeline,
        Pets: this.state.ClientInfo.Pets,
        MedsTaken: this.state.ClientInfo.MedsTaken,
        FormerMilitary: this.state.ClientInfo.FormerMilitary,
      }
    })
  }

  handleLimitedVisionChange = value => {
    this.setState({
      ClientInfo: {
        ReasonForService: this.state.ClientInfo.ReasonForService,
        DietaryRestrictions: this.state.ClientInfo.DietaryRestrictions,
        DoYouEatFish: this.state.ClientInfo.DoYouEatFish,
        LimitedVision: value,
        LimitedHearing: this.state.ClientInfo.LimitedHearing,
        RequireOxygen: this.state.ClientInfo.RequireOxygen,
        Smoker: this.state.ClientInfo.Smoker,
        LimitedMobility: this.state.ClientInfo.LimitedMobility,
        Confusion: this.state.ClientInfo.Confusion,
        Lifeline: this.state.ClientInfo.Lifeline,
        Pets: this.state.ClientInfo.Pets,
        MedsTaken: this.state.ClientInfo.MedsTaken,
        FormerMilitary: this.state.ClientInfo.FormerMilitary,
      }
    })
  }

  handleLimitedHearingChange = value => {
    this.setState({
      ClientInfo: {
        ReasonForService: this.state.ClientInfo.ReasonForService,
        DietaryRestrictions: this.state.ClientInfo.DietaryRestrictions,
        DoYouEatFish: this.state.ClientInfo.DoYouEatFish,
        LimitedVision: this.state.ClientInfo.LimitedVision,
        LimitedHearing: value,
        RequireOxygen: this.state.ClientInfo.RequireOxygen,
        Smoker: this.state.ClientInfo.Smoker,
        LimitedMobility: this.state.ClientInfo.LimitedMobility,
        Confusion: this.state.ClientInfo.Confusion,
        Lifeline: this.state.ClientInfo.Lifeline,
        Pets: this.state.ClientInfo.Pets,
        MedsTaken: this.state.ClientInfo.MedsTaken,
        FormerMilitary: this.state.ClientInfo.FormerMilitary,
      }
    })
  }

  handleRequireOxygenChange = value => {
    this.setState({
      ClientInfo: {
        ReasonForService: this.state.ClientInfo.ReasonForService,
        DietaryRestrictions: this.state.ClientInfo.DietaryRestrictions,
        DoYouEatFish: this.state.ClientInfo.DoYouEatFish,
        LimitedVision: this.state.ClientInfo.LimitedVision,
        LimitedHearing: this.state.ClientInfo.LimitedHearing,
        RequireOxygen: value,
        Smoker: this.state.ClientInfo.Smoker,
        LimitedMobility: this.state.ClientInfo.LimitedMobility,
        Confusion: this.state.ClientInfo.Confusion,
        Lifeline: this.state.ClientInfo.Lifeline,
        Pets: this.state.ClientInfo.Pets,
        MedsTaken: this.state.ClientInfo.MedsTaken,
        FormerMilitary: this.state.ClientInfo.FormerMilitary,
      }
    })
  }

  handleSmokerChange = value => {
    this.setState({
      ClientInfo: {
        ReasonForService: this.state.ClientInfo.ReasonForService,
        DietaryRestrictions: this.state.ClientInfo.DietaryRestrictions,
        DoYouEatFish: this.state.ClientInfo.DoYouEatFish,
        LimitedVision: this.state.ClientInfo.LimitedVision,
        LimitedHearing: this.state.ClientInfo.LimitedHearing,
        RequireOxygen: this.state.ClientInfo.RequireOxygen,
        Smoker: value,
        LimitedMobility: this.state.ClientInfo.LimitedMobility,
        Confusion: this.state.ClientInfo.Confusion,
        Lifeline: this.state.ClientInfo.Lifeline,
        Pets: this.state.ClientInfo.Pets,
        MedsTaken: this.state.ClientInfo.MedsTaken,
        FormerMilitary: this.state.ClientInfo.FormerMilitary,
      }
    })
  }

  handleLimitedMobilityChange = value => {
    this.setState({
      ClientInfo: {
        ReasonForService: this.state.ClientInfo.ReasonForService,
        DietaryRestrictions: this.state.ClientInfo.DietaryRestrictions,
        DoYouEatFish: this.state.ClientInfo.DoYouEatFish,
        LimitedVision: this.state.ClientInfo.LimitedVision,
        LimitedHearing: this.state.ClientInfo.LimitedHearing,
        RequireOxygen: this.state.ClientInfo.RequireOxygen,
        Smoker: this.state.ClientInfo.Smoker,
        LimitedMobility: value,
        Confusion: this.state.ClientInfo.Confusion,
        Lifeline: this.state.ClientInfo.Lifeline,
        Pets: this.state.ClientInfo.Pets,
        MedsTaken: this.state.ClientInfo.MedsTaken,
        FormerMilitary: this.state.ClientInfo.FormerMilitary,
      }
    })
  }

  handleConfusionChange = value => {
    this.setState({
      ClientInfo: {
        ReasonForService: this.state.ClientInfo.ReasonForService,
        DietaryRestrictions: this.state.ClientInfo.DietaryRestrictions,
        DoYouEatFish: this.state.ClientInfo.DoYouEatFish,
        LimitedVision: this.state.ClientInfo.LimitedVision,
        LimitedHearing: this.state.ClientInfo.LimitedHearing,
        RequireOxygen: this.state.ClientInfo.RequireOxygen,
        Smoker: this.state.ClientInfo.Smoker,
        LimitedMobility: this.state.ClientInfo.LimitedMobility,
        Confusion: value,
        Lifeline: this.state.ClientInfo.Lifeline,
        Pets: this.state.ClientInfo.Pets,
        MedsTaken: this.state.ClientInfo.MedsTaken,
        FormerMilitary: this.state.ClientInfo.FormerMilitary,
      }
    })
  }

  handleLifeLineChange = value => {
    this.setState({
      ClientInfo: {
        ReasonForService: this.state.ClientInfo.ReasonForService,
        DietaryRestrictions: this.state.ClientInfo.DietaryRestrictions,
        DoYouEatFish: this.state.ClientInfo.DoYouEatFish,
        LimitedVision: this.state.ClientInfo.LimitedVision,
        LimitedHearing: this.state.ClientInfo.LimitedHearing,
        RequireOxygen: this.state.ClientInfo.RequireOxygen,
        Smoker: this.state.ClientInfo.Smoker,
        LimitedMobility: this.state.ClientInfo.LimitedMobility,
        Confusion: this.state.ClientInfo.Confusion,
        Lifeline: value,
        Pets: this.state.ClientInfo.Pets,
        MedsTaken: this.state.ClientInfo.MedsTaken,
        FormerMilitary: this.state.ClientInfo.FormerMilitary,
      }
    })
  }

  handlePetsChange = value => {
    this.setState({
      ClientInfo: {
        ReasonForService: this.state.ClientInfo.ReasonForService,
        DietaryRestrictions: this.state.ClientInfo.DietaryRestrictions,
        DoYouEatFish: this.state.ClientInfo.DoYouEatFish,
        LimitedVision: this.state.ClientInfo.LimitedVision,
        LimitedHearing: this.state.ClientInfo.LimitedHearing,
        RequireOxygen: this.state.ClientInfo.RequireOxygen,
        Smoker: this.state.ClientInfo.Smoker,
        LimitedMobility: this.state.ClientInfo.LimitedMobility,
        Confusion: this.state.ClientInfo.Confusion,
        Lifeline: this.state.ClientInfo.Lifeline,
        Pets: value,
        MedsTaken: this.state.ClientInfo.MedsTaken,
        FormerMilitary: this.state.ClientInfo.FormerMilitary,
      }
    })
  }

  handleMedicationsChange = value => {
    this.setState({
      ClientInfo: {
        ReasonForService: this.state.ClientInfo.ReasonForService,
        DietaryRestrictions: this.state.ClientInfo.DietaryRestrictions,
        DoYouEatFish: this.state.ClientInfo.DoYouEatFish,
        LimitedVision: this.state.ClientInfo.LimitedVision,
        LimitedHearing: this.state.ClientInfo.LimitedHearing,
        RequireOxygen: this.state.ClientInfo.RequireOxygen,
        Smoker: this.state.ClientInfo.Smoker,
        LimitedMobility: this.state.ClientInfo.LimitedMobility,
        Confusion: this.state.ClientInfo.Confusion,
        Lifeline: this.state.ClientInfo.Lifeline,
        Pets: this.state.ClientInfo.Pets,
        MedsTaken: value,
        FormerMilitary: this.state.ClientInfo.FormerMilitary,
      }
    })
  }

  handleFormerMilitayrChange = value => {
    this.setState({
      ClientInfo: {
        ReasonForService: this.state.ClientInfo.ReasonForService,
        DietaryRestrictions: this.state.ClientInfo.DietaryRestrictions,
        DoYouEatFish: this.state.ClientInfo.DoYouEatFish,
        LimitedVision: this.state.ClientInfo.LimitedVision,
        LimitedHearing: this.state.ClientInfo.LimitedHearing,
        RequireOxygen: this.state.ClientInfo.RequireOxygen,
        Smoker: this.state.ClientInfo.Smoker,
        LimitedMobility: this.state.ClientInfo.LimitedMobility,
        Confusion: this.state.ClientInfo.Confusion,
        Lifeline: this.state.ClientInfo.Lifeline,
        Pets: this.state.ClientInfo.Pets,
        MedsTaken: this.state.ClientInfo.MedsTaken,
        FormerMilitary: value,
      }
    })
  }

  render () {
    const routes = [
      {
        path: '/',
        exact: true,
        main: LandingPage,
        header: Banner,
      },
      {
        path: '/login',
        exact: false,
        main: Login,
        header: Banner,
      },
      {
        path: '/home',
        exact: false,
        main: Home,
        header: Nav,
      },
      {
        path: '/service',
        exact: false,
        main: Service,
        header: Nav,
      },
      {
        path: '/editInfo',
        exact: false,
        main: EditInfo,
        header: Nav,
      },
      {
        path: '/editContact',
        exact: false,
        main: EditClientContact,
        header: Nav
      },
      {
        path: '/editEmergency',
        exact: false,
        main: EditEmergencyContact,
        header: Nav
      },
      {
        path: '/editInformation',
        exact: false,
        main: EditClientInfo,
        header: Nav
      },
      {
        path: '/newLogin',
        exact: false,
        main: LoginCredsForm,
        header: Banner,
      },
      {
        path: '/contact',
        exact: false,
        main: ClientContactForm,
        header: Banner,
      },
      {
        path: '/emergency',
        exact: false,
        main: EmergencyContactForm,
        header: Banner,
      },
      {
        path: '/information',
        exact: false,
        main: ClientInfoForm,
        header: Banner,
      },
      {
        path: '/thankyou',
        exact: false,
        main: Thankyou,
        header: Banner,
      }
    ];

    const contextValue = {
      LoginCreds: this.state.LoginCreds,
      ClientContact: this.state.ClientContact,
      EmergencyContact: this.state.EmergencyContact,
      ClientInfo: this.state.ClientInfo,
      history: this.props.history,
      handleUserNameChange: this.handleUserNameChange,
      handlePasswordChange: this.handlePasswordChange,
      handleRegisterSelectChange: this.handleRegisterSelectChange,
      handleNextForLandingPage: this.handleNextForLandingPage,
      handleNextForContact: this.handleNextForContact,
      handleNextForEmergency: this.handleNextForEmergency,
      handleNextForInfo: this.handleNextForInfo,
      handleComplete: this.handleComplete,
      handleServiceSubmit: this.handleServiceSubmit,
      handleEditClientContactNext: this.handleEditClientContactNext,
      handleEditEmergencyNext: this.handleEditEmergencyNext,
      handleEditClientInfoNext: this.handleEditClientInfoNext,
      handleServiceStartChange: this.handleServiceStartChange,
      handleClientNameChange: this.handleClientNameChange,
      handleClientPhoneChange: this.handleClientPhoneChange,
      handleClientEmailChange: this.handleClientEmailChange,
      handleClientAddressChange: this.handleClientAddressChange,
      handleClientCityChange: this.handleClientCityChange,
      handleClientZipChange: this.handleClientZipChange,
      handleClientDobChange: this.handleClientDobChange,
      handleDeliveryInstructionsChange: this.handleDeliveryInstructionsChange,
      handleEmergencyName1: this.handleEmergencyName1,
      handleEmergencyPhone1: this.handleEmergencyPhone1,
      handleEmergencyEmail1: this.handleEmergencyEmail1,
      handleEmergencyAddress1: this.handleEmergencyAddress1,
      handleEmergencyRelation1: this.handleEmergencyRelation1,
      handleEmergencyName2: this.handleEmergencyName2,
      handleEmergencyPhone2: this.handleEmergencyPhone2,
      handleEmergencyEmail2: this.handleEmergencyEmail2,
      handleEmergencyAddress2: this.handleEmergencyAddress2,
      handleEmergencyRelation2: this.handleEmergencyRelation2,
      handleReasonForServiceChange: this.handleReasonForServiceChange,
      handleDietaryRestrictionsChange: this.handleDietaryRestrictionsChange,
      handleFishSelectChange: this.handleFishSelectChange,
      handleLimitedVisionChange: this.handleLimitedVisionChange,
      handleLimitedHearingChange: this.handleLimitedHearingChange,
      handleRequireOxygenChange: this.handleRequireOxygenChange,
      handleSmokerChange: this.handleSmokerChange,
      handleLimitedMobilityChange: this.handleLimitedMobilityChange,
      handleConfusionChange: this.handleConfusionChange,
      handleLifeLineChange: this.handleLifeLineChange,
      handlePetsChange: this.handlePetsChange,
      handleMedicationsChange: this.handleMedicationsChange,
      handleFormerMilitayrChange: this.handleFormerMilitayrChange
    }

    return(
      <Context.Provider
        value={contextValue}>
        <main id='app-container'>
          <Header routes={routes} />
          <Main routes={routes} />
        </main>
      </Context.Provider>
    )
  }
}

export default withRouter(App)