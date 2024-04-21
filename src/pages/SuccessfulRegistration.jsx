import React from 'react'
import { CheckCircle } from 'react-feather'

function SuccessfulRegistration() {
  return (
    <div class="flex items-center justify-center h-screen">
      <div>
        <div class="flex flex-col items-center space-y-2">
          <CheckCircle className='text-green-600 w-28 h-28' />
          <h1 class="text-4xl font-bold">Thank You !</h1>
          <p className='max-w-2xl'>Thank you for registering, we currently dont have the capacity for new users. We will contact you as soon as we are able to crate your profile.</p>
        </div>
      </div>
    </div>
)
}

export default SuccessfulRegistration