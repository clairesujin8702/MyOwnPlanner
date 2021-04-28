import React, { useState } from 'react';

const Task = ({ task, isValid, handleValidation, handleSubmit, editTask }) => {
  const [editStatus, setEditStatus] = useState(false);

  const handleEditStatus = () => {
    setEditStatus(!editStatus);
  };

  const editRow = (
    <div className='editRow'>
      <div className='searchContainer'>
        <input
          type='text'
          className='editTask'
          name='editTask'
          placeholder={task}
          value={editTask}
          onChange={(e) => handleValidation(e)}
          onKeyPress={(e) =>
            e.key === 'Enter' &&
            isValid !== null &&
            isValid &&
            handleSubmit(e, task)
          }
        />
      </div>
      <div
        className='newButton'
        onClick={(e) => isValid !== null && isValid && handleSubmit(e, task)}
      >
        <button onClick={() => handleEditStatus()}>Save</button>
      </div>
    </div>
  );

  return (
    <>
      <hr />
      {editStatus ? (
        editRow
      ) : (
        <div className='row'>
          <div className='col1'>
            <div id='task'>{task}</div>
          </div>
          <div className='col2'>
            <div id='edit' onClick={() => handleEditStatus()}>
              <span className='fa fa-pencil task-icon'></span>
            </div>
            <div id='delete'>
              <span className='fa fa-trash task-icon'></span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Task;
