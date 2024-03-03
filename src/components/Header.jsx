import React from 'react'
import logos from './../assets/logos/silicon.png';

function Header() {
  return (
    <>
    <div className='bg-cyan-500 w-full h-8 fixed top-0 mb-4'>
    </div>
    <br />
    <div className='flex justify-center p-4 text-cyan-600'>
                <img src= {logos} alt="logo" width={30} height={30} />
                <h1 className='text-2xl'><b>MediSoft</b></h1>
      </div>
      <br />
    </>
  )
}

export default Header
