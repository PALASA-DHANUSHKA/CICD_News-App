import React from "react";
import { Route, Routes } from "react-router-dom";
import NewsList from "./components/NewsList";
import Home from "./pages/Home";
import RegistrationForm from "./components/SignUp";
import LoginForm from "./components/SignIn";
import Footer from "./components/Footer";
import UserDetails from "./components/UserDetails";
import SignUpEx from "./components/SignUpEX";
// import tailwindcss from "@tailwindcss/vite";

const App = () => {
  return (
    <div>
      {/* <h1>News Aggregator</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsList />} />
        <Route path="/signup" element={<RegistrationForm />} />
        <Route path="/signin" element={<LoginForm />} />
        {/* <Route path="/users" element = {<UserDetails/>}/>
        <Route path="/singupex" element = {<SignUpEx/>}/> */}
      </Routes>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
};

export default App;
