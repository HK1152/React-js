import { useState } from "react";
import "./index.css";

import Login        from "./pages/Login";
import Sidebar      from "./components/layout/Sidebar";
import Topbar       from "./components/layout/Topbar";
import Dashboard    from "./pages/Dashboard";
import Employees    from "./pages/Employees";
import Attendance   from "./pages/Attendance";
import Leave        from "./pages/Leave";
import Payroll      from "./pages/Payroll";
import Reports      from "./pages/Reports";
import Settings     from "./pages/Settings";
import Unauthorized from "./components/auth/Unauthorized";
import { canAccessPage } from "./Utils/roles";

const pages = { dashboard: Dashboard, employees: Employees, attendance: Attendance, leave: Leave, payroll: Payroll, reports: Reports, settings: Settings };

function DashboardLayout({ user, onLogout }) {
  const [activePage,   setActivePage]   = useState("dashboard");
  const [sidebarCollapsed, setCollapsed] = useState(false);
  const [searchQuery,  setSearchQuery]  = useState("");

  const isAllowed = canAccessPage(activePage, user);
  const PageComponent = pages[activePage] || Dashboard;

  return (
    <div className="ems-layout">
      <Sidebar
        active={activePage}
        onNav={setActivePage}
        collapsed={sidebarCollapsed}
        onToggle={() => setCollapsed(c => !c)}
        user={user}
      />
      <div className={`main-content ${sidebarCollapsed ? "sidebar-collapsed" : ""}`}>
        <Topbar
          activePage={activePage}
          onSearch={setSearchQuery}
          onLogout={onLogout}
          user={user}
        />
        {isAllowed ? (
          <PageComponent key={activePage} searchQuery={searchQuery} user={user} />
        ) : (
          <Unauthorized onBack={() => setActivePage("dashboard")} />
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("ems_user");
    return saved ? JSON.parse(saved) : null;
  });

  const handleLogin = (role, userData) => {
    const userObj = { 
      role, 
      ...userData,
      name: userData.firstName || (role === "admin" ? "Hare Krishna" : "Employee")
    };
    localStorage.setItem("ems_user", JSON.stringify(userObj));
    setUser(userObj);
  };

  const handleLogout = () => {
    localStorage.removeItem("ems_user");
    setUser(null);
  };

  if (!user) return <Login onLogin={handleLogin} />;
  return <DashboardLayout user={user} onLogout={handleLogout} />;
}
