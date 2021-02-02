import React, { ChangeEventHandler, useState } from 'react'

interface SignupFormState {
    name: string
    email: string
    phone: string
    password: string
}

const initialSignupFormState = {
  name: '',
  email: '',
  phone: '',
  password: '',
}

const SignupForm: React.FC = () => {
  const [form, setForm] = useState<SignupFormState>(initialSignupFormState)

  const {name, email, phone, password} = form

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
    setForm(initialSignupFormState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='name' placeholder='name' value={name} onChange={handleChange}></input>
      <input type='email' name='email' placeholder='email' value={email} onChange={handleChange}></input> 
      <input type='tel' name='phone' placeholder='phone' value={phone} onChange={handleChange}></input>
      <input type='password' name='password' placeholder='password' value={password}onChange={handleChange}></input>
      <button>Sign up</button>
    </form>
  )
}

export default SignupForm