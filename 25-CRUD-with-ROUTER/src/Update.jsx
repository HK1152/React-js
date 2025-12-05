import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [value, setValue] = useState({
    name: "",
    username: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    axios.get("http://localhost:3000/users/" + id)
      .then((res) => {
        setValue(res.data);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put("http://localhost:3000/users/" + id, value)
      .then(() => {
        navigate("/");
      });
  };

  return (
    <div className="d-flex flex-column vh-100 justify-content-center p-5 container">
      <h1>Update User</h1>

      <form onSubmit={handleSubmit}>
        <div className="row m-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={value.name}
            onChange={(e) => setValue({ ...value, name: e.target.value })}
          />
        </div>

        <div className="row m-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            value={value.username}
            onChange={(e) => setValue({ ...value, username: e.target.value })}
          />
        </div>

        <div className="row m-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            value={value.email}
            onChange={(e) => setValue({ ...value, email: e.target.value })}
          />
        </div>

        <div className="row m-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            value={value.phone}
            onChange={(e) => setValue({ ...value, phone: e.target.value })}
          />
        </div>

        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}

export default Update;
