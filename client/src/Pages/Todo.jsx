import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Toaster,toast} from 'react-hot-toast';
import './Todo.css'
import AddList from '../Components/AddList'
import { Modal } from 'antd'


const Todo = () => {
  const [list, setList] = useState ([]);
  const [name, setName] = useState ();
  const [visible, setVisible] = useState (false);
  const [selected, setSelected] = useState (null);
  const [upadtedName, setUpdatedName] = useState (false);

    //hanleForm
  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      const{data}=await axios.post('/api/add',{name,})
      if (data?.success) {
        getAllCategory()
        setName("")
        toast.success(`${name} is Created`)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error("Somthin went wrong in input form")
    }
  }
  //get-list
  const getAllCategory = async () => {
    try {
      const {data} = await axios.get ('/api/get');
      if (data.success) {
        setList (data.list);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect (() => {
    getAllCategory ();
    //eslint-disable-next-line
  }, []);

   //update category
   const handleUpdate =async(e)=>{
    e.preventDefault()
    try {
      const {data} = await axios.put(
        `/api/update/${selected._id}`,{name:upadtedName}
      );
      if (data.success) {
        toast.success(`${upadtedName} is updates`)
        setSelected(null)
        setUpdatedName('')
        setVisible(false)
        getAllCategory()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error('somthing went wrong')
    }
  }
   //delete category
   const handleDelete =async(Pid)=>{
    try {
      const {data} = await axios.delete(
        `/api/remove/${Pid}`
      );
      if (data.success) {
        toast.success(`item is deleted`)
        getAllCategory()
      } else {
        toast.error(data.message)
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('somthing went wrong')
    }
  }
  return (
    <div className="todo-container">
            <div className="header">Todo App</div>
            <div className="add-task">
              <AddList value={name} setValue={setName} handleSubmit={handleSubmit}/>
            </div>
            <div className="tasks">
            {list?.map(task=>(
                <div className="list-tasks" key={task._id}>
                {task.name}
                  <div>
                      <button  className="delete-btn upt"onClick={()=>{setVisible(true);setUpdatedName(task.name); setSelected(task)}}>Update</button>
                      <button  className="delete-btn dlt" onClick={()=>{handleDelete(task._id)}}>Delete</button>
                  </div>
             </div>
        ))}

              </div>
              <Toaster />
              <Modal onCancel={()=>setVisible(false)} footer={null} visible={visible} ><AddList value={upadtedName} handleSubmit={handleUpdate} setValue={setUpdatedName}/></Modal>
        </div>
  )
}

export default Todo

// {/* <div className="todo-container">
//             <div className="header">Todo App</div>
//             <div className="add-task">
//               <AddTask addTask={addTask}/>
//               </div>
//             <div className="tasks">
//               {tasks.map((task, index) => (
//                 <ListTask task={task} removeTask={removeTask} index={index}/>
//               ))}
//               </div>
//         </div> */}


        // const [tasks, setTasks] = useState([
   
        // ])
      
        // const addTask =(tittle) => {
        //   const newTask = [...tasks,{tittle}]
        //   setTasks(newTask)
        // }
      
        // const removeTask = (index) => {
        //   const newTask = [...tasks]
        //   newTask.splice(index,1)
        //   setTasks(newTask)
        // }