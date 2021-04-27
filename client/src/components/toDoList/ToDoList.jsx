import React from 'react';
import Task from './Task.jsx';

const ToDoList = ({ userInfo }) => {
  console.log('ToDoList page : ', userInfo);
  let mockData = [
    { id: 1, task: 'loginPage' },
    { id: 2, task: 'toDoList' },
  ];

  return (
    <div>
      <h2>My To-Do List</h2>
      {mockData.map((task, i) => (
        <Task key={i} task={task.task} />
      ))}
    </div>
  );
};

export default ToDoList;
