import React, { useState } from "react";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault()
    //  console.log(name)
    //  console.log(email)
    //  console.log(password)
    //  console.log(number)

     const showdata ={
      name,password,email,number
     }
alert("User registered!");
    

     localStorage.setItem("user",JSON.stringify(showdata))
      console.log(showdata)

     setEmail("")
      setName("")
     setNumber("")
     setPassword("")
  }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-blue-200 px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Sign Up Form</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Full Name
          </label>
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            required
            placeholder="Please Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Email Address
          </label>
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            required
            placeholder="Please Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Phone Number
          </label>
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="tel"
            required
            placeholder="Please Enter Your Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Password
          </label>
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            required
            placeholder="Please Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
             autoComplete="new-password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
