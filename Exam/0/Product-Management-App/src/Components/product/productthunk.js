import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from '../../firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async () => {
    const snapshot = await getDocs(collection(db, "products"));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
);

export const addProduct = createAsyncThunk(
  "products/add",
  async (product) => {
    const docRef = await addDoc(collection(db, "products"), product);
    return { id: docRef.id, ...product };
  }
)

export const updateProduct = createAsyncThunk(
  "products/update",
  async ({ id, ...updates }) => {
    const docRef = doc(db, "products", id);
    await updateDoc(docRef, updates);
    return { id, ...updates };
  }
)

export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (id) => {
    const docRef = doc(db, "products", id);
    await deleteDoc(docRef);
    return id;
  }
)
