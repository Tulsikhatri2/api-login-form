import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import SignupForm from './Components/SignupForm'
import LoginForm from './Components/LoginForm'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/signup" element={<SignupForm/>}/>
      <Route path="/" element={<LoginForm/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App