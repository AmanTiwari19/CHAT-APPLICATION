import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignUp from "../../Hooks/useSignUp";

function SignUp() {
  const [inputs ,setInputs]=useState({
    fullname:'',
    username:'',
    password:'',
    
    confirmPassword:'',
    gender:''
  })
  const {loading ,signup}=useSignUp();
  const handleCheckboxChange=(gender)=>{
    setInputs({...inputs,gender})

  }
  const handlesubmit= async(e)=>{
    e.preventDefault();
    // console.log('chala1')
    await signup(inputs)
    // console.log(inputs);
  }
  return (
    <div className="flex flex-col items-center justify-center  min-w-96 mx-auto  ">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500"> LumoChat</span>
        </h1>
        <form onSubmit={handlesubmit}>
        <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">fullname</span>
            </label>  
            <input
              type="text"
              placeholder="Enter fullname"
              value={inputs.fullname}
              onChange={(e)=>setInputs({...inputs,fullname:e.target.value})}
            
              className="w-full input input-bordered h-10 "
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Username</span>
            </label>  
            <input
              type="text"
              placeholder="Enter username"
              value={inputs.username}
              onChange={(e)=>setInputs({...inputs,username:e.target.value})}
            
              className="w-full input input-bordered h-10 "
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text  text-white">
                {" "}
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={inputs.password}
              onChange={(e)=>setInputs({...inputs,password:e.target.value})}
              className="w-full input input-bordered h-10 "
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text  text-white">
                {" "}
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              value={inputs.confirmPassword}
              onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
              className="w-full input input-bordered h-10 "
            />
          </div>

          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}></GenderCheckbox>
          {/* genderbox */}
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white"
          >
            Already have an acount?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2 glass  btn-info text-white  " disabled={loading}>
              {loading? <span className="loading  loading-spinner "></span>:"Sign Up"}
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
