import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function PatientSignIn() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = () => {
    console.log({ name, password })
    axios.post('https://reqres.in/api/login', {
      name: name,
      password: password,
    })
      .then(result => {
        console.log(result)
        alert('successful')
      })
      .catch(error => {
        console.log(error)
        alert('error')
      })
  }

  return (
    <>
      <div className='w-80 container mx-auto sm:w-[450px]'>
        <br />
        <form name='patientsignin' action="" className='text-start'>

          <label htmlFor="username" className='text-xl pl-1.5'>Patient Name</label>
          <input id="username" type="text" value={name} onChange={handleName} placeholder='  Enter name'
            className='rounded-2xl p-2 mb-4 mt-1.5 w-full shadow-lg shadow-cyan-500/20' /> <br />

          <label htmlFor="pswrd" className='text-xl pl-1.5'>Password</label>
          <input id="pswrd" type="password" value={password} onChange={handlePassword} placeholder='  Create password'
            className='rounded-2xl p-2 mb-4 mt-1.5  w-full shadow-lg shadow-cyan-500/20' /> <br /> <br />

          <button type="submit" onClick={handleApi} className='shadow-lg shadow-cyan-400/50 rounded-lg p-2 bg-cyan-600 w-full text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300'>
            Sign In
          </button>
          <p className='text-center cursor-pointer'><Link to="" >Forgot your Password?</Link> </p>
        </form>

      </div>
    </>
  )
}


