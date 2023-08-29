import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let[fullname,setFullname]=useState("")
    let [password,setPassword]=useState("")
    let [error,setError]=useState(false)
    let navigate=useNavigate()

    let handlelogindata=(e)=>{
        e.preventDefault()
        if(fullname.length==0 || password.length==0){
            setError(true)
        }
        else{

       let data1=window.localStorage.getItem("name")
       let data2=window.localStorage.getItem("pwd")
        console.log(data1,data2);
        console.log(fullname,password);
        if(fullname === data1 && password === data2){
            alert("login success!!")
            navigate("/")
        }
        else{
            alert("login unsuccess!!")
        }
    }

    }
  return (

    <div className="container">
        <div className="card">
            <div className="cardtitle"> Login</div>
                <form action="login">
                    <div className="formdiv">
                        <div className="input-box">
                    <label htmlFor="fullname">Fullname</label>
                    <input type="text" name='fullname' id='fullname' placeholder='Enter Your Fullname' onChange={(e)=>setFullname(e.target.value)}/><br />
                   {error&&fullname.length<=0?
                    <label id='validlabel'>Name required</label>:""}
                   </div>
                   <div className="input-box">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)}/><br />
                    {error &&password.length<=0?
                        <label id='validlabel'>Password required</label>:""}
                    </div>
                    <div className="checkbox">
                    <input type="checkbox" id="check"/>
                    <label>Remember me</label> 
                    <small>Forget password?</small></div>
                    <div className="btn">
                    <button onClick={handlelogindata}>Login</button><br /></div>
                    Do u have an account?<a href="/Signup">signup</a>
                    </div>
                </form>
          
        </div>
    </div>

  )
}

export default Login