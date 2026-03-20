import React, { useState } from 'react'
import axios from 'axios';

function AddUser({ onAdd, onCancel }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        profile: ""
    });
    
    // errors state
    const [formErrors, setFormErrors] = useState({});

    const validate = () => {
      const errors = {};
      if (form.name.trim().length < 3) errors.name = "Name 3 characters required";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!form.email.trim() || !emailRegex.test(form.email)) errors.email = "Valid email required";
      const phoneRegex = /^[0-9]+$/;
      if (!form.phone.trim() || !phoneRegex.test(form.phone)) errors.phone = "Only numbers allowed";
      if (!form.profile.trim()) errors.profile = "Image link required";
      
      setFormErrors(errors);
      return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        
        try {
            await axios.post("http://localhost:3000/users", { ...form, image: form.profile });
            alert("User added successfully!");
            setForm({
                name: "",
                email: "",
                phone: "",
                profile: ""
            });
            setFormErrors({});
            if (onAdd) onAdd(); 
        } catch (error) {
            console.error("Failed to add user", error);
            alert("Failed to add user");
        }
    };

    return (
        <div className="container mx-auto p-4 mb-8 bg-white border rounded">
            <h2 className="text-xl font-bold mb-3">Add User</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div>
                  <input className="border px-2 py-1 mr-2" type="text" placeholder="Profile URL" value={form.profile} onChange={(e) => setForm((prev) => ({ ...prev, profile: e.target.value }))} />
                  {formErrors.profile && <span className="text-red-500 text-sm">{formErrors.profile}</span>}
                </div>
                <div>
                  <input className="border px-2 py-1 mr-2" type="text" placeholder="Name" value={form.name} onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))} />
                  {formErrors.name && <span className="text-red-500 text-sm">{formErrors.name}</span>}
                </div>
                <div>
                  <input className="border px-2 py-1 mr-2" type="email" placeholder="Email" value={form.email} onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))} />
                  {formErrors.email && <span className="text-red-500 text-sm">{formErrors.email}</span>}
                </div>
                <div>
                  <input className="border px-2 py-1 mr-2" type="text" placeholder="Phone" value={form.phone} onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))} />
                  {formErrors.phone && <span className="text-red-500 text-sm">{formErrors.phone}</span>}
                </div>
                <div className="flex gap-2">
                  <button type="submit" className="bg-blue-600 text-white w-32 py-1 rounded">Add User</button>
                  {onCancel && <button type="button" onClick={onCancel} className="bg-gray-500 text-white w-32 py-1 rounded">Cancel</button>}
                </div>
            </form>
        </div>
    )
}

export default AddUser;