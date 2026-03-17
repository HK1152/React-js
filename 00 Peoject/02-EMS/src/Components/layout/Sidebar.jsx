import { Icon } from "../ui/Icons";
import { getVisibleNav } from "../../Utils/roles";

const navItems = [
  { id: "dashboard",  label: "Dashboard",   icon: "dashboard",  section: "main" },
  { id: "employees",  label: "Employees",   icon: "users",      section: "main", badge: "12" },
  { id: "attendance", label: "Attendance",  icon: "calendar",   section: "main" },
  { id: "leave",      label: "Leave",       icon: "umbrella",   section: "main", badge: "3" },
  { id: "payroll",    label: "Payroll",     icon: "dollar-sign",section: "main" },
  { id: "reports",    label: "Reports",     icon: "bar-chart",  section: "analytics" },
  { id: "settings",   label: "Settings",   icon: "settings",   section: "analytics" },
];

export default function Sidebar({ active, onNav, collapsed, onToggle, user }) {
  const filteredNav = getVisibleNav(navItems, user);

  const main      = filteredNav.filter(n => n.section === "main");
  const analytics = filteredNav.filter(n => n.section === "analytics");

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-icon">HK</div>
        {!collapsed && <span className="logo-text">HK Pro</span>}
      </div>

      {/* Nav */}
      <nav className="sidebar-nav">
        {!collapsed && <div className="nav-section-label">Main Menu</div>}

        {main.map(item => (
          <NavBtn key={item.id} item={item} active={active} onNav={onNav} collapsed={collapsed} />
        ))}

        <div style={{ height: 8 }} />
        {!collapsed && <div className="nav-section-label">Analytics</div>}

        {analytics.map(item => (
          <NavBtn key={item.id} item={item} active={active} onNav={onNav} collapsed={collapsed} />
        ))}
      </nav>

      {/* Footer — collapse toggle */}
      <div className="sidebar-footer">
        <button
          onClick={onToggle}
          className={`nav-item ${collapsed ? "" : ""}`}
          style={{ width: "100%", background: "none", border: "none", cursor: "pointer", gap: 10 }}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <div
            style={{
              width: 28, height: 28, borderRadius: 8,
              background: "var(--gray-100)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, transition: "transform 0.3s var(--ease)",
              transform: collapsed ? "rotate(180deg)" : "none",
            }}
          >
            <Icon name="chevron-left" size={14} color="var(--gray-500)" />
          </div>
          <span className="nav-label" style={{ fontSize: 13, color: "var(--gray-500)", fontWeight: 500 }}>
            Collapse
          </span>
        </button>
      </div>
    </aside>
  );
}

function NavBtn({ item, active, onNav, collapsed }) {
  const isActive = active === item.id;
  return (
    <div
      className={`nav-item ${isActive ? "active" : ""}`}
      onClick={() => onNav(item.id)}
      title={collapsed ? item.label : undefined}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === "Enter" && onNav(item.id)}
    >
      <Icon
        name={item.icon}
        size={17}
        color={isActive ? "var(--blue-700)" : "var(--gray-500)"}
        strokeWidth={isActive ? 2.2 : 1.8}
      />
      <span className="nav-label">{item.label}</span>
      {item.badge && <span className="nav-badge">{item.badge}</span>}
    </div>
  );
}
