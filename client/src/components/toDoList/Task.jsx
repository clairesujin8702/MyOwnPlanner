import React, { useState } from 'react';

const editTask = () => {};

export default ({ task }) => {
  const [editTask, setEditTask] = useState('');
  const editRow = (
    <div className='editRow'>
      <div className='searchContainer'>
        <input
          type='text'
          name='editTask'
          className='editTask'
          placeholder={task}
          value={editTask}
          onChange={(e) => handleChange(e)}
          onKeyPress={(e) => e.key === 'Enter' && editTask && save(e)}
        />
      </div>
      <div className='newButton'>
        <button>Save</button>
      </div>
    </div>
  );

  return (
    <>
      <hr />
      {editRow}
      <div className='row'>
        <div className='col1'>
          <div id='task'>{task}</div>
        </div>
        <div className='col2'>
          <div id='edit'>
            <span className='fa fa-pencil task-icon'></span>
          </div>
          <div id='delete'>
            <span className='fa fa-trash task-icon'></span>
          </div>
        </div>
      </div>
    </>
  );
};
