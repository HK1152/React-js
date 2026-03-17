import { departmentStats, monthlyAttendance, performanceData, payrollData } from "../data/mockData";
import { Icon } from "../components/ui/Icons";

function fmt(n) { return `₹${Number(n).toLocaleString("en-IN")}`; }

function KPICard({ icon, iconColor, iconBg, label, value, change, changeUp }) {
  return (
    <div className="card" style={{ padding:18, display:"flex", gap:12, alignItems:"flex-start" }}>
      <div style={{ width:42, height:42, borderRadius:10, background:iconBg, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
        <Icon name={icon} size={20} color={iconColor} strokeWidth={1.7} />
      </div>
      <div style={{ flex:1 }}>
        <div style={{ fontSize:12, color:"var(--gray-400)", fontWeight:500, marginBottom:4 }}>{label}</div>
        <div style={{ fontSize:22, fontWeight:800, color:"var(--gray-900)", letterSpacing:"-0.3px", lineHeight:1 }}>{value}</div>
        {change && (
          <div style={{ display:"flex", alignItems:"center", gap:4, fontSize:11.5, marginTop:6, color:changeUp?"var(--color-success)":"var(--color-error)" }}>
            <Icon name={changeUp?"trending-up":"trending-down"} size={12} color={changeUp?"var(--color-success)":"var(--color-error)"} />
            <span style={{ fontWeight:600 }}>{change}</span>
          </div>
        )}
      </div>
    </div>
  );
}

function HorizBar({ label, value, pct, color }) {
  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
        <span style={{ fontSize:13, color:"var(--gray-600)" }}>{label}</span>
        <span style={{ fontSize:13, fontWeight:700, color }}>{value}</span>
      </div>
      <div className="progress-track" style={{ height:7 }}>
        <div className="progress-fill" style={{ width:`${pct}%`, background:color }} />
      </div>
    </div>
  );
}

/* SVG Donut */
function SmallDonut({ score, color, name, dept }) {
  const r = 30, circ = 2*Math.PI*r, sw = 8;
  const filled = (score/100)*circ;
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:6 }}>
      <svg width={76} height={76} viewBox="0 0 76 76">
        <circle cx={38} cy={38} r={r} fill="none" stroke="var(--gray-100)" strokeWidth={sw} />
        <circle cx={38} cy={38} r={r} fill="none" stroke={color} strokeWidth={sw}
          strokeDasharray={`${filled} ${circ-filled}`}
          strokeDashoffset={circ*0.25}
          strokeLinecap="round"
          transform="rotate(-90 38 38)"
        />
        <text x={38} y={38} textAnchor="middle" dy="0.35em" style={{ fontSize:14, fontWeight:800, fill:"var(--gray-900)", fontFamily:"Inter,sans-serif" }}>{score}</text>
      </svg>
      <div style={{ textAlign:"center" }}>
        <div style={{ fontSize:12.5, fontWeight:600, color:"var(--gray-800)" }}>{name}</div>
        <div style={{ fontSize:11, color:"var(--gray-400)" }}>{dept}</div>
      </div>
    </div>
  );
}

const DONUT_COLORS = ["var(--color-success)","var(--blue-700)","var(--color-teal)","var(--color-purple)"];

export default function Reports() {
  const deptMax  = Math.max(...departmentStats.map(d=>d.count));
  const totalPay = payrollData.reduce((s,p)=>s+p.net, 0);
  const deptPay  = Object.entries(
    payrollData.reduce((acc,p) => { acc[p.dept]=(acc[p.dept]||0)+p.net; return acc; }, {})
  ).sort((a,b)=>b[1]-a[1]);

  const KPIS = [
    { icon:"users",        iconColor:"var(--blue-700)",         iconBg:"var(--blue-50)",          label:"Total Employees",   value:"12",    change:"+2 this month",     changeUp:true  },
    { icon:"check-circle", iconColor:"var(--color-success)",    iconBg:"var(--color-success-bg)", label:"Avg Attendance",    value:"87%",   change:"↑ vs last month (85%)", changeUp:true  },
    { icon:"star",         iconColor:"var(--color-warning)",    iconBg:"var(--color-warning-bg)", label:"Avg Performance",   value:"90%",   change:"↑ vs Q4 2025 (88%)", changeUp:true  },
    { icon:"dollar-sign",  iconColor:"var(--color-purple)",     iconBg:"var(--color-purple-bg)",  label:"Monthly Payroll",   value:"₹8.4L", change:"Mar 2026",           changeUp:null  },
    { icon:"umbrella",     iconColor:"var(--color-error)",      iconBg:"var(--color-error-bg)",   label:"Leave Taken",       value:"14 d",  change:"team total",         changeUp:null  },
  ];

  return (
    <div className="page-content anim-fadeIn">
      {/* KPIs */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:12, marginBottom:20 }}>
        {KPIS.map((k, i) => <KPICard key={i} {...k} />)}
      </div>

      {/* Charts row */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:14 }}>
        {/* Attendance Trend */}
        <div className="card" style={{ padding:20 }}>
          <div className="section-header">
            <div>
              <div className="section-title">Attendance Trend</div>
              <div className="section-sub">Monthly presence rate (%)</div>
            </div>
            <Icon name="bar-chart" size={18} color="var(--gray-300)" />
          </div>
          <div style={{ display:"flex", alignItems:"flex-end", gap:7, height:140 }}>
            {monthlyAttendance.map((d, i) => {
              const pct = d.present;
              const isLast = i === monthlyAttendance.length-1;
              return (
                <div key={i} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:4, height:"100%" }}>
                  <div style={{ flex:1, display:"flex", alignItems:"flex-end", width:"100%" }}>
                    <div style={{
                      width:"100%", minHeight:4,
                      height:`${pct}%`,
                      background: isLast ? "linear-gradient(to top,var(--blue-700),var(--blue-400))" : "linear-gradient(to top,#bfdbfe,#dbeafe)",
                      borderRadius:"5px 5px 0 0",
                      position:"relative",
                    }}>
                      {isLast && <div style={{ position:"absolute", top:-18, left:"50%", transform:"translateX(-50%)", fontSize:9.5, fontWeight:700, color:"var(--blue-700)", whiteSpace:"nowrap" }}>{pct}%</div>}
                    </div>
                  </div>
                  <span style={{ fontSize:10, color:"var(--gray-400)", fontWeight:600 }}>{d.month}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Department Headcount */}
        <div className="card" style={{ padding:20 }}>
          <div className="section-header">
            <div className="section-title">Department Headcount</div>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            {departmentStats.map((d, i) => (
              <HorizBar
                key={i}
                label={d.dept}
                value={`${Math.round((d.count/departmentStats.reduce((s,x)=>s+x.count,0))*100)}%`}
                pct={(d.count/deptMax)*100}
                color={d.color}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
        {/* Payroll by dept */}
        <div className="card" style={{ padding:20 }}>
          <div className="section-header">
            <div>
              <div className="section-title">Payroll by Department</div>
              <div className="section-sub">Net payout in ₹</div>
            </div>
            <Icon name="dollar-sign" size={18} color="var(--gray-300)" />
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            {deptPay.map(([dept, amount], i) => {
              const colors = ["var(--blue-700)","var(--color-error)","var(--color-teal)","var(--color-warning)","var(--color-pink)","var(--color-purple)"];
              return (
                <HorizBar
                  key={dept}
                  label={dept}
                  value={fmt(amount)}
                  pct={(amount/deptPay[0][1])*100}
                  color={colors[i % colors.length]}
                />
              );
            })}
          </div>
        </div>

        {/* Performance Scores */}
        <div className="card" style={{ padding:20 }}>
          <div className="section-header">
            <div className="section-title">Performance Scores — Q1 2026</div>
          </div>
          <div style={{ display:"flex", justifyContent:"center", gap:14, flexWrap:"wrap", marginBottom:16 }}>
            {performanceData.slice(0,4).map((p, i) => (
              <SmallDonut
                key={i}
                score={p.score}
                color={DONUT_COLORS[i % DONUT_COLORS.length]}
                name={p.name.split(" ")[0]}
                dept={p.dept}
              />
            ))}
          </div>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 14px", background:"var(--gray-50)", borderRadius:10 }}>
            <div style={{ display:"flex", alignItems:"center", gap:7 }}>
              <Icon name="target" size={16} color="var(--blue-700)" />
              <span style={{ fontSize:13, fontWeight:600, color:"var(--gray-700)" }}>Team Average</span>
            </div>
            <span style={{ fontSize:16, fontWeight:800, color:"var(--blue-700)" }}>90%</span>
          </div>
          <div className="progress-track md" style={{ marginTop:8 }}>
            <div className="progress-fill" style={{ width:"90%", background:"linear-gradient(90deg,var(--blue-700),var(--blue-400))" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
