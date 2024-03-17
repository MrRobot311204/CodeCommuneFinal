import { React, useState } from 'react'
// import {useHistory} from 'react-router-dom';
import { auth, googleProvider } from '../Config/Firebase'
// import { NavLink } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory();
  console.log(auth?.currentUser?.email);
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("user created.. Go to Home")
      
      // history.push('/home');
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      // history.push('/home');
      
    } catch (err) {
      console.error(err);
    }
  };

  // const logout = async () => {
  //   try {
  //     await signOut(auth);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  return (
    <div>
      <div className=' h-screen pt-16 bg-gray-900'
      // onSubmit={(e)=>{
      //   e.preventDefault();
      //   signIn();

      // }}
      >
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div class="w-full bg-gray-800 rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <p class="text-2xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                Register To CodeCommune
              </p>
              {/* <div>
                <label class="block mb-2 text-sm font-medium text-gray-200">
                  Your Name
                </label>
                <input placeholder="Your Username" class="bg-gray-50 border border-gray-30 text-indigo-700 sm:text-sm rounded-lg block w-full p-2.5" id="name" type="text"/>
              </div> */}
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-200">
                  Your Email
                </label>
                <input placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  class="bg-gray-50 border border-gray-30 text-indigo-700 sm:text-sm rounded-lg block w-full p-2.5" />
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-200">
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-indigo-700 sm:text-sm rounded-lg block w-full p-2.5" placeholder="Set Your Password" type="password" />
              </div>

              <div class="flex items-start">
                <div class="flex items-center h-5 mr-2 mb-1">
                  <input class="w-4 h-4 border  rounded  focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" type="checkbox" aria-describedby="terms" id="terms" />
                </div>
                <label class="font-medium text-primary-600 hover:underline text-primary-500 text-white">
                  I accept the  Terms and Conditions
                  {/* <a href="#" class="font-medium text-primary-600 hover:underline text-primary-500">
                       Terms and Conditions
                    </a> */}
                </label>
              </div>
            </div>
            <div className='p-3'>
              <button onClick={signIn} class="w-full mb-4 bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white" type='submit'>
                Sign in
              </button>
              <div class="flex items-center mb-4">
                <div class="w-full border-t border-gray-300"></div>
                <div class="px-4 text-gray-500">or</div>
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <button onClick={signInWithGoogle} type="button" class="w-full text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                <svg class="w-4 h-4 mr-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                  <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                </svg>
                <span class="flex-grow">Sign in with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    //      <button onClick={signInWithGoogle} className='bg-slate-900 text-white'>Sign in with Google</button> 
    // <button onClick={logout}>Logout</button>
  )
}

export default SignUp
