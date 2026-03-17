import { useState, useMemo } from "react";
import { attendanceData } from "../data/mockData";
import { Icon } from "../components/ui/Icons";
import { isAdmin } from "../Utils/roles";

const AV = { 
  "av-blue": "linear-gradient(135deg,#1d4ed8,#60a5fa)", 
  "av-teal": "linear-gradient(135deg,#0d9488,#2dd4bf)", 
  "av-green": "linear-gradient(135deg,#16a34a,#4ade80)", 
  "av-purple": "linear-gradient(135deg,#7c3aed,#c084fc)", 
  "av-amber": "linear-gradient(135deg,#d97706,#fbbf24)", 
  "av-red": "linear-gradient(135deg,#dc2626,#f87171)", 
  "av-pink": "linear-gradient(135deg,#db2777,#f472b6)" 
};

function Avatar({ initials, colorClass, size = 32 }) {
  return (
    <div style={{ 
      width: size, height: size, borderRadius: "50%", 
      background: AV[colorClass] || AV["av-blue"], 
      display: "flex", alignItems: "center", justifyContent: "center", 
      color: "white", fontSize: size * 0.32, fontWeight: 700, flexShrink: 0,
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
      {initials}
    </div>
  );
}

const STATUS_CONFIG = {
  Present: { badgeClass: "badge-green", icon: "check-circle", color: "var(--color-success)" },
  Late:    { badgeClass: "badge-amber", icon: "clock",        color: "var(--color-warning)" },
  Absent:  { badgeClass: "badge-red",   icon: "x-circle",     color: "var(--color-error)"   },
  Leave:   { badgeClass: "badge-blue",  icon: "umbrella",     color: "var(--blue-700)"      },
  Remote:  { badgeClass: "badge-purple",icon: "briefcase",    color: "var(--color-purple)"  },
};

function StatusBadge({ status }) {
  const cfg = STATUS_CONFIG[status] || {};
  return (
    <span className={`badge ${cfg.badgeClass || "badge-gray"}`} style={{ padding: "4px 10px", gap: 6 }}>
      <Icon name={cfg.icon || "info"} size={12} color={cfg.color} strokeWidth={2.2} />
      {status}
    </span>
  );
}

/* ── Mini Calendar ───────────────────────────────────────────── */
function MiniCalendar({ attendance = [] }) {
  const monthLabel = "March 2026";
  const daysInMonth = 31;
  const startDow = 6; // March 2026 starts Saturday
  const header = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  
  // Mocking some attendance points for the calendar visual
  const presentDays = [3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 24, 25, 26, 27, 28];
  const absentDays = [2, 9];
  const leaveDays = [16, 23];

  return (
    <div className="anim-fadeIn">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 4, marginBottom: 8 }}>
        {header.map(h => (
          <div key={h} style={{ fontSize: 11, fontWeight: 700, color: "var(--gray-400)", textAlign: "center" }}>{h}</div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 4 }}>
        {Array(startDow).fill(null).map((_, i) => <div key={"e" + i} />)}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(d => {
          const isToday = d === 14;
          const isPresent = presentDays.includes(d);
          const isAbsent = absentDays.includes(d);
          const isLeave = leaveDays.includes(d);
          
          let bg = "transparent";
          let color = "var(--gray-500)";
          let border = "none";

          if (isToday) {
            bg = "var(--blue-700)";
            color = "white";
          } else if (isPresent) {
            bg = "var(--color-success-bg)";
            color = "var(--color-success)";
          } else if (isAbsent) {
            bg = "var(--color-error-bg)";
            color = "var(--color-error)";
          } else if (isLeave) {
            bg = "var(--blue-50)";
            color = "var(--blue-700)";
          }

          return (
            <div
              key={d}
              className="cal-day-cell"
              style={{
                aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center",
                borderRadius: 8, fontSize: 11, fontWeight: isToday ? 800 : 600, cursor: "pointer",
                background: bg, color: color, border: border,
                transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: isToday ? "var(--shadow-blue)" : "none",
              }}
              title={`March ${d}, 2026`}
            >
              {d}
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginTop: 16, paddingTop: 12, borderTop: "1px solid var(--gray-50)" }}>
        {[
          ["var(--color-success)", "Present"],
          ["var(--color-error)", "Absent"],
          ["var(--blue-700)", "Leave/WFH"],
        ].map(([c, l]) => (
          <div key={l} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 10.5, color: "var(--gray-500)", fontWeight: 500 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}

const DEPTS = ["All", "Engineering", "Marketing", "HR", "Design", "Finance", "Management"];
const STATUSES = ["All", "Present", "Late", "Absent", "Leave", "Remote"];

export default function Attendance({ user }) {
  const adminState = isAdmin(user);
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("All");
  const [status, setStatus] = useState("All");

  const personalData = useMemo(() => {
    return attendanceData.filter(a => a.name === (user?.firstName || user?.name) || a.name === user?.name);
  }, [user]);

  const sourceData = adminState ? attendanceData : personalData;

  const filtered = useMemo(() => {
    return sourceData.filter(a => {
      const q = search.toLowerCase();
      return (
        (a.name.toLowerCase().includes(q)) &&
        (dept === "All" || a.dept === dept) &&
        (status === "All" || a.status === status)
      );
    });
  }, [search, dept, status, sourceData]);

  const stats = useMemo(() => ({
    present: sourceData.filter(a => a.status === "Present").length,
    late: sourceData.filter(a => a.status === "Late").length,
    absent: sourceData.filter(a => a.status === "Absent").length,
    leave: sourceData.filter(a => a.status === "Leave" || a.status === "Remote").length,
  }), [sourceData]);

  const STAT_CARDS = [
    { label: "Present Today", val: stats.present, icon: "check-circle", color: "var(--color-success)", bg: "var(--color-success-bg)", trend: "+2" },
    { label: "Absent", val: stats.absent, icon: "x-circle", color: "var(--color-error)", bg: "var(--color-error-bg)", trend: "0" },
    { label: "Late Arrival", val: stats.late, icon: "clock", color: "var(--color-warning)", bg: "var(--color-warning-bg)", trend: "-1" },
    { label: "On Leave", val: stats.leave, icon: "umbrella", color: "var(--blue-700)", bg: "var(--blue-50)", trend: "+1" },
  ];

  return (
    <div className="page-content anim-fadeIn">
      {/* Stat Cards */}
      {adminState && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14, marginBottom: 20 }}>
          {STAT_CARDS.map((s, i) => (
            <div key={i} className="card stat-card card-hoverable" style={{ padding: 18, position: "relative", overflow: "hidden" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontSize: 12.5, fontWeight: 600, color: "var(--gray-400)", marginBottom: 4 }}>{s.label}</div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: "var(--gray-900)" }}>{s.val}</div>
                </div>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={s.icon} size={20} color={s.color} strokeWidth={2} />
                </div>
              </div>
              <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 4, fontSize: 11.5 }}>
                <span style={{ color: s.trend.startsWith("+") ? "var(--color-success)" : s.trend.startsWith("-") ? "var(--color-error)" : "var(--gray-400)", fontWeight: 700 }}>
                  {s.trend !== "0" ? s.trend : ""}
                </span>
                <span style={{ color: "var(--gray-400)" }}>{s.trend !== "0" ? "from yesterday" : "No change"}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Main Content Layout */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 16, alignItems: "start" }}>
        
        {/* Attendance Table Section */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Toolbar */}
          <div className="card" style={{ padding: "14px 18px", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            {adminState && (
              <>
                <div className="search-box" style={{ width: 240, background: "var(--gray-50)" }}>
                  <Icon name="search" size={15} color="var(--gray-400)" />
                  <input type="text" placeholder="Search employee..." value={search} onChange={e => setSearch(e.target.value)} />
                </div>
                
                <div style={{ display: "flex", gap: 8 }}>
                  <select className="form-input" value={dept} onChange={e => setDept(e.target.value)} style={{ width: 140 }}>
                    {DEPTS.map(d => <option key={d}>{d}</option>)}
                  </select>
                  <select className="form-input" value={status} onChange={e => setStatus(e.target.value)} style={{ width: 130 }}>
                    {STATUSES.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </>
            )}
            
            <div style={{ marginLeft: adminState ? "auto" : "0", fontWeight: 700, fontSize: 14, color: "var(--gray-900)" }}>
              {adminState ? "Company Logs" : "My Attendance Log"}
            </div>

            <button className="btn btn-secondary btn-sm" style={{ marginLeft: adminState ? "0" : "auto" }}>
              <Icon name="download" size={14} /> Export
            </button>
          </div>

          {/* Table Container */}
          <div className="card" style={{ overflow: "hidden" }}>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Department</th>
                    <th>Check In</th>
                    <th>Check Out</th>
                    <th style={{ textAlign: "center" }}>Status</th>
                    <th>Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((a, i) => (
                    <tr key={i}>
                      <td>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <Avatar initials={a.avatar} colorClass={a.avColor} size={34} />
                          <div>
                            <div style={{ fontWeight: 700, color: "var(--gray-900)", fontSize: 13.5 }}>{a.name}</div>
                            <div style={{ fontSize: 11, color: "var(--gray-400)" }}>{a.dept}</div>
                          </div>
                        </div>
                      </td>
                      <td><span className="badge badge-blue">{a.dept}</span></td>
                      <td>
                        {a.checkIn ? (
                          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 700, color: "var(--color-success)" }}>
                            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-success)" }} />
                            {a.checkIn}
                          </div>
                        ) : <span style={{ color: "var(--gray-300)" }}>—</span>}
                      </td>
                      <td>
                        {a.checkOut ? (
                          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 700, color: "var(--gray-500)" }}>
                            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gray-300)" }} />
                            {a.checkOut}
                          </div>
                        ) : <span style={{ color: "var(--gray-300)" }}>—</span>}
                      </td>
                      <td style={{ textAlign: "center" }}><StatusBadge status={a.status} /></td>
                      <td style={{ fontSize: 13, fontWeight: 700, color: "var(--gray-700)", fontFamily: "monospace" }}>
                        {a.hours || "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filtered.length === 0 && (
                <div className="empty-state">
                  <div className="empty-icon-wrap"><Icon name="calendar" size={28} color="var(--gray-300)" /></div>
                  <div className="empty-title">No attendance records</div>
                  <div className="empty-desc">No employees match your current filter criteria.</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Calendar Card */}
          <div className="card" style={{ padding: 20 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "var(--gray-900)" }}>Calendar</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "var(--blue-700)", display: "flex", alignItems: "center", gap: 4 }}>
                <Icon name="calendar" size={13} /> Mar 2026
              </div>
            </div>
            <MiniCalendar />
          </div>

          {/* Quick Summary Card */}
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--gray-900)", marginBottom: 16 }}>Performance Index</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Punctuality", val: 94, color: "var(--color-success)" },
                { label: "Avg Work Hours", val: 82, color: "var(--blue-600)" },
                { label: "Remote Work", val: 15, color: "var(--color-purple)" },
              ].map((item, idx) => (
                <div key={idx}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 12 }}>
                    <span style={{ color: "var(--gray-500)", fontWeight: 500 }}>{item.label}</span>
                    <span style={{ fontWeight: 700, color: "var(--gray-900)" }}>{item.val}%</span>
                  </div>
                  <div className="progress-track" style={{ height: 6 }}>
                    <div className="progress-fill" style={{ width: `${item.val}%`, background: item.color }} />
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: 22, padding: 14, background: "var(--blue-50)", borderRadius: 12, border: "1px solid var(--blue-100)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <Icon name="info" size={14} color="var(--blue-700)" />
                <span style={{ fontSize: 13, fontWeight: 700, color: "var(--blue-700)" }}>Smart Tip</span>
              </div>
              <p style={{ fontSize: 12, color: "var(--blue-800)", lineHeight: 1.5, opacity: 0.8 }}>
                {adminState 
                  ? `${user?.name || "Admin"}, overall team attendance is up by 4% compared to last week. Keep it up!`
                  : `${user?.name || "User"}, your punctuality rate is excellent this month. Good job!`
                }
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
