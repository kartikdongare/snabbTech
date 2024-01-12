// import React from 'react'
import { BrowserRouter, Routes,Route } from "react-router-dom";
// import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import ForgotPass from './Components/ForgotPass';
import AuthMainPage from "./Components/AuthMainPage";
import NavBar from './Components/Navbar/NavBar'
const routes = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<AuthMainPage/>}></Route>
        {/* <Route path='/sign-in' element={<SignIn/>}></Route>    */}
        <Route path='/home' element={<NavBar/>}/>  
        </Routes>
    </div>
  )
}

export default routes
