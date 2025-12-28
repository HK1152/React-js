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
            if (index !== -1) {
                state.list[index]={...state.list[index], name: action.payload.name}
            }
        })
    }
})

export default studentSlice.reducer;