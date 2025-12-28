

import React, { useState } from 'react'
import { addTask, updateTask, deleteTask } from './redux/TaskSlice'
import { useSelector, useDispatch } from 'react-redux'
import './index.css'
function App() {

  const [task, settask] = useState("")
  const [editIndex, seteditIndex] = useState(null)
  const [updateText, setupdateText] = useState("")


  //useselector
  const tasks = useSelector((state) => { return state.tasks.list })

  const dispatch = useDispatch()

  const handleAdd = () => {

    if (task.trim() == "") {
      return ""
    }
    dispatch(addTask(task))

    settask("")

  }

  //handle update
  const handleUpdate = (index) => {
    dispatch(updateTask({ index, newText: updateText }))
    seteditIndex(null)
    setupdateText("")
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  const handleEditKeyPress = (e, index) => {
    if (e.key === 'Enter') {
      handleUpdate(index)
    } else if (e.key === 'Escape') {
      seteditIndex(null)
      setupdateText("")
    }
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title text-xl">✨ My Tasks</h1>
        <p className="app-subtitle">Stay organized and productive</p>
      </header>

      <div className="input-container">
        <input 
          type="text" 
          className="task-input"
          placeholder="What needs to be done?"
          value={task} 
          onChange={(e) => { settask(e.target.value) }}
          onKeyPress={handleKeyPress}
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Add Task
        </button>
      </div>

      {tasks.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">📝</div>
          <div className="empty-state-text">No tasks yet</div>
          <div className="empty-state-subtext">Add a task to get started!</div>
        </div>
      ) : (
        <>
          <ul className="tasks-list">
            {tasks.map((x, ind) => (
              <li key={ind} className="task-item">
                {editIndex === ind ? (
                  <div className="edit-container">
                    <input 
                      type="text" 
                      className="edit-input"
                      value={updateText} 
                      onChange={(e) => { setupdateText(e.target.value) }}
                      onKeyDown={(e) => handleEditKeyPress(e, ind)}
                      autoFocus
                    />
                    <button 
                      className="btn btn-success" 
                      onClick={() => { handleUpdate(ind) }}
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="task-content">
                      <span className="task-text">{x}</span>
                    </div>
                    <div className="task-actions">
                      <button 
                        className="btn btn-secondary" 
                        onClick={() => {
                          seteditIndex(ind);
                          setupdateText(x)
                        }}
                      >
                        Edit
                      </button>
                      <button 
                        className="btn btn-danger" 
                        onClick={() => { dispatch(deleteTask(ind)) }}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
          <div className="task-count">
            {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'} total
          </div>
        </>
      )}
    </div>
  );
};

export default App