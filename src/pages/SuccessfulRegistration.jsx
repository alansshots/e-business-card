import React from 'react'
import { CheckCircle } from 'react-feather'

function SuccessfulRegistration() {
  return (
    <div class="flex items-center justify-center h-screen">
      <div>
        <div class="flex flex-col items-center space-y-2">
          <CheckCircle className='text-green-600 w-28 h-28' />
          <h1 class="text-4xl font-bold">Thank You !</h1>
          <p className='max-w-2xl'>Thank you for registering! Please confirm your registration. An email has been sent to you.</p>
        </div>
      </div>
    </div>
)
}

export default SuccessfulRegistration