import React, { useState } from 'react';
import Task from './Task.jsx';

var mockData = [
  { id: 1, task: 'loginPage' },
  { id: 2, task: 'toDoList' },
  { id: 3, task: 'css work done! 26fonts' },
];

const ToDoList = ({ handleAuth }) => {
  const [task, setTask] = useState(mockData);
  const [isValid, setIsValid] = useState(null);
  const [searchTask, setSearchTask] = useState('');
  const [editTask, setEditTask] = useState('');

  const handleValidation = (e) => {
    setEditTask(e.target.value);
    if (editTask.length > 1) {
      setIsValid(true);
    }
    if (editTask.length > 25) {
      setIsValid(false);
      alert('Maximum Character Limit Exceeded');
    }
    setEditTask(e.target.value);
  };

  const handleSearch = (e) => {
    const { name, value } = e.target;
  };

  const handleSubmit = (e, oldTask) => {
    event.preventDefault();
    if (oldTask) {
      setTask((prevState) => {
        let updateState = prevState.map((arr) => {
          if (arr.task === oldTask) {
            arr.task = editTask;
          }
          return arr;
        });
        return [...updateState];
      });
      setEditTask('');
    } else {
      setTask(...task, editTask);
      setAddTask('');
      console.log('AddTask is working');
    }
  };

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
              name='searchTask'
              value={searchTask}
              onChange={(e) => handleSearch(e)}
              onKeyPress={(e) =>
                e.key === 'Enter' && searchTask && handleSubmit(e)
              }
            />
          </div>
          <div className='newButton'>
            <button>New</button>
          </div>
        </div>
        <div className='tasks'>
          {mockData.map((task, i) => (
            <Task
              key={'toDo-' + i}
              task={task.task}
              isValid={isValid}
              editTask={editTask}
              handleValidation={handleValidation}
              handleSubmit={handleSubmit}
            />
          ))}
          <hr />
        </div>
      </div>
    </>
  );
};

export default ToDoList;
