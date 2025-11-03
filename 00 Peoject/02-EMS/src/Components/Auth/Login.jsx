import React, { useState } from "react";

function Login({handleLogin}) {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  function submitHandler(e) {
    e.preventDefault();
    handleLogin(email,pwd)
    setEmail('')
    setPwd('')
    
  }
 
  
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black text-white">
      <div className="border-2 p-20 flex items-center justify-center flex-col">
        <h1>Login</h1>
        <form
          action=""
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex justify-between items-center flex-col gap-5 p-10 border-2 placeholder-shown:text-white "
        >
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="outline-none border-2 px-5"
           
            placeholder="Enter Email"
          />
          <input
            required
            value={pwd}
            onChange={(e) => {
              setPwd(e.target.value);
            }}
            type="password"
            className="outline-none border-2 px-5"
          
            placeholder="Password"
          />
          <button className="bg-green-900 px-5 py-2">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
