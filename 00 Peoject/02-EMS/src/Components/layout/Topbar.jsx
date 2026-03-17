import { useState, useRef, useEffect } from "react";
import { Icon } from "../ui/Icons";

const PAGE_TITLES = {
  dashboard:  "Dashboard Overview",
  employees:  "Employee Management",
  attendance: "Attendance Management",
  leave:      "Leave Management",
  payroll:    "Payroll Management",
  reports:    "Reports & Analytics",
  settings:   "Settings & Profile",
};

const NOTIFICATIONS = [
  { icon: "calendar",     text: "Dhruv Singh's leave request needs approval", time: "5 min ago",  unread: true },
  { icon: "dollar-sign",  text: "Payroll processing due in 2 days",           time: "1 hr ago",   unread: true },
  { icon: "user",         text: "Vikram Nair has been onboarded",             time: "3 hr ago",   unread: false },
];

function useOutsideClick(ref, cb) {
  useEffect(() => {
    const handler = e => { if (ref.current && !ref.current.contains(e.target)) cb(); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [ref, cb]);
}

export default function Topbar({ activePage, onSearch, onLogout, user }) {
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const notifRef  = useRef();
  const profileRef = useRef();

  useOutsideClick(notifRef,   () => setNotifOpen(false));
  useOutsideClick(profileRef, () => setProfileOpen(false));

  const unreadCount = NOTIFICATIONS.filter(n => n.unread).length;

  return (
    <header className="topbar">
      {/* Left */}
      <div className="topbar-left">
        <h1 className="topbar-title">{PAGE_TITLES[activePage] || "Dashboard"}</h1>
      </div>

      {/* Right */}
      <div className="topbar-right">
        {/* Search */}
        <div className="search-box">
          <Icon name="search" size={15} color="var(--gray-400)" />
          <input
            type="text"
            placeholder="Search anything..."
            onChange={e => onSearch?.(e.target.value)}
            aria-label="Search"
          />
        </div>

        {/* Notifications */}
        <div className="dropdown" ref={notifRef}>
          <button
            className="icon-btn"
            onClick={() => { setNotifOpen(o => !o); setProfileOpen(false); }}
            aria-label="Notifications"
          >
            <Icon name="bell" size={17} color="var(--gray-500)" />
            {unreadCount > 0 && <span className="notif-dot">{unreadCount}</span>}
          </button>

          {notifOpen && (
            <div className="dropdown-menu anim-popIn" style={{ minWidth: 300, right: 0 }}>
              <div className="dropdown-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 13.5, fontWeight: 700, color: "var(--gray-900)" }}>Notifications</span>
                <span className="badge badge-blue">{unreadCount} new</span>
              </div>
              {NOTIFICATIONS.map((n, i) => (
                <div key={i} className="dropdown-item" style={{ alignItems: "flex-start", gap: 10, padding: "10px 14px" }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: n.unread ? "var(--blue-50)" : "var(--gray-100)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: 1,
                  }}>
                    <Icon name={n.icon} size={15} color={n.unread ? "var(--blue-700)" : "var(--gray-400)"} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12.5, color: "var(--gray-800)", fontWeight: n.unread ? 600 : 400, lineHeight: 1.4 }}>
                      {n.text}
                    </div>
                    <div style={{ fontSize: 11, color: "var(--gray-400)", marginTop: 3 }}>{n.time}</div>
                  </div>
                  {n.unread && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--blue-500)", flexShrink: 0, marginTop: 6 }} />}
                </div>
              ))}
              <div style={{ padding: "10px 14px", borderTop: "1px solid var(--gray-100)", textAlign: "center" }}>
                <span style={{ fontSize: 12.5, color: "var(--blue-700)", fontWeight: 600, cursor: "pointer" }}>
                  View all notifications
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="dropdown" ref={profileRef}>
          <button
            className="user-chip"
            onClick={() => { setProfileOpen(o => !o); setNotifOpen(false); }}
            aria-label="Profile menu"
          >
            <div style={{
              width: 28, height: 28, borderRadius: "50%",
              background: "#161616",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "white", fontSize: 11, fontWeight: 700, flexShrink: 0,
            }}>{user?.name?.charAt(0) || "U"}</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className="user-name">{user?.name || "User"}</span>
              <span className="user-role">{user?.role === "admin" ? "Administrator" : "Employee"}</span>
            </div>
            <Icon name="chevron-down" size={13} color="var(--gray-400)" />
          </button>

          {profileOpen && (
            <div className="dropdown-menu anim-popIn">
              <div className="dropdown-header">
                <div style={{ fontWeight: 700, fontSize: 13.5, color: "var(--gray-900)" }}>{user?.name || "User"}</div>
                <div style={{ fontSize: 11.5, color: "var(--gray-400)", marginTop: 1 }}>
                  {user?.email || "user@ems.io"}
                </div>
              </div>
              <DropItem icon="user"      label="My Profile"   />
              <DropItem icon="settings"  label="Preferences"  />
              <DropItem icon="bar-chart" label="My Reports"   />
              <DropItem icon="shield"    label="Security"     />
              <div className="dropdown-sep" />
              <div className="dropdown-item danger" onClick={onLogout}>
                <Icon name="logout" size={15} />
                <span>Sign Out</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function DropItem({ icon, label, onClick }) {
  return (
    <div className="dropdown-item" onClick={onClick}>
      <Icon name={icon} size={15} color="var(--gray-400)" />
      <span>{label}</span>
    </div>
  );
}
