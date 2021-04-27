import React from 'react';
import axios from 'axios';
import Login from './auth/Login.jsx';
import ToDoList from './toDoList/ToDoList.jsx';

const App = ({ name }) => {
  return (
    <div>
      <div>
        <h1>Hello {name}</h1>
        <button>Logout</button>
      </div>
      <div>
        <Login userInfo={name} />
      </div>
      <div>
        <ToDoList userInfo={name} />
      </div>
    </div>
  );
};

export default App;
