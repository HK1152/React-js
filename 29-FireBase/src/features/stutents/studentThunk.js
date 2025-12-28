import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from '../../firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";

export const fetchStudents = createAsyncThunk(
  "students/fetch",
  async () => {
    const snapshot = await getDocs(collection(db, "students"));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
);
export const addStudent = createAsyncThunk(
  "students/add",
  async (student) => {
    const docRef = await addDoc(collection(db, "students"), student);
    return { id: docRef.id, ...student };
  }
)

export const updateStudent = createAsyncThunk(
  "students/update",
  async ({ id, ...updates }) => {
    const docRef = doc(db, "students", id);
    await updateDoc(docRef, updates);
    return { id, ...updates };
  }
)

export const deleteStudent = createAsyncThunk(
  "students/delete",
  async (id) => {
    const docRef = doc(db, "students", id);
    await deleteDoc(docRef);
    return id;
  }
)