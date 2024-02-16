import React from 'react'

const RegisterContext = React.createContext({
  isRegistered: false,
  name: '',
  topic: '',
  changeRegistrationStatus: () => {},
  updateName: () => {},
  updateTopic: () => {},
  updateError: () => {},
})

export default RegisterContext
