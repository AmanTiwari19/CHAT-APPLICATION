import React from "react";
import "./App.css";
// import sibedar from "./components/sidebar/sibedar";
import Login from "./pages/login/Login";
// import SignUp from "./pages/signup/SignUp";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./pages/home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from './pages/sighup/SignUp';
import { Toaster } from "react-hot-toast";
import { useAuthcontext } from "./context/AuthContext";


function App() {
  const {authUser}=useAuthcontext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      {/* <Home></Home> */}
      <Routes>
        <Route path='/' element={authUser?<Home></Home>:<Navigate to="/login"></Navigate>}/>
        <Route path='/login' element={authUser?<Navigate to="/"></Navigate> : <Login></Login>}/>
        <Route path='/signup' element={authUser?<Navigate to="/"></Navigate> :  <SignUp></SignUp>}/>
   
      </Routes>
      <Toaster></Toaster>

      {/* <Login /> */}
      {/* You can switch components here based on the route or state */}
    </div>
  );
}

export default App;
