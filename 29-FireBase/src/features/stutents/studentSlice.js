import { fetchStudents, addStudent,deleteStudent,updateStudent } from "./studentThunk";
import { createSlice } from "@reduxjs/toolkit";

const studentSlice=createSlice({
    name:"students",
    initialState:{
        list:[],
        loading:false,
    },
    extraReducers:(builer)=>{
        builer
        .addCase(fetchStudents.pending,(state)=>{
            state.loading=true;
        })
        .addCase(fetchStudents.fulfilled,(state,action)=>{
            state.loading=false;
            state.list=action.payload;
        })
        .addCase(addStudent.fulfilled,(state, action)=>{
            state.list.push(action.payload)
        })
        .addCase(deleteStudent.fulfilled,(state, action)=>{
            state.list=state.list.filter((student)=>student.id!==action.payload)
        })
        .addCase(updateStudent.fulfilled,(state, action)=>{
            const index=state.list.findIndex((student)=>student.id===action.payload.id)
            state.list[index]={...state.list[index],...action.payload.data}
        })
    }
})

export default studentSlice.reducer;