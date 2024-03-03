import React from 'react';
import { useState } from 'react'
import axios from 'axios'

function PatientRegister() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [dob, setDob] = useState('')
    const [gender, setGender] = useState('')
    const [address, setAddress] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleDob = (e) => {
        setDob(e.target.value)
    }

    const handleGender = (e) => {
        setGender(e.target.value)
    }

    const handleAddress = (e) => {
        setAddress(e.target.value)
    }

    const handleApi = () => {
        console.log({ name, phone, email, password, dob, gender, address })
        axios.post('https://reqres.in/api/register', {
            name: name,
            phone: phone,
            email: email,
            password: password,
            dob: dob,
            gender: gender,
            address: address
           
        })
            .then(result => {                 //  executes when no error 
                console.log(result)
                  alert('successful')
            })
            .catch(error => {                  // executes when error  
                console.log(error)
                alert('error')
            })
    }

    
    return (
        <>    
        <div className='w-80 container mx-auto sm:w-[450px]'>
                <br />
                <form name='patientregister' action="" className=' text-start'>
                    <label htmlFor="username" className='text-xl pl-1.5'>Patient Name</label>
                    <input id="username" type="text" value={name} onChange={handleName} placeholder='  Enter name'
                        className='rounded-2xl p-2 mb-4 mt-1.5 w-full shadow-lg shadow-cyan-500/20'  /> <br />

                    <label htmlFor="phnum" className='text-xl pl-1.5'>Phone</label>
                    <input id="phnum" type="tel" value={phone} onChange={handlePhone} placeholder='  9876-543-210'
                        className='rounded-2xl p-2 mb-4 mt-1.5 w-full shadow-lg shadow-cyan-500/20'  /> <br />

                    <label htmlFor="mailid" className='text-xl pl-1.5'>Email</label>
                    <input id="mailid" type="mail" value={email} onChange={handleEmail} placeholder='  Enter email'
                        className='rounded-2xl p-2 mb-4 mt-1.5 w-full shadow-lg shadow-cyan-500/20'  /> <br />

                    <label htmlFor="pswrd" className='text-xl pl-1.5'>Password</label>
                    <input id="pswrd" type="password" value={password} onChange={handlePassword} placeholder='  Create password'
                        className='rounded-2xl p-2 mb-4 mt-1.5  w-full shadow-lg shadow-cyan-500/20'  /> <br />

                    <label htmlFor="birthdate" className='text-xl pl-1.5'>Date of Birth</label>
                    <input id="birthdate" type="date" value={dob} onChange={handleDob}
                        className='rounded-2xl p-2 mb-4 mt-1.5 w-full shadow-lg shadow-cyan-500/20'  /><br></br>

                    <label htmlFor="gen" className='text-xl pl-1.5'>Gender</label>
                    <select id="gen" className='rounded-2xl p-2 mb-4 mt-1.5 w-full shadow-lg shadow-cyan-500/20' onChange={handleGender}  >
                        <option value={gender}>Female</option>
                        <option value={gender}>Male</option>
                        <option value={gender}>Other</option>
                    </select> <br />

                    <label htmlFor="add" className='text-xl pl-1.5'>Address</label>
                    <input id="add" type="text" value={address} onChange={handleAddress} placeholder='  Enter address'
                        className='rounded-2xl p-2 mb-4 mt-1.5 w-full shadow-lg shadow-cyan-500/20'  /><br /><br />

                    <button type="submit" onClick={handleApi} className='shadow-lg shadow-cyan-400/50 rounded-lg p-2 mb-24 bg-cyan-600 w-full text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300'>
                        Sign Up
                    </button>

                </form>

            </div>
        </>
    )
}

export default PatientRegister
