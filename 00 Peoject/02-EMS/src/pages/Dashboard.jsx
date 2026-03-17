import { recentActivity, departmentStats, monthlyAttendance, performanceData } from "../data/mockData";
import { Icon } from "../components/ui/Icons";
import { isAdmin } from "../Utils/roles";

/* ── Avatar ─────────────────────────────────────────────────── */
const AV = { "av-blue":"linear-gradient(135deg,#1d4ed8,#60a5fa)", "av-teal":"linear-gradient(135deg,#0d9488,#2dd4bf)", "av-green":"linear-gradient(135deg,#16a34a,#4ade80)", "av-purple":"linear-gradient(135deg,#7c3aed,#c084fc)", "av-amber":"linear-gradient(135deg,#d97706,#fbbf24)", "av-red":"linear-gradient(135deg,#dc2626,#f87171)", "av-pink":"linear-gradient(135deg,#db2777,#f472b6)" };
function Avatar({ initials, colorClass, size = 34 }) {
  return (
    <div style={{ width:size, height:size, borderRadius:"50%", background:AV[colorClass]||AV["av-blue"], display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontSize:size*0.32, fontWeight:700, flexShrink:0 }}>
      {initials}
    </div>
  );
}

/* ── Stat Card ───────────────────────────────────────────────── */
function StatCard({ icon, iconColor, iconBg, label, value, sub, trend, trendVal }) {
  return (
    <div className="card stat-card card-hoverable" style={{ padding:20 }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
        <div>
          <div className="stat-label">{label}</div>
          <div className="stat-value">{value}</div>
        </div>
        <div className="stat-icon-wrap" style={{ background:iconBg }}>
          <Icon name={icon} size={20} color={iconColor} strokeWidth={1.8} />
        </div>
      </div>
      {(sub || trendVal) && (
        <div className="stat-sub">
          {trend === "up"   && <Icon name="trending-up"   size={13} color="var(--color-success)" />}
          {trend === "down" && <Icon name="trending-down" size={13} color="var(--color-error)"   />}
          {trendVal && (
            <span style={{ color: trend==="up" ? "var(--color-success)" : trend==="down" ? "var(--color-error)" : "var(--gray-400)", fontWeight:600 }}>
              {trendVal}
            </span>
          )}
          {sub && <span>{sub}</span>}
        </div>
      )}
    </div>
  );
}

/* ── Bar Chart ───────────────────────────────────────────────── */
function AttendanceChart({ data }) {
  const max = Math.max(...data.map(d => d.present));
  return (
    <div>
      <div style={{ display:"flex", alignItems:"flex-end", gap:7, height:130, paddingBottom:0 }}>
        {data.map((d, i) => (
          <div key={i} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:5, height:"100%" }}>
            <div style={{ flex:1, display:"flex", alignItems:"flex-end", width:"100%" }}>
              <div
                style={{
                  width:"100%", minHeight:4,
                  height:`${(d.present/max)*100}%`,
                  background:`linear-gradient(to top, var(--blue-700), var(--blue-400))`,
                  borderRadius:"5px 5px 0 0",
                  opacity: i === data.length-1 ? 1 : 0.65 + i*0.05,
                  transition:"height 0.5s var(--ease)",
                  cursor:"pointer",
                }}
                title={`${d.month}: ${d.present}% present`}
              />
            </div>
            <span style={{ fontSize:10, color:"var(--gray-400)", fontWeight:600 }}>{d.month}</span>
          </div>
        ))}
      </div>
      <div style={{ display:"flex", gap:14, justifyContent:"center", marginTop:12, flexWrap:"wrap" }}>
        {[
          ["var(--blue-700)", "Present"],
          ["#e2e8f0",         "Absent"],
          ["#fde68a",         "On Leave"],
        ].map(([c, l]) => (
          <div key={l} style={{ display:"flex", alignItems:"center", gap:5, fontSize:11.5, color:"var(--gray-500)" }}>
            <div style={{ width:9, height:9, borderRadius:3, background:c }} />
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Donut Chart ─────────────────────────────────────────────── */
function DeptDonut({ data }) {
  const total = data.reduce((s, d) => s + d.count, 0);
  let cum = 0;
  const r = 54, cx = 68, cy = 68, sw = 20;
  const circ = 2 * Math.PI * r;
  const segs = data.map(d => {
    const frac = d.count / total;
    const seg = { ...d, offset: cum * circ, length: frac * circ };
    cum += frac; return seg;
  });

  return (
    <div style={{ display:"flex", alignItems:"center", gap:20, flexWrap:"wrap" }}>
      <svg width={136} height={136} viewBox="0 0 136 136" style={{ flexShrink:0 }}>
        <g transform="rotate(-90 68 68)">
          {segs.map((s, i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="none"
              stroke={s.color} strokeWidth={sw}
              strokeDasharray={`${s.length} ${circ-s.length}`}
              strokeDashoffset={-s.offset} strokeLinecap="butt"
              style={{ cursor:"pointer", transition:"opacity 0.2s" }}
              onMouseEnter={e => e.target.style.opacity="0.8"}
              onMouseLeave={e => e.target.style.opacity="1"}
            />
          ))}
        </g>
        <text x={cx} y={cy-8}  textAnchor="middle" style={{ fontSize:24, fontWeight:800, fill:"var(--gray-900)", fontFamily:"Inter,sans-serif" }}>{total}</text>
        <text x={cx} y={cy+10} textAnchor="middle" style={{ fontSize:10,  fill:"var(--gray-400)", fontFamily:"Inter,sans-serif", fontWeight:600 }}>EMPLOYEES</text>
      </svg>
      <div style={{ display:"flex", flexDirection:"column", gap:7, flex:1, minWidth:110 }}>
        {data.map((d, i) => (
          <div key={i} style={{ display:"flex", alignItems:"center", gap:8 }}>
            <div style={{ width:8, height:8, borderRadius:2, background:d.color, flexShrink:0 }} />
            <span style={{ fontSize:12.5, color:"var(--gray-600)", flex:1 }}>{d.dept}</span>
            <span style={{ fontSize:13, fontWeight:700, color:"var(--gray-900)" }}>{d.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Performance Row ─────────────────────────────────────────── */
function PerfRow({ p, idx }) {
  const color = p.score >= 90 ? "var(--color-success)" : p.score >= 80 ? "var(--blue-700)" : "var(--color-warning)";
  const initials = p.name.split(" ").map(n=>n[0]).join("");
  const avColors = ["av-blue","av-teal","av-green","av-purple","av-amber","av-red","av-pink"];
  return (
    <div style={{ display:"flex", alignItems:"center", gap:10, padding:"8px 0", borderBottom:"1px solid var(--gray-100)" }}>
      <div style={{ width:20, fontSize:11.5, fontWeight:700, color:"var(--gray-400)", textAlign:"center", flexShrink:0 }}>{idx+1}</div>
      <Avatar initials={initials} colorClass={avColors[idx % avColors.length]} size={30} />
      <div style={{ flex:1, minWidth:0 }}>
        <div style={{ fontSize:13, fontWeight:600, color:"var(--gray-800)", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{p.name}</div>
        <div style={{ fontSize:11, color:"var(--gray-400)" }}>{p.dept}</div>
      </div>
      <div style={{ flex:2, minWidth:70 }}>
        <div className="progress-track">
          <div className="progress-fill" style={{ width:`${p.score}%`, background:color }} />
        </div>
      </div>
      <div style={{ fontSize:13, fontWeight:800, color, minWidth:34, textAlign:"right" }}>{p.score}%</div>
    </div>
  );
}

/* ── Activity Icon ───────────────────────────────────────────── */
const ACT_CONFIG = {
  join:    { icon:"user",        color:"var(--blue-700)",         bg:"var(--blue-50)" },
  leave:   { icon:"calendar",    color:"var(--color-success)",    bg:"var(--color-success-bg)" },
  payroll: { icon:"dollar-sign", color:"var(--color-teal)",       bg:"var(--color-teal-bg)" },
  task:    { icon:"bar-chart",   color:"var(--color-purple)",     bg:"var(--color-purple-bg)" },
  alert:   { icon:"alert",       color:"var(--color-warning)",    bg:"var(--color-warning-bg)" },
  policy:  { icon:"file-text",   color:"var(--gray-500)",         bg:"var(--gray-100)" },
};

/* ── Admin View ─────────────────────────────────────────────── */
function AdminView({ user }) {
  const snapshotItems = [
    { label:"On Time",  val:7, icon:"check-circle", color:"var(--color-success)", bg:"var(--color-success-bg)" },
    { label:"Late",     val:2, icon:"clock",         color:"var(--color-warning)", bg:"var(--color-warning-bg)" },
    { label:"Absent",   val:0, icon:"x-circle",      color:"var(--color-error)",   bg:"var(--color-error-bg)" },
    { label:"WFH",      val:3, icon:"briefcase",     color:"var(--blue-700)",      bg:"var(--blue-50)" },
  ];

  return (
    <>
      {/* ── Stat Cards ─────────────────────────────────────────── */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:14, marginBottom:20 }}>
        <StatCard icon="users"       iconColor="var(--blue-700)"         iconBg="var(--blue-50)"              label="Total Employees" value="12"     trendVal="+2"     trend="up"   sub="this month" />
        <StatCard icon="check-circle" iconColor="var(--color-success)"   iconBg="var(--color-success-bg)"     label="Present Today"  value="8"      trendVal="+1"     trend="up"   sub="vs yesterday" />
        <StatCard icon="umbrella"    iconColor="var(--color-warning)"    iconBg="var(--color-warning-bg)"     label="On Leave"       value="2"      trendVal="2"      trend={null} sub="this week" />
        <StatCard icon="dollar-sign" iconColor="var(--color-purple)"     iconBg="var(--color-purple-bg)"      label="Monthly Payroll" value="₹12.4L" trendVal="+8%"   trend="up"   sub="Mar 2026" />
      </div>

      {/* ── Charts Row ─────────────────────────────────────────── */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:14 }}>
        <div className="card" style={{ padding:20 }}>
          <div className="section-header">
            <div>
              <div className="section-title">Attendance Overview</div>
              <div className="section-sub">7-month company trend</div>
            </div>
            <span className="badge badge-blue">Monthly</span>
          </div>
          <AttendanceChart data={monthlyAttendance} />
        </div>

        <div className="card" style={{ padding:20 }}>
          <div className="section-header">
            <div>
              <div className="section-title">Department Distribution</div>
              <div className="section-sub">Team composition</div>
            </div>
          </div>
          <DeptDonut data={departmentStats} />
        </div>
      </div>

      {/* ── Bottom Row ─────────────────────────────────────────── */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 320px", gap:14, marginBottom:14 }}>
        {/* Activity */}
        <div className="card" style={{ padding:20 }}>
          <div className="section-header">
            <div className="section-title">Recent Activity</div>
            <button className="btn btn-ghost btn-sm" style={{ fontSize:12 }}>View all</button>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
            {recentActivity.map((item, i) => {
              const cfg = ACT_CONFIG[item.type] || ACT_CONFIG.policy;
              return (
                <div key={item.id} style={{ display:"flex", gap:12, paddingBottom:14 }}>
                  <div style={{ display:"flex", flexDirection:"column", alignItems:"center", flexShrink:0 }}>
                    <div style={{ width:34, height:34, borderRadius:9, background:cfg.bg, display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <Icon name={cfg.icon} size={16} color={cfg.color} strokeWidth={1.8} />
                    </div>
                    {i < recentActivity.length-1 && <div style={{ width:1, flex:1, background:"var(--gray-100)", minHeight:10, marginTop:5 }} />}
                  </div>
                  <div style={{ paddingTop:6, flex:1 }}>
                    <div style={{ fontSize:13, color:"var(--gray-700)", fontWeight:500, lineHeight:1.4 }}>{item.text}</div>
                    <div style={{ fontSize:11.5, color:"var(--gray-400)", marginTop:3 }}>{item.time}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top Performers */}
        <div className="card" style={{ padding:20 }}>
          <div className="section-header">
            <div className="section-title">Top Performers</div>
            <span className="badge badge-green">Q1 2026</span>
          </div>
          {performanceData.slice(0,6).map((p, i) => <PerfRow key={i} p={p} idx={i} />)}
        </div>
      </div>

      {/* ── Today Snapshot ──────────────────────────────────────── */}
      <div className="card" style={{ padding:20 }}>
        <div className="section-header">
          <div>
            <div className="section-title">Today's Snapshot</div>
            <div className="section-sub">March 14, 2026 · Real-time attendance status</div>
          </div>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:10 }}>
          {snapshotItems.map((s, i) => (
            <div key={i} style={{ background:s.bg, borderRadius:12, padding:"16px 14px", textAlign:"center" }}>
              <div style={{ display:"flex", justifyContent:"center", marginBottom:8 }}>
                <Icon name={s.icon} size={22} color={s.color} strokeWidth={1.7} />
              </div>
              <div style={{ fontSize:30, fontWeight:800, color:s.color, lineHeight:1 }}>{s.val}</div>
              <div style={{ fontSize:12, color:"var(--gray-500)", fontWeight:500, marginTop:4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ── Employee View ──────────────────────────────────────────── */
function EmployeeView({ user }) {
  const myTasks = [
    { title: "Review UI components", status: "Active", priority: "High" },
    { title: "Fix login bug", status: "Pending", priority: "Medium" },
    { title: "Update mock data", status: "Completed", priority: "Low" },
  ];

  return (
    <>
      {/* ── Stat Cards ─────────────────────────────────────────── */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:14, marginBottom:20 }}>
        <StatCard icon="list"        iconColor="var(--blue-700)"         iconBg="var(--blue-50)"              label="My Tasks"      value="3"      trendVal="1"     trend="up"   sub="active today" />
        <StatCard icon="check-circle" iconColor="var(--color-success)"   iconBg="var(--color-success-bg)"     label="Tasks Finished" value="12"     trendVal="+2"    trend="up"   sub="this week" />
        <StatCard icon="calendar"    iconColor="var(--color-warning)"    iconBg="var(--color-warning-bg)"     label="Monthly Attendance" value="95%" trendVal="+2%"   trend="up"   sub="vs last month" />
        <StatCard icon="star"        iconColor="var(--color-purple)"     iconBg="var(--color-purple-bg)"      label="Perf. Score"    value="92"     trendVal="Good"  trend={null} sub="High Flyer" />
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:14 }}>
        {/* My Tasks */}
        <div className="card" style={{ padding:20 }}>
          <div className="section-header">
            <div>
              <div className="section-title">Assigned Tasks</div>
              <div className="section-sub">Current work items</div>
            </div>
            <button className="btn btn-ghost btn-sm">Manage</button>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            {myTasks.map((t, i) => (
              <div key={i} style={{ display:"flex", alignItems:"center", gap:12, padding:12, border:"1px solid var(--gray-100)", borderRadius:10 }}>
                <div style={{ 
                  width:10, height:10, borderRadius:"50%", 
                  background: t.status === "Active" ? "var(--color-success)" : t.status === "Pending" ? "var(--color-warning)" : "var(--gray-300)" 
                }} />
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:13, fontWeight:600, color:"var(--gray-900)" }}>{t.title}</div>
                  <div style={{ fontSize:11, color:"var(--gray-400)" }}>Priority: {t.priority}</div>
                </div>
                <span className={`badge ${t.status === "Completed"?"badge-green":t.status==="Active"?"badge-blue":"badge-gray"}`}>{t.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* My Attendance Trend */}
        <div className="card" style={{ padding:20 }}>
          <div className="section-header">
            <div>
              <div className="section-title">My Attendance Trend</div>
              <div className="section-sub">Monthly presence rate</div>
            </div>
          </div>
          <AttendanceChart data={monthlyAttendance.slice(-4)} />
        </div>
      </div>

      {/* Personal Activity */}
      <div className="card" style={{ padding:20 }}>
        <div className="section-header">
          <div className="section-title">My Recent Activity</div>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
            {recentActivity.slice(0, 3).map((item, i) => {
              const cfg = ACT_CONFIG[item.type] || ACT_CONFIG.policy;
              return (
                <div key={item.id} style={{ display:"flex", gap:12, paddingBottom:14 }}>
                  <div style={{ display:"flex", flexDirection:"column", alignItems:"center", flexShrink:0 }}>
                    <div style={{ width:34, height:34, borderRadius:9, background:cfg.bg, display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <Icon name={cfg.icon} size={16} color={cfg.color} strokeWidth={1.8} />
                    </div>
                    {i < 2 && <div style={{ width:1, flex:1, background:"var(--gray-100)", minHeight:10, marginTop:5 }} />}
                  </div>
                  <div style={{ paddingTop:6, flex:1 }}>
                    <div style={{ fontSize:13, color:"var(--gray-700)", fontWeight:500, lineHeight:1.4 }}>{item.text}</div>
                    <div style={{ fontSize:11.5, color:"var(--gray-400)", marginTop:3 }}>{item.time}</div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

/* ── Main Dashboard Component ────────────────────────────────── */
export default function Dashboard({ user }) {
  const adminState = isAdmin(user);

  return (
    <div className="page-content anim-fadeIn">
      {/* ── Greeting Header ─────────────────────────────────────── */}
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ fontSize: 22, fontWeight: 800, color: "var(--gray-900)", letterSpacing: "-0.5px" }}>
          Welcome back, {user?.name || "User"}! 👋
        </h1>
        <p style={{ fontSize: 13, color: "var(--gray-400)", marginTop: 4 }}>
          {adminState 
            ? "Here's what's happening in your company today, March 14, 2026."
            : "Here's your work summary for today, March 14, 2026."
          }
        </p>
      </div>

      {adminState ? <AdminView user={user} /> : <EmployeeView user={user} />}
    </div>
  );
}

