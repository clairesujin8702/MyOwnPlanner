import React, { useState } from 'react';
import axios from 'axios';
import Login from './auth/Login.jsx';
import ToDoList from './toDoList/ToDoList.jsx';

const App = ({ name }) => {
  const [loginStatus, setLoginStatus] = useState(false);
  const handleAuth = () => {
    setLoginStatus(!loginStatus);
  };
  return (
    <>
      {name}
      <div className='logout'>
        {loginStatus && <button onClick={() => handleAuth()}>Logout</button>}
      </div>

      <div className='login-box'>
        {!loginStatus && (
          <div className='login-container'>
            <Login userInfo={name} handleAuth={handleAuth} />
          </div>
        )}
      </div>
      <div className='toDo-box'>
        {loginStatus && <ToDoList userInfo={name} />}
      </div>
    </>
  );
};

export default App;
