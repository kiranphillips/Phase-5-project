import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignUp ({ setIsLoggedIn, setLoggedInGuestId }) {

  const [ enteredUserName, setUserName ] = useState('')
  const [ enteredEmail, setEmail ] = useState('')
  const [ enteredPassword, setPassword ] = useState('')

  const [ errors, setErrors ] = useState([])
  const navigate = useNavigate()
 

  function handleSubmit (e) {
    console.log(e)
    e.preventDefault()
    const guest = {
      'name': enteredUserName,
      'email': enteredEmail,
      'password': enteredPassword,
    }

    fetch('/guests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(guest)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(guest => {
            setIsLoggedIn(true)
            sessionStorage.setItem("loggedIn", true)
            sessionStorage.setItem("loggedInGuestId", guest.id)
            setLoggedInGuestId(guest.id)
            navigate(`/guests/${guest.id}`)
          })
        } else {
          res.json().then(json => setErrors(Object.entries(json.errors)))
        }
      })
  }

  const handleUsernameChange = (e) => {
    setUserName(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div id="signup" >
      <h1 className="title">
        Touch
      </h1>
      <div className="login">
        <div id="signupdescription">
          Touch, at your convience without a word. 
        </div>
        <div className="signUpForm">
          <label>
            Username
          </label>
          <input type="text" name="username" onChange={ handleUsernameChange } value={ enteredUserName } /><br />

          <label>
            Email....... 
          </label>
          <input type='text' name='email' value={ enteredEmail } onChange={ handleEmailChange } /><br/>

          <label>
            Password
          </label>
          <input type="password" name="password" onChange={ handlePasswordChange } value={ enteredPassword } />
          <div className='signupFormButton'>
            <button value='Sign up!' onClick={ handleSubmit }>Sign Up</button>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default SignUp;