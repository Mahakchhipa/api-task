import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex  gap-20 p-5 justify-center bg-blue-300 text-white text-2xl font-bold">
     <Link  to={"/"}>  Home </Link> 
      <Link  to={"/about-us"}>  About </Link> 
       <Link  to={"/contact-us"}>  Contact-Us </Link> 
        <Link  to={"/login"}>  Login </Link> 
         <Link  to={"/signup"}>  SignUp </Link> 
           <Link  to={"/api"}>  ApiData </Link> 
    </div>
  );
};

export default Header;
