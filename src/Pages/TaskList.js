import React from 'react'
import "./button.css";

const TaskList = (props) => {

    

  return (
    <div className="task_style">
        {/* <button className="Button"aria-hidden="true" onClick={() =>{props.onSelect(props.id)}}/> */}

        <button class="button button1" aria-hidden="true" onClick={() =>{props.onSelect(props.id)}}> Delete </button>
       
        <li>{props.text}</li>
      
    </div>
  );
};

export default TaskList;
