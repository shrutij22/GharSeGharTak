import React, { useState } from 'react'
import './LoginSignup.css';

import user_icon from '../Assests/person.png'
import email_icon from '../Assests/email.png'
import password_icon from '../Assests/password.png'

const LoginSignup = () => {

    const [action,setAction]=useState("Login");


  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img src= {user_icon} alt=""/>
                <input type="text" placeholder="Name" />
            </div>}
            
             <div className="input">
                <img src={email_icon} alt=""/>
                <input type="email" placeholder='Email ID' />
            </div>
             <div className="input">
                <img src={password_icon} alt=""/>
                <input type="password" placeholder='Password' />
            </div>
        </div>
        {action=="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click here!</span></div>}
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>setAction("Sign Up")}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>setAction("Login")}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup

// This code defines a React functional component called LoginSignup. In React, components are used to create reusable pieces of UI. The line import React from 'react' brings in the React library, which is necessary to use JSX — a syntax that lets us write HTML inside JavaScript. Inside the component, we return a <div> with the text "LoginSignup", which is what will be displayed on the screen. Finally, we use export default to make this component available for use in other files, such as App.js.

