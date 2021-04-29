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
  const [newTask, setNewTask] = useState('');
  const [addStatus, setAddStatus] = useState(false);

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
    setSearchTask(e.target.value);
    const searchedTask = task.filter((arr) => {
      if (arr.task === searchTask) {
        return arr;
      }
    });
  };

  const handleAddStatus = () => {
    setAddStatus(!addStatus);
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
      const id = task.length ? task[task.length - 1].id + 1 : 0;
      setTask([...task, { id: id, task: editTask }]);
      setEditTask('');
    }
  };

  const handleDelete = (e, preTask) => {
    setTask((prevState) => {
      let updateState = prevState.filter((arr) => arr.task !== preTask && arr);
      return [...updateState];
    });
  };

  const newTaskRow = (
    <>
      <hr />
      <div className='editRow'>
        <div className='searchContainer'>
          <input
            type='text'
            className='editTask'
            value={editTask}
            onChange={(e) => handleValidation(e)}
            onKeyPress={(e) =>
              e.key === 'Enter' &&
              isValid !== null &&
              isValid &&
              handleSubmit(e)
            }
          />
        </div>
        <div
          className='newButton'
          onClick={(e) => isValid !== null && isValid && handleSubmit(e)}
        >
          <button onClick={(e) => handleSubmit(e)}>Save</button>
        </div>
      </div>
    </>
  );

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
                e.key === 'Enter' && searchTask && handleSearch(e)
              }
            />
          </div>
          <div className='newButton'>
            <button onClick={() => handleAddStatus()}>New</button>
          </div>
        </div>

        <div className='tasks'>
          {addStatus && newTaskRow}
          {task.map((task, i) => (
            <Task
              key={i}
              task={task.task}
              isValid={isValid}
              editTask={editTask}
              handleValidation={handleValidation}
              handleSubmit={handleSubmit}
              handleDelete={handleDelete}
            />
          ))}
          <hr />
        </div>
      </div>
    </>
  );
};

export default ToDoList;
