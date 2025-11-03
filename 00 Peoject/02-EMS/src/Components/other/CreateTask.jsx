import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

function CreateTask() {

const [userData,setUserData] = useContext(AuthContext);
  
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskAsignTo, setTaskAsignTo] = useState("");
  const [TaskCategory, setTaskCategory] = useState("");

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("task done");
    // console.log(taskTitle,taskDate,taskAsignTo,TaskCategory , taskDescription);
    
    setNewTask({taskDate,taskDescription,taskTitle,TaskCategory,active:false,newTask:true,failed:false,completed:false})
    
    
    const data = userData
    
    
    data.forEach((e)=>{
      if(taskAsignTo.trim().toUpperCase() == e.firstName.trim().toUpperCase()){
        console.log('ye me hu');
        e.tasks.push(newTask)
        e.taskNumbers.newTask = e.taskNumbers.newTask  + 1
        console.log(e);
        
       
       
      }
      setUserData(data)
      console.log(data);
      
       setTaskAsignTo("")
        setTaskCategory('')
        setTaskDate('')
        setTaskTitle('')
        setTaskDescription('') // setNewTask me na ho jaae
    })
  };
  return (
    <div className="p-5  mt-7 rounded bg-[#1c1c1c]">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className=" flex items-start justify-between "
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Tesk Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-gray-400 mb-5"
              type="text"
              name=""
              id=""
              placeholder="Make a ui"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-gray-400 mb-5"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Asing two</h3>
            <input
              value={taskAsignTo}
              onChange={(e) => {
                setTaskAsignTo(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-gray-400 mb-5"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={TaskCategory}
              onChange={(e) => {
                setTaskCategory(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-gray-400 mb-5"
              type="text"
              placeholder="design, dev,..etc"
            />
          </div>
        </div>

        <div className="flex flex-col items-start w-1/2">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
           value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
            name=""
            id=""
            cols="30"
            rows="5"
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400"
          ></textarea>
          <button
            type="submit"
            className="w-full mt-4 text-sm rounded px-5 py-3 bg-emerald-500 hover:bg-emerald-600 "
          >
            Create task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
