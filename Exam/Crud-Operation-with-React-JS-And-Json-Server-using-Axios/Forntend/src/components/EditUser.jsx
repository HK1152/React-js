import React, { useState } from "react";
import axios from "axios";

function EditUser({ user, onSave, onCancel }) {
  const [form, setForm] = useState({
    profile: user?.profile || user?.image || "",
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
  });
  
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user) return;
    if (!validate()) return;

    // Use profile as the image field
    const updatedUser = { ...user, ...form, image: form.profile };
    try {
      await axios.put(`http://localhost:3000/users/${user.id}`, updatedUser);
      onSave?.(updatedUser);
    } catch (error) {
      console.error("Edit failed", error);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-white rounded shadow my-4">
      <h1 className="text-xl font-bold mb-4">Edit User</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block">Profile URL</label>
          <input
            type="text"
            value={form.profile}
            onChange={(e) => setForm((prev) => ({ ...prev, profile: e.target.value }))}
            className="w-full border px-3 py-2 rounded"
          />
          {formErrors.profile && <span className="text-red-500 text-sm">{formErrors.profile}</span>}
        </div>
        <div>
          <label className="block">Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            className="w-full border px-3 py-2 rounded"
          />
          {formErrors.name && <span className="text-red-500 text-sm">{formErrors.name}</span>}
        </div>
        <div>
          <label className="block">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            className="w-full border px-3 py-2 rounded"
          />
          {formErrors.email && <span className="text-red-500 text-sm">{formErrors.email}</span>}
        </div>
        <div>
          <label className="block">Phone</label>
          <input
            type="text"
            value={form.phone}
            onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
            className="w-full border px-3 py-2 rounded"
          />
          {formErrors.phone && <span className="text-red-500 text-sm">{formErrors.phone}</span>}
        </div>

        <div className="flex gap-2">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Update
          </button>
          <button type="button" onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditUser;
