import React, { useState } from 'react';
import Login from './auth/Login.jsx';
import ToDoList from './toDoList/ToDoList.jsx';

const App = ({ name }) => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [loginName, setLoginName] = useState(name);

  const handleAuth = (username) => {
    if (username) {
      setLoginName(username);
    }
    setLoginStatus(!loginStatus);
  };

  return (
    <>
      Owned by {loginName}
      <div className='logout'>
        {loginStatus && <button onClick={() => handleAuth()}>Logout</button>}
      </div>
      <div className='login-box'>
        {!loginStatus && (
          <div className='login-container'>
            <Login handleAuth={handleAuth} />
          </div>
        )}
      </div>
      <div className='toDo-box'>{loginStatus && <ToDoList />}</div>
    </>
  );
};

export default App;
