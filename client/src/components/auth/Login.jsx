import React from 'react';
import axios from 'axios';

const Login = ({ userInfo }) => {
  console.log('Login page : ', userInfo);
  return (
    <>
      <h2> Login</h2>
      <form method='post'>
        <div>
          <label>Username: </label>
          <input type='text' name='username' />
        </div>
        <div>
          <label>Password :</label>
          <input type='password' name='password' /> <button>Login</button>
        </div>
        <div></div>
      </form>
    </>
  );
};

export default Login;
