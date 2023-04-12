import React from 'react'
import '../style/body.css'
export default function Body() {
  return (
    <div className='signin-panel'>
      <p className='signin'>
        Sign In
      </p>
      <div className='form'>
        <form>
          <input className='input-field' placeholder=' Email or phone number'></input>
          <input className='input-field' type='password' placeholder='Password'></input>
          <button className='input-field submit-button'>Sign In</button>
          <input type='checkbox' placeholder="Remember me" id='remember'></input>
          <label for='remember'>Remember me</label>
          <p className='help'>Need help?</p>
        </form>
      </div>
      <div className='lower-signin-panel'>
        <p>New to Netflix? <p className='link-white'>Sign up now</p></p>
        <p className='disclaimer'>This page is protected by Google reCAPTCHA to ensure you're not a bot.<p className='link-blue'>Learn more</p></p>
      </div>
    </div>
  )
}
