import React, { useState } from 'react'
import TaskList from './TaskList';

const Task = () => {

  
  const [inputList , setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);

  };

 

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems,inputList];

    });

    setInputList("");

  };
  const deleteItems =(id) =>{
    console.log("deleted");
  
 

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) =>{
        return index !==id;
      });
    });
};





  return (
    <>
    
    <div className="container mt-3"></div>
    <div className="center_data mt-4"></div>
    <div className="main_div">
      <div className="center_div">
        <br/>
        <div className="center_data mt-4"></div>
        <h3 className="text-center col-lg-4">Tasks</h3>
        <br/>
        
        <input className="text-left col-lg-4"type="text" placeholder="Enter your Task" value={inputList} onChange={itemEvent}/>
        
       
      
        
        
        
        
        <ol>
          {/* <li>{inputList}</li>  */}
          {Items.map((itemval, index) =>{
            return <TaskList key={index}
            id={index}
             text={itemval}
             onSelect={deleteItems}
             />;
          } 
          )}  
          
          
        </ol>
        <div>
        <button onClick={listOfItems}> Add Task </button>
        </div>

      </div>

    </div>
    </>
  )
}

export default Task;
