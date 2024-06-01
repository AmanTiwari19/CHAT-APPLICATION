import React from "react";
import "./App.css";
// import sibedar from "./components/sidebar/sibedar";
import Login from "./pages/login/Login";
// import SignUp from "./pages/signup/SignUp";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Home></Home>

      {/* <Login /> */}
      {/* You can switch components here based on the route or state */}
    </div>
  );
}

export default App;
