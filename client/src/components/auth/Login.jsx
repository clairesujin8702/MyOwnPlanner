import React, { useState, useEffect } from 'react';
import axios from 'axios';

const checkValidation = () => {};

const Login = ({ userInfo, handleAuth }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [loginStatus, setLoginStatus] = useState(true);

  const handleSubmit = () => {
    let loginInfo = {
      params: { email: 'test@rapptrlabs.com', password: 'Test123' },
    };
    axios
      .post('http://dev.rapptrlabs.com/Tests/scripts/user-login.php', loginInfo)
      .then((data) => {
        handleAuth(data.user.username);
      })
      .catch((err) => {
        setLoginStatus(false);
        console.log('POST_Auth_', err);
      });
  };
  const emailValidation = (e) => {
    const { value } = e.target;
    setEmailError(true);
    setEmail(value);
    value.indexOf(' ') > 0 && alert('invalid input: Please remove space');

    if (
      email.length > 1 &&
      email.length < 50 &&
      email.indexOf('@') > 0 &&
      email.indexOf('.') > 0 &&
      email.indexOf(' ') < 0
    ) {
      setEmailError(false);
    }
  };

  const passwordValidation = (e) => {
    const { value } = e.target;
    setPasswordError(true);
    setPassword(value);
    value.indexOf(' ') > 0 && alert('invalid input: Please remove space');

    if (
      password.length >= 3 &&
      password.length < 16 &&
      password.indexOf(' ') < 0
    ) {
      setPasswordError(false);
    }
  };

  const submitButton =
    (emailError === true || passwordError === true) &&
    (emailError !== null || passwordError !== null) ? (
      <button id='disabled'>Login</button>
    ) : (
      <button onClick={() => handleSubmit()}>Login</button>
    );

  return (
    <>
      <h1> Rapptr Labs </h1>
      <div>
        <div id='email'>Email</div>
        <div className='email-input'>
          <span className='fa fa-user icons'></span>
          <input
            type='text'
            className={
              emailError !== null && emailError ? 'inValid-email' : 'email'
            }
            placeholder='user@rapptrlabs'
            onChange={(e) => emailValidation(e)}
            onKeyPress={(e) =>
              e.key === 'Enter' &&
              emailError !== true &&
              passwordError !== true &&
              handleAuth(e)
            }
          />
        </div>
        <div id='invalid'>
          {emailError !== null && emailError && 'Not a valid email'}
        </div>
      </div>
      <div id='password'>Password</div>
      <div className='password-input'>
        <span className='fa fa-lock icons'></span>
        <input
          type='password'
          className={
            passwordError !== null && passwordError
              ? 'inValid-password'
              : 'password'
          }
          placeholder='Must be at least 4 characters'
          onChange={(e) => passwordValidation(e)}
          onKeyPress={(e) =>
            e.key === 'Enter' &&
            emailError !== true &&
            passwordError !== true &&
            handleAuth(e)
          }
        />
        <div id='invalid'>
          {passwordError !== null && passwordError && 'Not a valid password'}
        </div>
      </div>
      <div className='submit'>
        {submitButton}
        <div id='invalid'>
          {!loginStatus && (
            <>
              The server could not be reached.
              <br />
              Please try again later!
            </>
          )}
        </div>
      </div>
      <div id='server-backup'>
        {!loginStatus && (
          <a href='#' onClick={() => handleAuth()}>
            skip
          </a>
        )}
      </div>
    </>
  );
};

export default Login;
