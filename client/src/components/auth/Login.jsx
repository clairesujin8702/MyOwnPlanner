import React from 'react';
import axios from 'axios';

const Login = ({ userInfo }) => {
  console.log('Login page : ', userInfo);
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
            className='user'
            placeholder='user@rapptrlabs'
          />
        </div>
        <div id='invalid'>Not a valid email</div>
      </div>
      <div id='password'>Password</div>
      <div className='password-input'>
        <span className='fa fa-lock icons'></span>
        <input
          type='password'
          name='password'
          className='password'
          placeholder='Must be at least 4 characters'
        />
        <div id='invalid'>Not a valid password</div>
      </div>
      <div className='submit'>
        <button>Login</button>
        <div id='invalid'>
          The server could not be reached.
          <br />
          Please try again later.
        </div>
      </div>
    </>
  );
};

export default Login;
