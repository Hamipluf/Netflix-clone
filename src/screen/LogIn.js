import React, { useState } from 'react'
import "../styles/LogIn.css"
import SingUp from "./SingUp"

function LogIn() {
  const [signIn, setSingIn] = useState(false)

  return (
    <div className='loginScreen'>
      <div className='loginScreen__bg'>
        <img className='loginScreen__logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Logo netflix" />
        <button onClick={() => setSingIn(true)} className='loginScreen__btn'>Sing In</button>

        <div className='loginScreen__gradient' />
      </div>
      <div className='loginScreen__content'>
        {signIn ? (
          <SingUp />
        ) : (
          <>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className='loginScreen__input'>
              <form>
                <input type="email" placeholder='Email address' />
                <button onClick={() => setSingIn(true)} className='loginScreen__getStarted' type="submit">Get Started {`>`}</button>
              </form>
            </div>
          </>
        )}

      </div>
    </div>
  )
}

export default LogIn