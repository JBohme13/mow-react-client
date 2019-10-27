import React from 'react'

const Context = React.createContext({
    LoginCreds: {},
    ClientContact: {},
    EmergencyContact: {},
    ClientInfo: {},
    history: {},
    handleUserNameChange: () => {},
    handlePasswordChange: () => {},
    handleNextForLandingPage: () => {},
    handleNextForContact: () => {},
    handleNextForEmergency: () => {},
    handleNextForInfo: () => {},
    handleComplete: () => {},
    handleServiceSubmit: () => {},
    handleEditClientContactNext: () => {},
    handleEditClientInfoNext: () => {},
    handleServiceStartChange: () => {},
    handleClientNameChange: () => {},
    handleClientPhoneChange: () => {},
    handleClientAddressChange: () => {},
    handleClientCityChange: () => {},
    handleClientZipChange: () => {},
    handleClientDobChange: () => {},
    handleDeliveryInstructionsChange: () => {},
    handleEmergencyName1: () => {},
    handleEmergencyPhone1: () => {},
    handleEmergencyAddress1: () => {},
    handleEmergencyRelation1: () => {},
    handleEmergencyName2: () => {},
    handleEmergencyPhone2: () => {},
    handleEmergencyAddress2: () => {},
    handleEmergencyRelation2: () => {},
    handleReasonForServiceChange: () => {},
    handleDietaryRestrictionsChange: () => {},
    handleFishSelectChange: () => {},
    handleLimitedVisionChange: () => {},
    handleLimitedHearingChange: () => {},
    handleRequireOxygenChange: () => {},
    handleSmokerChange: () => {},
    handleLimitedMobilityChange: () => {},
    handleConfusionChange: () => {},
    handleLifeLineChange: () => {},
    handlePetsChange: () => {},
    handleMedicationsChange: () => {},
    handleFormerMilitayrChange: () => {},
});

export default Context;