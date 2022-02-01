import React, { useState } from 'react';
import AddTodo from './AddTodo';
import Tasktodo from './Tasktodo';

const TodoBoard = () => {
  const[tasks,setTasks]=useState([])

  const addTasks = (task) =>{
    const currentTasks = tasks.slice()
    currentTasks.push(task)
    setTasks(currentTasks)
  }
  const removeTask = (text) =>{
     const currentTasks = tasks
     const newTasks = currentTasks.filter((task) => task !==text)
     setTasks(newTasks)
  }
  return (
      <div>
          <AddTodo addTasks={addTasks}/>
          <Tasktodo tasks={tasks} removeTask={removeTask}/>
      </div>
  )
};

export default TodoBoard;
