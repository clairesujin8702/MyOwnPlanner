import React, { useState } from 'react';
import Task from './Task.jsx';

const handleSubmit = () => {
  // newTask & searchTask
};
const deleteTask = () => {};

const ToDoList = ({ userInfo, handleAuth }) => {
  console.log('ToDoList page : ', userInfo);
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');

  let mockData = [
    { id: 1, task: 'loginPage' },
    { id: 2, task: 'toDoList' },
    { id: 3, task: 'css work done! 26fonts' },
  ];

  return (
    <>
      <h1>My To-Do List</h1>
      <div className='toDo-container '>
        <div className='toDo-head'>
          <div className='searchContainer'>
            <span className='fa fa-search icons'></span>
            <input
              type='text'
              className='searchBar'
              placeholder='search'
              name='newTask'
              value={newTask}
              onChange={(e) => handleChange(e)}
              onKeyPress={(e) => e.key === 'Enter' && newTask && search(e)}
            />
          </div>
          <div className='newButton'>
            <button>New</button>
          </div>
        </div>
        <div className='tasks'>
          {mockData.map((task, i) => (
            <Task key={i} task={task.task} />
          ))}
          <hr />
        </div>
      </div>
    </>
  );
};

export default ToDoList;
