import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Nav from './Nav'
import Login from './Login'
import Signup from './Signup'
import "./index.css"
import Home from './Home'

const App = () => {
  return (
   <div className="mainappdiv">
    <div className="approutediv">
        <Router>
            <Nav/>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
                <Route path="/Login" element={<Login/>}></Route>
                <Route path="/Signup" element={<Signup/>}></Route>
            </Routes>
        </Router>
    </div>
   </div>
  )
}

export default App