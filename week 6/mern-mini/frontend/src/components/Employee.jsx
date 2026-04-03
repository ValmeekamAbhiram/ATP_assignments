import React from 'react'
import { useLocation } from 'react-router'

function Employee() {
  const {state}=useLocation()

  return (
    <div className='p-15 text-center text-3xl shadow-2xl rounded-2xl mb-4'>
      <p className='mb-2'>Name: {state.name}</p>
      <p className='mb-2'>Email: {state.email}</p>
      <p className='mb-2'>Mobile: {state.mobile}</p>
      <p className='mb-2'>Designation: {state.designation}</p>
      <p className='mb-2'>Company Name: {state.companyName}</p>
    </div>
  )
}

export default Employee