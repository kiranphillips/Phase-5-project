import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Clock from 'react-live-clock';

function LoginPage ({ setLoggedInGuestId, setIsLoggedIn }) {
  const [ formData, setFormData ] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [ errors, setErrors ] = useState([])
  const navigate = useNavigate()

  const { username, password } = formData

  function handleSubmit (e) {
    e.preventDefault()
    const guest = {
      username,
      password
    }
    // Logs in user
    fetch('/login', {
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
          res.json().then(json => setErrors(json.errors))
        }
      })

  }

  const navigateToSignUp = () => {
    navigate('signup')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [ name ]: value })
  }

  return (
    <>
      <div id='login'>
        <form widths='equal' onSubmit={ handleSubmit }>
          <h3 id='logincolor'> Touch </h3>
          <div className='logininput'>
            <input
              className='input'
              type='text'
              name='username'
              placeholder='Username'
              value={ formData.username }
              onChange={ handleChange }
            />
          </div>
          <div className='logininput'>
            <input
              className='input'
              type='password'
              name='password'
              placeholder='Password'
              value={ formData.password }
              onChange={ handleChange }
            />
          </div>
          <div>
            <Button id='submit_login' variant="dark" className="ui button" onClick={handleSubmit} type='submit'>Login</Button>
          </div>
          <div>
            <Button id='submit_signup' variant="dark" onClick={ navigateToSignUp } className="ui button" type='submit'>Signup Here!</Button>
          </div>
        </form>
        <h1>
      
        <Clock className="clock" format={'HH:mm:ss'} ticking={true} timezone={'Africa/Johannesburg'} />
        </h1>
      </div>
    </>
  )
}
export default LoginPage;