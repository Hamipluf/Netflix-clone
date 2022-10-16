import React, { useRef } from 'react'
import { auth } from "../firebase"
import "../styles/Singup.css"

function SingUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  // Registrando Usuario 
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser)
      })
      .catch(err => {
        alert(err.message)
      })
  };


  // Verificando si ya ingreso o si debe ingresarS
  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser)
      })
      .catch(err => {
        alert(err.message)
      })

  }

  return (
    <div className='singUpScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder='Email' />
        <input ref={passwordRef} type="password" placeholder='Password' />
        <button type="submit" onClick={signIn}>Sign In</button>
        <h4> <span className='signUpScreen__ocult'> New to Netflix? </span> <span className='signUpScreen__link' onClick={register}>Sign Up now.</span> </h4>
      </form>
    </div>
  )
}

export default SingUp