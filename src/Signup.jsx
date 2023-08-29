import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  let navigate=useNavigate()
const initialvalues ={fullname: "",email:"",password:"",contact:""};
const[formvalue,setFormvalue]=useState(initialvalues);
const[formerror,setFormerror]=useState({})
const[message,setMassage]=useState(false)
  
 const handlechange=(e)=>{
  const {name,value}=e.target;
  setFormvalue({...formvalue,[name]:value})
  console.log(formvalue);

 }

  const validation=(values)=>{
    const errors={}
    const regex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(!values.fullname) {
     errors.fullname="fullname is required"
    }
     if(!values.email){
      errors.email="email is required"
    }else if(!regex.test(values.email)){
      errors.email="this is not a valid Email"
    }
     if(!values.password){
      errors.password="password is required"
     
    }
    if(!values.contact){
      errors.contact="contact is required"

    } else if(values.contact.length != 10)
    {
      errors.contact="contact number not valid"
    } 
   return errors
  };
  const handlesignupdata=(e)=>{
     e.preventDefault()
     setFormerror(validation(formvalue))
     setMassage(true) 
  }
useEffect(()=>{
     
    if(Object.keys(formerror).length === 0 && message){
      console.log(formvalue);
        let name= window.localStorage.setItem("name",formvalue.fullname)
         let password=window.localStorage.setItem("pwd",formvalue.password)
         console.log(name,password);
         alert("signup successfull!!")
         navigate("/Login")
     }
  },[formerror])
  return (
      <div className="container">
          <div className="cardtitle">Signup</div>
       
            <form action="" onSubmit={handlesignupdata} >
              <div className="formdiv">
                <div className="input-box">
              <label htmlFor="">Full Name</label>
              <input type="text" id='fullname' name='fullname' value={formvalue.fullname} placeholder='Enter Full Name' onChange={handlechange} /><br />
              </div>
               <p>{formerror.fullname}</p>
              <div className="input-box">
              <label htmlFor="Email">Email</label>
              <input type="email" id='email' name='email' value={formvalue.email} placeholder='Enter Email' onChange={handlechange}  /><br />
              </div>
              <p>{formerror.email}</p>
              <div className="input-box">
              <label htmlFor="password">Password</label>
              <input type="password" id='password' name='password' value={formvalue.password} placeholder='Enter Password' onChange={handlechange}  /><br />
              </div>
                <p>{formerror.password}</p>
              <div className="input-box">
              <label htmlFor="contact">Contact</label>
              <input type="number" id='number' name='contact' value={formvalue.contact} placeholder='Enter number' onChange={handlechange} /><br />
              </div>
              <p>{formerror.contact}</p>
              <div className="btn">
              <button onClick={()=>{
                navigate("/")
              }}>Back</button>
          
              <button type='submit'>save&verify</button>
              
              </div>
              </div>
            </form>
       
      </div>
   
  )
}

export default Signup