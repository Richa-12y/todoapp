import React, { useState } from 'react';
import './App.css';


const AddTodo = (props) => {
    const[task,setTask]=useState('')
    const onInputChanege = (event) =>{
     setTask(event.target.value)
    }

   const handleAddTask = () =>{
         props.addTasks(task)
         setTask('')
    }
  return (
      <div>
          <input type="text" 
          placeholder="Enter Todo Task" 
          value={task} onChange={onInputChanege}
          className='addtaskInput'/>
          <button onClick={handleAddTask} className='addButton'>Add task</button>
      </div>
  )
};

export default AddTodo;
