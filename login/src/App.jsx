import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from "./components/Home"
import About from './components/About'
import Contact from './components/Contact'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFoundPage from './components/NotFoundPage'
import Api from './components/Api'
import Fetch from './components/Fetch'
const App = () => {
  return (
    
    <BrowserRouter>
    <Header/>
    <Routes>
   <Route path='/' element = {<Home/>}> </Route>
   <Route  path="/about-us" element={<About/>} ></Route>
   <Route path = "/contact-us" element={<Contact/>}> </Route>
   <Route path="/login" element={<LoginForm/>}></Route>
   <Route path="/signup" element={<SignUpForm/>} ></Route>
     <Route path="/api" element={<Api/>} ></Route>
   <Route path='*' element={<NotFoundPage/>}></Route>
    <Route path='/fetch' element={<Fetch/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App