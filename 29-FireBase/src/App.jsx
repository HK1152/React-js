import { useState, useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import {fetchStudents, addStudent, updateStudent, deleteStudent} from './features/stutents/studentThunk'
import "./App.css";

function App() {
  const [name, setname] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const dispatch = useDispatch();
  const students = useSelector((state)=>state.student.list)

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  const handleAddStudent = () => {
    if (name.trim()) {
      dispatch(addStudent({ name }));
      setname("");
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  const handleUpdate = (student) => {
    setEditingId(student.id);
    setEditName(student.name);
  };

  const handleSaveUpdate = (id) => {
    if (editName.trim()) {
      dispatch(updateStudent({ id, name: editName }));
      setEditingId(null);
      setEditName("");
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditName("");
  };

  return (
    <>
      <h2>Student management system</h2>
      <input type="text"
      value={name} onChange={(e)=>{setname(e.target.value)}} />
      <button onClick={handleAddStudent}>Add Student</button>
      <ul>
        {
          students.map((student) => (
            <li key={student.id}>
              {editingId === student.id ? (
                <>
                  <input 
                    type="text" 
                    value={editName} 
                    onChange={(e) => setEditName(e.target.value)} 
                  />
                  <button onClick={() => handleSaveUpdate(student.id)}>Save</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </>
              ) : (
                <>
                  {student.name}
                  <button onClick={() => handleUpdate(student)}>Update</button>
                  <button onClick={() => handleDelete(student.id)}>Delete</button>
                </>
              )}
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default App;
