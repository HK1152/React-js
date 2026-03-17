import { useState } from "react";
import { payrollData } from "../data/mockData";
import { Icon }        from "../components/ui/Icons";
import { isAdmin }     from "../Utils/roles";

const AV = { "av-blue":"linear-gradient(135deg,#1d4ed8,#60a5fa)", "av-teal":"linear-gradient(135deg,#0d9488,#2dd4bf)", "av-green":"linear-gradient(135deg,#16a34a,#4ade80)", "av-purple":"linear-gradient(135deg,#7c3aed,#c084fc)", "av-amber":"linear-gradient(135deg,#d97706,#fbbf24)", "av-red":"linear-gradient(135deg,#dc2626,#f87171)", "av-pink":"linear-gradient(135deg,#db2777,#f472b6)" };
function Avatar({ initials, colorClass, size=34 }) {
  return <div style={{ width:size, height:size, borderRadius:"50%", background:AV[colorClass]||AV["av-blue"], display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontSize:size*0.32, fontWeight:700, flexShrink:0 }}>{initials}</div>;
}

function fmt(n) { return `₹${Number(n).toLocaleString("en-IN")}`; }

/* ── Payslip Modal ───────────────────────────────────────────── */
function PayslipModal({ emp, onClose, inline = false }) {
  const content = (
    <div className={`modal-box ${!inline ? "anim-popIn" : ""}`} style={{ maxWidth: 460, margin: inline ? "40px auto" : undefined, boxShadow: inline ? "var(--shadow-lg)" : undefined }}>
      <div className="modal-header">
        <div style={{ display:"flex", alignItems:"center", gap:9 }}>
          <div style={{ width:34, height:34, borderRadius:9, background:"var(--blue-50)", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <Icon name="file-text" size={16} color="var(--blue-700)" />
          </div>
          <span className="modal-title">Payslip — March 2026</span>
        </div>
        {!inline && <button className="btn btn-ghost btn-icon btn-sm" onClick={onClose}><Icon name="x" size={16}/></button>}
      </div>
        <div className="modal-body">
          {/* Employee header */}
          <div style={{ display:"flex", alignItems:"center", gap:12, padding:"14px 16px", background:"var(--gray-50)", borderRadius:10, marginBottom:18 }}>
            <Avatar initials={emp.avatar} colorClass={emp.avColor} size={42} />
            <div>
              <div style={{ fontSize:15, fontWeight:700, color:"var(--gray-900)" }}>{emp.name}</div>
              <div style={{ fontSize:12, color:"var(--gray-500)", marginTop:2 }}>{emp.role} · {emp.dept}</div>
            </div>
            <div style={{ marginLeft:"auto", textAlign:"right" }}>
              <div style={{ fontSize:11, color:"var(--gray-400)" }}>Employee ID</div>
              <div style={{ fontSize:13, fontWeight:700, color:"var(--gray-700)", fontFamily:"monospace" }}>EMS-{String(emp.id).padStart(4,"0")}</div>
            </div>
          </div>

          {/* Earnings */}
          <div style={{ marginBottom:16 }}>
            <div style={{ fontSize:11.5, fontWeight:700, color:"var(--gray-400)", textTransform:"uppercase", letterSpacing:"0.07em", marginBottom:8 }}>Earnings</div>
            {[
              ["Basic Salary",     emp.basic],
              ["HRA",              emp.hra],
              ["Allowances",       emp.allowances],
            ].map(([l, v]) => (
              <div key={l} style={{ display:"flex", justifyContent:"space-between", padding:"8px 0", borderBottom:"1px solid var(--gray-100)" }}>
                <span style={{ fontSize:13, color:"var(--gray-600)" }}>{l}</span>
                <span style={{ fontSize:13.5, fontWeight:600, color:"var(--gray-900)", fontFamily:"monospace" }}>{fmt(v)}</span>
              </div>
            ))}
            <div style={{ display:"flex", justifyContent:"space-between", padding:"10px 0", fontWeight:700 }}>
              <span style={{ fontSize:13, color:"var(--gray-700)" }}>Gross Pay</span>
              <span style={{ fontSize:14, color:"var(--blue-700)", fontFamily:"monospace" }}>{fmt(emp.basic + emp.hra + emp.allowances)}</span>
            </div>
          </div>

          {/* Deductions */}
          <div style={{ marginBottom:16 }}>
            <div style={{ fontSize:11.5, fontWeight:700, color:"var(--gray-400)", textTransform:"uppercase", letterSpacing:"0.07em", marginBottom:8 }}>Deductions</div>
            {[
              ["Income Tax",  Math.round(emp.deductions*0.65)],
              ["PF",          Math.round(emp.deductions*0.35)],
            ].map(([l, v]) => (
              <div key={l} style={{ display:"flex", justifyContent:"space-between", padding:"8px 0", borderBottom:"1px solid var(--gray-100)" }}>
                <span style={{ fontSize:13, color:"var(--gray-600)" }}>{l}</span>
                <span style={{ fontSize:13.5, fontWeight:600, color:"var(--color-error)", fontFamily:"monospace" }}>-{fmt(v)}</span>
              </div>
            ))}
          </div>

          {/* Net Pay */}
          <div style={{ background:"linear-gradient(135deg,var(--blue-700),var(--blue-500))", borderRadius:12, padding:"16px 18px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <div>
              <div style={{ fontSize:12, color:"rgba(255,255,255,0.75)", marginBottom:4 }}>Net Pay (Take Home)</div>
              <div style={{ fontSize:26, fontWeight:800, color:"white", fontFamily:"monospace" }}>{fmt(emp.net)}</div>
            </div>
            <div style={{ width:50, height:50, borderRadius:12, background:"rgba(255,255,255,0.15)", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <Icon name="dollar-sign" size={24} color="white" strokeWidth={1.7} />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          {!inline && <button className="btn btn-secondary" onClick={onClose}>Close</button>}
          <button className="btn btn-primary" style={inline ? { width: "100%" } : {}} onClick={()=>alert("Payslip downloaded! (demo)")}>
            <Icon name="download" size={14} />Download PDF
          </button>
        </div>
      </div>
  );

  if (inline) return <div className="page-content anim-fadeIn">{content}</div>;

  return (
    <div className="modal-backdrop" onClick={e => e.target===e.currentTarget && onClose()}>
      {content}
    </div>
  );
}

export default function Payroll({ user }) {
  const adminState = isAdmin(user);
  const [search,   setSearch]   = useState("");
  const [payslip,  setPayslip]  = useState(null);

  if (!adminState) {
    const myData = payrollData.find(p => p.name === (user?.firstName || user?.name) || p.name === user?.name) || {
      name: user?.name, avatar: user?.name?.[0] || "U", avColor: "av-blue", role: user?.role, dept: user?.dept || "Employee",
      basic: 45000, hra: 12000, allowances: 5000, deductions: 2500, net: 59500, status: "Paid", id: 99
    };
    return <PayslipModal emp={myData} inline={true} />;
  }

  const total   = payrollData.reduce((s,p) => s + p.net, 0);
  const paid    = payrollData.filter(p => p.status==="Paid").reduce((s,p) => s+p.net, 0);
  const pending = payrollData.filter(p => p.status==="Pending").reduce((s,p) => s+p.net, 0);
  const avg     = Math.round(total / payrollData.length);

  const SUMM = [
    { icon:"dollar-sign", iconColor:"var(--blue-700)",       iconBg:"var(--blue-50)",          label:"Total Payroll",  val:fmt(total),   sub:"March 2026" },
    { icon:"check-circle",iconColor:"var(--color-success)",  iconBg:"var(--color-success-bg)", label:"Paid Out",       val:fmt(paid),    sub:`${payrollData.filter(p=>p.status==="Paid").length} employees` },
    { icon:"clock",       iconColor:"var(--color-warning)",  iconBg:"var(--color-warning-bg)", label:"Pending",        val:fmt(pending), sub:`${payrollData.filter(p=>p.status==="Pending").length} employees` },
    { icon:"bar-chart",   iconColor:"var(--color-purple)",   iconBg:"var(--color-purple-bg)",  label:"Avg Net Salary", val:fmt(avg),     sub:"Per employee" },
  ];

  const filtered = payrollData.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    e.dept.toLowerCase().includes(search.toLowerCase())
  );

  const gross = filtered.reduce((s,p) => s+p.basic+p.hra+p.allowances, 0);
  const ded   = filtered.reduce((s,p) => s+p.deductions, 0);
  const net   = filtered.reduce((s,p) => s+p.net, 0);

  return (
    <div className="page-content anim-fadeIn">
      {/* Summary Cards */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))", gap:12, marginBottom:20 }}>
        {SUMM.map((s, i) => (
          <div key={i} className="card" style={{ padding:18, display:"flex", gap:12, alignItems:"flex-start" }}>
            <div style={{ width:42, height:42, borderRadius:10, background:s.iconBg, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <Icon name={s.icon} size={20} color={s.iconColor} strokeWidth={1.7} />
            </div>
            <div>
              <div style={{ fontSize:12, color:"var(--gray-400)", fontWeight:500 }}>{s.label}</div>
              <div style={{ fontSize:20, fontWeight:800, color:"var(--gray-900)", lineHeight:1.2, marginTop:2, fontFamily:"monospace" }}>{s.val}</div>
              <div style={{ fontSize:11.5, color:"var(--gray-400)", marginTop:3 }}>{s.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Table card */}
      <div className="card" style={{ overflow:"hidden" }}>
        <div style={{ padding:"16px 20px", borderBottom:"1px solid var(--gray-100)", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div>
            <div style={{ fontSize:14.5, fontWeight:700, color:"var(--gray-900)" }}>Monthly Payroll — March 2026</div>
            <div style={{ fontSize:12, color:"var(--gray-400)", marginTop:2 }}>Salary breakdown for all employees</div>
          </div>
          <div className="search-box" style={{ width:200, display:"flex" }}>
            <Icon name="search" size={15} color="var(--gray-400)" />
            <input type="text" placeholder="Search employee..." value={search} onChange={e=>setSearch(e.target.value)} />
          </div>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Department</th>
                <th>Basic</th>
                <th>HRA</th>
                <th>Allowance</th>
                <th>Deductions</th>
                <th>Net Pay</th>
                <th>Status</th>
                <th>Payslip</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p, i) => (
                <tr key={i}>
                  <td>
                    <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                      <Avatar initials={p.avatar} colorClass={p.avColor} size={34} />
                      <div>
                        <div style={{ fontWeight:600, color:"var(--gray-900)", fontSize:13.5 }}>{p.name}</div>
                        <div style={{ fontSize:11.5, color:"var(--gray-400)" }}>{p.role}</div>
                      </div>
                    </div>
                  </td>
                  <td><span className="badge badge-blue">{p.dept}</span></td>
                  <td style={{ fontFamily:"monospace", fontSize:13, color:"var(--gray-700)" }}>{fmt(p.basic)}</td>
                  <td style={{ fontFamily:"monospace", fontSize:13, color:"var(--gray-700)" }}>{fmt(p.hra)}</td>
                  <td style={{ fontFamily:"monospace", fontSize:13, color:"var(--gray-700)" }}>{fmt(p.allowances)}</td>
                  <td style={{ fontFamily:"monospace", fontSize:13, color:"var(--color-error)", fontWeight:600 }}>-{fmt(p.deductions)}</td>
                  <td style={{ fontFamily:"monospace", fontSize:13.5, color:"var(--gray-900)", fontWeight:700 }}>{fmt(p.net)}</td>
                  <td>
                    {p.status === "Paid" ? (
                      <span className="badge badge-green">
                        <Icon name="check-circle" size={11} color="var(--color-success)" strokeWidth={2} />Paid
                      </span>
                    ) : (
                      <span className="badge badge-amber">
                        <Icon name="clock" size={11} color="var(--color-warning)" strokeWidth={2} />Pending
                      </span>
                    )}
                  </td>
                  <td>
                    <button className="btn btn-ghost btn-sm" onClick={()=>setPayslip(p)}>
                      <Icon name="file-text" size={14} color="var(--blue-700)" />
                      <span style={{ fontSize:12, color:"var(--blue-700)" }}>View</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer totals */}
        <div style={{ padding:"12px 20px", borderTop:"1px solid var(--gray-100)", background:"var(--gray-50)", display:"flex", justifyContent:"flex-end", gap:24, flexWrap:"wrap" }}>
          {[
            ["Total Gross", fmt(gross), "var(--gray-700)"],
            ["Total Deductions", `-${fmt(ded)}`, "var(--color-error)"],
            ["Net Total", fmt(net), "var(--blue-700)"],
          ].map(([l, v, c]) => (
            <div key={l} style={{ textAlign:"right" }}>
              <div style={{ fontSize:11.5, color:"var(--gray-400)", fontWeight:600 }}>{l}</div>
              <div style={{ fontSize:14.5, fontWeight:800, color:c, fontFamily:"monospace", marginTop:2 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {payslip && <PayslipModal emp={payslip} onClose={()=>setPayslip(null)} />}
    </div>
  );
}
