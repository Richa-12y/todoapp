import React from 'react';

function Tasktodo(props) {
  console.log(props.tasks)
  return (<div>
        {props.tasks.map((task, index) =>{
          
            return(
              <div className='textcenter'>
            <p onClick={()=>props.removeTask(task)} key={index}>{task}</p>
            
            </div>)
            
        })}
  </div>)
}

export default Tasktodo;
