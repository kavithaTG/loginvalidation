import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let[popup,setPopup]=useState(false)
    let navigate=useNavigate()
    let handlelogin=()=>{
        setPopup(true)
        if(!popup){
            setTimeout(()=>{
                navigate("/Login")
            },1000)
           
        }
    }
    let handlesignup=()=>{
        setPopup(true)
        if(!popup){
            setTimeout(()=>{
                navigate("/Signup")
            },1000)
            
        }
    }
  return (
    
   <div className="popup">
    <div className="btndiv">
    <button className='togglebtn' onClick={handlelogin}>Login</button>
    <button className='togglebtn' onClick={handlesignup}>Signup</button>
    </div>
   </div>

  )
}

export default Home