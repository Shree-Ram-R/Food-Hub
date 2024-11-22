import React, { useState } from 'react'
import'./signin.css'
import logo from "../assets/logo.jpg"
const SignIn = () => {
  const[createAcc,setCreateAcc]=useState(true);
  const[signin,setSignin]=useState(false);
  const[style,setStyle]=useState();
  const handleClick=()=>{
      setCreateAcc(!createAcc);
      setSignin(!signin);
      setStyle("animation");
  }
  return (
    <>
    <div className={style}>
      {signin &&( 
      <div className='Signin'>
        <div class="container">
          <h1 className="logo1"><img src={logo} alt="food" /></h1>
      <div class="login">
        <h1>Login Page</h1>
      </div>
      <div class="uname">
        <label for="name">User Name:</label>
        <input
          type="text"
          placeholder="User Name or Email"
          name="UserName"
          id="name"
          required
        />
      
      </div>
      <div class="pas">
        <label for="pass">Password&nbsp;&nbsp;: </label>
        <input
          type="password"
          placeholder="Enter the Password"
          name="UserName"
          class="in"
          required
        />
       
      </div>
      <div class="bt">
        <button className='log'>Login</button>
      </div>
      <div class="not register">
        <p>Not Registered? <button className='createAcc' onClick={handleClick}>Create Account</button></p>
      </div>
    </div>

    </div>)}
    </div>
    <div className={style}>
    {createAcc &&( 
    <div className='Signin'>
      <div class="container">
        <h1 className="logo1"><img src={logo} alt="food" /></h1>
    <div class="login">
      <h1>Create Account</h1>
    </div>
    <div class="uname">
      <label for="name"> User Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</label>
      <input
        type="text"
        placeholder="User Name or Email"
        name="UserName"
        id="name"
        required
      />
    
    </div>
    <div class="pas">
      <label for="pass">  Mobile Number&nbsp;&nbsp;&nbsp;:&nbsp;</label>
      <input
        type="text"
        placeholder="Enter the Number"
        name="UserName"
        class="in"
        required
      />
     
    </div>
    <div class="pas">
      <label for="pass">Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</label>
      <input
        type="password"
        placeholder="Enter the Password"
        name="UserName"
        class="in"
        required
      />
     
    </div>
    <div class="bt">
      <button className='log'>Sign Up</button>
    </div>
    <div class="not register">
      <p>Registered? <button className='createAcc' onClick={handleClick}>Sign In</button></p>
    </div>
  </div>

  </div>)}
  </div>
  </>
    
  )
}

export default SignIn