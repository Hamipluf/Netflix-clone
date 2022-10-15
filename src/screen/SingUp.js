import React from 'react'
import "../styles/Singup.css"

function SingUp() {
  return (
    <div className='singUpScreen'>
      <form>
        <h1>Sign Ip</h1>
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password' />
        <button type="submit">Sign Ip</button>
        <h4> <span className='signUpScreen__ocult'> New to Netflix? </span> <span className='signUpScreen__link'>Sign Up now.</span> </h4>
      </form>      
    </div>
  )
}

export default SingUp