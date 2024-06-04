import React, { useState } from 'react'
import supabase from '../config/supabaseClient'
import { useNavigate } from 'react-router-dom'

import RegistrationFailure from '../components/RegistrationFailure'
import RegistrationSuccess from '../components/RegistrationSuccess'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [newRegistration, setNewRegistration] = useState(null);


  async function submitUserData() {
    if(password == confirmPassword && password !== null && email !== null) {
      setIsLoading(true);  
    const { error } = await supabase.auth.signUp(
      {
        email: email,
        password: password,
      }
    )

    navigate('/successful-registration')

    if(error){
      setNewRegistration(false);
      console.log(error)
      setTimeout(() => {
        setNewRegistration(null);
      }, 5000);
    } else {
      console.log("Success")
      setNewRegistration(true); 
      setTimeout(() => {
        setNewRegistration(null);
      }, 5000);
    }
    // Make a succes route and page to inform user to confirm registration by clicking a link in his/her email 
  }
}
  return (
    <>
    <Navbar/>
    <div className='max-w-xl m-auto my-[100px]'>
      <div className='flex flex-col justify-center items-center'>
          <h2 className='text-[#013941] mt-10 mb-3 text-6xl'>Sign Up</h2>
          <p>Welcome! Let's create your digital business or personal card.</p>
          
          <form action="" className="mt-10 flex flex-col items-center justify-center w-full ">
              <div className="w-4/5">
              {/* <div className=' w-full flex flex-row justify-center items-center'> 
                    
                    <button type="button" class="text-sm mx-1 py-2 px-4 flex justify-center items-center border-2 border-black text-red-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-lg ">
                        <svg width="20" height="20" fill="currentColor" class="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z">
                            </path>
                        </svg>
                        Sign up with Google
                    </button>
                    
                    <button type="button" class="text-sm mx-1 py-2 px-4 flex justify-center items-center border-2 border-black text-blue-800 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-lg ">
                        <svg width="20" height="20" fill="currentColor" class="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
                            </path>
                        </svg>
                        Sign up with Facebook
                    </button>
         
                  </div> */}

                {/* <p className='mb-5 mt-6 font-semibold text-[#013941]'>OR</p>  */}

                <label htmlFor="Email" className="block flex text-sm font-semibold text-gray-700">
                  E-mail Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 w-full py-1 border-2 rounded-full border-gray-200"
                  value={email} onInput={e => setEmail(e.target.value)}
                  onChange={submitUserData.handleEmailChange}
                />
              </div>
              
              <div className="w-4/5 mt-5">
                <label htmlFor="Password" className="block flex flex-row justify-between text-sm font-semibold text-gray-700">
                  Password
                </label>

                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 w-full py-1 border-2 rounded-full border-gray-200"     
                  value={password} onInput={e => setPassword(e.target.value)}             
                />
                
              </div>
              <div className="w-4/5 mt-5">
                <label htmlFor="Password" className="block flex flex-row justify-between text-sm font-semibold text-gray-700">
                  Confirm Password
                </label>

                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 w-full py-1 border-2 rounded-full border-gray-200"     
                  value={confirmPassword} onInput={e => setConfirmPassword(e.target.value)}             
                />
                
              </div>

              <div className="w-4/5 ">
                <button onClick={submitUserData} type='button' className="cursor-pointer w-full mt-5 py-2 w-4/5 bg-[#14B8A6] text-white text-xl rounded-full focus:outline-none focus:ring ">
                  {isLoading ? 'Signing Up...' : 'Sign Up'}
                </button>
                <p className="text-xs mt-1 text-gray-500">
                  By creating an account, you agree to Google's 
                  <a href="https://policies.google.com/privacy" className="text-gray-700 underline mx-0.5"> Privacy Policy </a>
                  and
                  <a href="https://policies.google.com/terms" className="text-gray-700 underline  mx-0.5"> Terms of Service. </a>
                </p>
              
              </div> 
            </form>

      </div>
    </div>
    <Footer/>
    </>
  )
}

export default SignUp