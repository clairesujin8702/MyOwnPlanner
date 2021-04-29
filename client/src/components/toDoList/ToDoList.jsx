import React, { useState } from 'react';
import Task from './Task.jsx';

var mockData = [
  { id: 1, task: 'Login Page' },
  { id: 2, task: 'To-Do List' },
  { id: 3, task: 'Css work' },
];

const ToDoList = ({ handleAuth }) => {
  const [task, setTask] = useState(mockData);
  const [isValid, setIsValid] = useState(null);
  const [searchTask, setSearchTask] = useState('');
  const [searchList, setSearchList] = useState('');
  const [editNewTask, setEditNewTask] = useState('');
  const [newTask, setNewTask] = useState('');
  const [addStatus, setAddStatus] = useState(false);

  const handleValidation = (e) => {
    setEditNewTask(e.target.value);
    if (editNewTask.length > 1 && editNewTask.length < 25) {
      setIsValid(true);
    }
    if (editNewTask.length > 25) {
      setIsValid(false);
      alert('Maximum Character Limit Exceeded');
    }
    setEditNewTask(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchTask(e.target.value);
    const searchedTask = task.filter((arr) =>
      arr.task
        .toLowerCase()
        .split(' ')
        .join('')
        .includes(searchTask.split(' ').join('').toLowerCase())
    );
    setSearchList(searchedTask);
  };

  const handleAddStatus = () => {
    setAddStatus(!addStatus);
    setSearchTask('');
  };

  const handleDelete = (e, preTask) => {
    setTask((prevState) => {
      let updateState = prevState.filter((arr) => arr.task !== preTask && arr);
      return [...updateState];
    });
    setSearchTask('');
  };

  const handleSubmit = (e, oldTask) => {
    event.preventDefault();
    if (oldTask) {
      setTask((prevState) => {
        let updateState = prevState.map((arr) => {
          if (arr.task === oldTask) {
            arr.task = editNewTask;
          }
          return arr;
        });
        return [...updateState];
      });
      setEditNewTask('');
      setSearchTask('');
    } else {
      const id = task.length ? task[task.length - 1].id + 1 : 0;
      setTask([...task, { id: id, task: editNewTask }]);
      setEditNewTask('');
      setAddStatus('');
    }
  };

  const newTaskRow = (
    <>
      <hr />
      <div className='editRow'>
        <div className='searchContainer'>
          <input
            type='text'
            className='editNewTask'
            value={editNewTask}
            onChange={(e) => handleValidation(e)}
            onKeyPress={(e) =>
              e.key === 'Enter' &&
              isValid !== null &&
              isValid &&
              handleSubmit(e)
            }
          />
        </div>
        <div className='newButton'>
          <button
            onClick={(e) => isValid !== null && isValid && handleSubmit(e)}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
  const currentRow = !searchTask ? task : searchList;

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
          {currentRow.map((task, i) => (
            <Task
              key={i}
              task={task.task}
              isValid={isValid}
              editNewTask={editNewTask}
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
