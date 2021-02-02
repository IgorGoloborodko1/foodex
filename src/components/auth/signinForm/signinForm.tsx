import React, { useState } from 'react'

interface SigninFormState {
  email: string
  password: string
}

const initialSigninFormState = {
  email: '',
  password: ''
}

const SigninForm = () => {
  const [form, setForm] = useState<SigninFormState>(initialSigninFormState)

  const {email, password} = form

  //@ts-ignore
  const handleChange = ({target: {name, value}}) => {
    setForm((formValues) => ({
      ...formValues,
      [name]: value
    }))
  }

  //@ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    setForm(initialSigninFormState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='email' name='email' value={email} placeholder='email' onChange={handleChange}></input>
      <input type='password' name='password' value={password} placeholder='password' onChange={handleChange}></input>
      <button>Sign in</button>
    </form>
  )
}

export default SigninForm