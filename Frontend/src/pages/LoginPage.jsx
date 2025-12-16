//import React from 'react' //rafce
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuthStore } from "../store/authUser";
const LoginPage = () => {

  const [email,SetEmail]=useState("");
  const [password,SetPassword]=useState("");
  const {login}=useAuthStore();

  const handleLogin = (e) =>
    {
      e.preventDefault();
      login({email, password });
      
    }

  return <div className="h-screen w-full hero-bg">
      <header className="max-w-6xl mx-auto flex items-center justify-between p-4">
       <Link to={"/"}>
       <img src="/netflix-logo.png" alt="logo" className="w-52"/>
       </Link>
      </header>

      <div className='flex justify-center items-center mt-5 mx-3'> 
        <div className="w-full max-w-sm p-6 space-y-3 bg-black/60 rounded-lg shadow-md">
          <h1 className="text-center text-white text-2xl font bold mb-4">
            Login
          </h1>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-300 block">
               Email
              </label>
              <input type="email" className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white
              focus:outline-none focus:ring"
              placeholder="you@example.com"
              id="email"
              value={email}
              onChange={(e)=>SetEmail(e.target.value)}></input>
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-300 block">
             Password
              </label>
              <input type="text" className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white
              focus:outline-none focus:ring"
              placeholder=""
              id="username"
              value={password}
              onChange={(e)=>SetPassword(e.target.value)}></input>
            </div>

            <button className="w-full py-2 bg-red-600 text-white font-semibold rounded-md
            hover:bg-red-700">
            Login
            </button>
          </form>
          <div className="text-center text-gray-400">
            Don't have an account?{" "}
           <Link to={"/signup"} className="text-red-500 hover:underline"> Sign up
           </Link>
          </div>
        </div>

      </div>
    </div>
}

export default LoginPage