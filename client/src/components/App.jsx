import React, { useState } from 'react';
import axios from 'axios';
import Login from './auth/Login.jsx';
import ToDoList from './toDoList/ToDoList.jsx';

const App = ({ name }) => {
  return (
    <>
      {name}
      <div className='logout'>
        <button>Logout</button>
      </div>

      <div className='login-box'>
        <div className='login-container'>
          <Login userInfo={name} />
        </div>
      </div>
      <div className='toDo-box'>
        <ToDoList userInfo={name} />
      </div>
    </>
  );
};

export default App;
