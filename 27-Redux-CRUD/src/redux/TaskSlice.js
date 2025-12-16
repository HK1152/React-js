import { createSlice } from "@reduxjs/toolkit";

const TaskSlice=createSlice({
    name:"tasks",
    initialState:{
        list:[]
    },
    reducers:{
        addTask(state,action){
            state.list.push(action.payload)
        },
        deleteTask(state,action){
            state.list=state.list.filter((x,index)=>{
                return  index != action.payload
            })
        },
        updateTask(state,action){

            const {index,newText}=action.payload

            state.list[index]=newText
        }
    }
})

export const {addTask,updateTask,deleteTask}=TaskSlice.actions

export default TaskSlice.reducer