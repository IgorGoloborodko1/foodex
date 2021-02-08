import React, { useState } from 'react'
import SignupForm from './signupForm/signupForm'
import SigninForm from './signinForm/signinForm'
import styles from './auth.module.css'

const Auth = () => {
  const [isSignedIn, setIsSignedIn] = useState(true)
  
  return (
    <div>
      <div className={styles.header}>
        <p>Sign in</p>
        <p>Sign up</p>
      </div>
      {isSignedIn ? <SignupForm /> : <SigninForm />}
    </div>
  )
}

export default Auth