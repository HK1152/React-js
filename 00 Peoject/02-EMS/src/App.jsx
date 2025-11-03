import { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Auth/Login";
import EmpDashboard from "./Components/DashBoard/empDashboard";
import AdminDashboard from "./Components/DashBoard/adminDashboard";
import { getLocalStorages, setLocalStorages } from "./Utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";


function App() {
  const [User, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role);
      setLoggedInUserData(userData.data)
      

      // console.log(userData);
    }
  }, []);


  const handleLogin = (email, password) => {
    if (email == 'priya@gmail.com' && password == '123')  {
      setUser("admin")
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin"}))
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)//emp vo hai jo AuthProvider.jsx se ata hai, ye bhale hi inner fun. ho par ise {curly braces} mat dena warna vaha else wala part run joae ga
      if (employee) {
        setUser("employee"); 
        setLoggedInUserData(employee); 
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
      }
    } else {
      alert("galat hai bahi 😒");
    }
  };

  return (
    <>
      {!User ? <Login handleLogin={handleLogin} /> : ''}
       {User == 'admin' ? <AdminDashboard  changeUser={setUser}/> : (User == 'employee' ? <EmpDashboard  data={loggedInUserData} changeUser={setUser} /> : null)  }
       

      {/* <EmpDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
}

export default App;
