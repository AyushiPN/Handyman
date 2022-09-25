import React from 'react'

import Alert from 'react-popup-alert'

const Popup = () => {
  const [alert, setAlert] = React.useState({
    type: 'error',
    text: 'This is a alert message',
    show: false
  })

  function onCloseAlert() {
    setAlert({
      type: '',
      text: '',
      show: false
    })
  }

  function onShowAlert(type) {
    setAlert({
      type: type,
      text: 'Pop up for Invalid Email and Email or phone number is already registered',
      show: true
    })
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
        <button onClick={() => onCloseAlert()}>Hide alert</button>
        
        <button onClick={() => onShowAlert('error')}>Show error alert</button>
        
      </div>
      <Alert
        
        btnText={'Close'}
        text={alert.text}
        type={alert.type}
        show={alert.show}
        onClosePress={onCloseAlert}
        pressCloseOnOutsideClick={true}
        showBorderBottom={true}
        alertStyles={{}}
        headerStyles={{}}
        textStyles={{}}
        buttonStyles={{}}
      />
    </div>
  )
}

export default Popup