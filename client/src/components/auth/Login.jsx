import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ userInfo, handleAuth }) => {
  console.log('Login page : ', userInfo);
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <>
      <h1> Rapptr Labs </h1>
      <div>
        <div id='username'>Username</div>
        <div className='username-input'>
          <span className='fa fa-user icons'></span>
          <input
            type='text'
            name='user'
            className={user === null ? 'user' : 'inValid-user'}
            placeholder='user@rapptrlabs'
          />
        </div>
        <div id='invalid'>{user === null && 'Not a valid email'}</div>
      </div>
      <div id='password'>Password</div>
      <div className='password-input'>
        <span className='fa fa-lock icons'></span>
        <input
          type='password'
          name='password'
          className={password === null ? 'password' : 'inValid-password'}
          placeholder='Must be at least 4 characters'
        />
        <div id='invalid'>{user === null && 'Not a valid password'}</div>
      </div>
      <div className='submit'>
        <button onClick={() => handleAuth()}>Login</button>
        <div id='invalid'>
          {user === null && (
            <>
              The server could not be reached.
              <br />
              Please try again later.
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
