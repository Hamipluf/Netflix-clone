import React from 'react'
import "../styles/LogIn.css"

function LogIn() {
  return (
    <div className='loginScreen'>
       <div className='loginScreen__bg'>
       <img className='loginScreen__logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Logo netflix" />
       <button className='loginScreen__btn'>Sing In</button>
       </div>
    </div>
  )
}

export default LogIn