import React, { useState } from 'react';

const Task = ({
  id,
  task,
  isValid,
  editNewTask,
  handleValidation,
  handleSubmit,
  handleDelete,
}) => {
  const [editStatus, setEditStatus] = useState(false);

  const handleEditStatus = () => {
    setEditStatus(!editStatus);
  };
  const editRow = (
    <div className='editRow'>
      <div className='searchContainer'>
        <input
          type='text'
          className='editNewTask'
          placeholder={task}
          value={editNewTask}
          onChange={(e) => handleValidation(e)}
          onKeyPress={(e) =>
            e.key === 'Enter' &&
            isValid !== null &&
            isValid &&
            handleSubmit(e, id)
          }
        />
      </div>
      <div
        className='newButton'
        onClick={(e) =>
          isValid !== null && isValid && editNewTask && handleSubmit(e, id)
        }
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
            <div id='delete' onClick={(e) => handleDelete(e, id)}>
              <span className='fa fa-trash task-icon'></span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Task;
