import { useState } from "react";
import { leaveRequests } from "../data/mockData";
import { Icon }          from "../components/ui/Icons";
import { isAdmin }       from "../Utils/roles";

const STATUS_CFG = {
  Pending:  { cls:"badge-amber",  icon:"clock",        color:"var(--color-warning)" },
  Approved: { cls:"badge-green",  icon:"check-circle", color:"var(--color-success)" },
  Rejected: { cls:"badge-red",    icon:"x-circle",     color:"var(--color-error)"   },
};

function StatusBadge({ status }) {
  const { cls, icon, color } = STATUS_CFG[status] || { cls:"badge-gray", icon:"info", color:"var(--gray-400)" };
  return (
    <span className={`badge ${cls}`}>
      <Icon name={icon} size={11} color={color} strokeWidth={2} />
      {status}
    </span>
  );
}

const LEAVE_TYPES = [
  { type:"Annual Leave",    icon:"umbrella",     color:"var(--blue-700)",      bg:"var(--blue-50)",              used:8,  total:20 },
  { type:"Sick Leave",      icon:"activity",     color:"var(--color-error)",   bg:"var(--color-error-bg)",       used:2,  total:10 },
  { type:"Casual Leave",    icon:"calendar",     color:"var(--color-teal)",    bg:"var(--color-teal-bg)",         used:1,  total:5  },
  { type:"Maternity Leave", icon:"star",         color:"var(--color-pink)",    bg:"var(--color-pink-bg)",         used:0,  total:180 },
];

/* ── Apply Leave Modal ───────────────────────────────────────── */
function ApplyModal({ onClose, onSubmit }) {
  const [form, setForm] = useState({ type:"Annual Leave", from:"", to:"", reason:"", emergency:false });
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const days = form.from && form.to
    ? Math.max(1, Math.ceil((new Date(form.to)-new Date(form.from)) / 86400000) + 1)
    : 0;

  return (
    <div className="modal-backdrop" onClick={e => e.target===e.currentTarget && onClose()}>
      <div className="modal-box anim-popIn">
        <div className="modal-header">
          <div style={{ display:"flex", alignItems:"center", gap:9 }}>
            <div style={{ width:34, height:34, borderRadius:9, background:"var(--blue-50)", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <Icon name="calendar" size={16} color="var(--blue-700)" />
            </div>
            <span className="modal-title">Apply for Leave</span>
          </div>
          <button className="btn btn-ghost btn-icon btn-sm" onClick={onClose}><Icon name="x" size={16}/></button>
        </div>
        <div className="modal-body" style={{ display:"flex", flexDirection:"column", gap:14 }}>
          <div className="form-group">
            <label className="form-label">Leave Type</label>
            <select className="form-input" value={form.type} onChange={e=>set("type",e.target.value)}>
              {LEAVE_TYPES.map(l => <option key={l.type}>{l.type}</option>)}
            </select>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            <div className="form-group">
              <label className="form-label">Start Date</label>
              <div className="input-wrap">
                <Icon name="calendar" size={15} className="input-icon" color="var(--gray-400)" />
                <input className="form-input" type="date" value={form.from} onChange={e=>set("from",e.target.value)} />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">End Date</label>
              <div className="input-wrap">
                <Icon name="calendar" size={15} className="input-icon" color="var(--gray-400)" />
                <input className="form-input" type="date" value={form.to} onChange={e=>set("to",e.target.value)} />
              </div>
            </div>
          </div>

          {days > 0 && (
            <div className="alert alert-info" style={{ padding:"10px 14px" }}>
              <Icon name="info" size={15} color="var(--blue-700)" />
              <span style={{ fontSize:13 }}><strong>{days} day{days!==1?"s":""}</strong> of leave requested</span>
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Reason</label>
            <textarea className="form-input" rows={3} value={form.reason} onChange={e=>set("reason",e.target.value)} placeholder="Describe the reason for your leave..." />
          </div>

          <label style={{ display:"flex", alignItems:"center", gap:10, cursor:"pointer" }}>
            <div
              className={`toggle ${form.emergency?"on":""}`}
              onClick={()=>set("emergency",!form.emergency)}
            />
            <div>
              <div style={{ fontSize:13, fontWeight:600, color:"var(--gray-700)" }}>Mark as Emergency</div>
              <div style={{ fontSize:11.5, color:"var(--gray-400)" }}>Notify manager immediately</div>
            </div>
          </label>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={() => { onSubmit(form); onClose(); }}>
            <Icon name="send" size={13} />Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}

const TABS = ["All","Pending","Approved","Rejected"];

export default function Leave({ user }) {
  const adminState = isAdmin(user);
  const [requests, setRequests] = useState(leaveRequests);
  const [tab,      setTab]      = useState("All");
  const [modal,    setModal]    = useState(false);

  // Filter out if employee
  const myRequests = adminState ? requests : requests.filter(r => r.name === user?.firstName || r.name === user?.name);
  const filtered = tab==="All" ? myRequests : myRequests.filter(r=>r.status===tab);

  const approve = id => setRequests(p => p.map(r => r.id===id ? {...r, status:"Approved"} : r));
  const reject  = id => setRequests(p => p.map(r => r.id===id ? {...r, status:"Rejected"} : r));

  const handleSubmit = form => {
    const initials = user?.name?.split(" ").map(n=>n[0]).join("") || "U";
    setRequests(p => [{
      id: Date.now(), name: user?.name, avatar:initials, avColor:"av-blue",
      type:form.type, from:form.from, to:form.to, days: Math.max(1,Math.ceil((new Date(form.to)-new Date(form.from))/86400000)+1),
      reason:form.reason, status:"Pending",
    }, ...p]);
  };

  const pendingCnt = myRequests.filter(r=>r.status==="Pending").length;

  return (
    <div className="page-content anim-fadeIn">
      {/* Balance Cards */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(190px,1fr))", gap:12, marginBottom:20 }}>
        {LEAVE_TYPES.map((lt, i) => {
          const pct = Math.round((lt.used/lt.total)*100);
          return (
            <div key={i} className="card" style={{ padding:18 }}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:12 }}>
                <div style={{ width:38, height:38, borderRadius:9, background:lt.bg, display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <Icon name={lt.icon} size={18} color={lt.color} strokeWidth={1.7} />
                </div>
                <span style={{ fontSize:22, fontWeight:800, color:"var(--gray-900)" }}>{lt.total-lt.used}</span>
              </div>
              <div style={{ fontSize:13, fontWeight:700, color:"var(--gray-800)", marginBottom:2 }}>{lt.type}</div>
              <div style={{ fontSize:11.5, color:"var(--gray-400)", marginBottom:8 }}>{lt.used} used · {lt.total} total</div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width:`${pct}%`, background:lt.color }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Requests */}
      <div className="card">
        <div style={{ padding:"16px 20px", borderBottom:"1px solid var(--gray-100)", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <span style={{ fontSize:14.5, fontWeight:700, color:"var(--gray-900)" }}>Leave Requests</span>
            {pendingCnt > 0 && (
              <span className="badge badge-amber">
                <Icon name="clock" size={11} color="var(--color-warning)" />
                {pendingCnt} pending
              </span>
            )}
          </div>
          {!adminState && (
            <button className="btn btn-primary" onClick={()=>setModal(true)}>
              <Icon name="plus" size={15} />Apply Leave
            </button>
          )}
        </div>

        {/* Tabs */}
        <div style={{ padding:"0 20px" }}>
          <div className="tabs">
            {TABS.map(t => (
              <div key={t} className={`tab ${tab===t?"active":""}`} onClick={()=>setTab(t)}>
                {t}
                {t==="Pending" && pendingCnt > 0 && (
                  <span style={{ background:"var(--color-warning-bg)", color:"var(--color-warning)", fontSize:11, fontWeight:700, padding:"1px 6px", borderRadius:10, marginLeft:2 }}>{pendingCnt}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Leave Type</th>
                <th>From</th>
                <th>To</th>
                <th>Days</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(r => (
                <tr key={r.id}>
                  <td>
                    <div style={{ display:"flex", alignItems:"center", gap:9 }}>
                      <div style={{ width:32, height:32, borderRadius:"50%", background:"linear-gradient(135deg,#1d4ed8,#60a5fa)", display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontSize:11, fontWeight:700, flexShrink:0 }}>{r.avatar}</div>
                      <span style={{ fontWeight:600, color:"var(--gray-800)", fontSize:13.5 }}>{r.name}</span>
                    </div>
                  </td>
                  <td>
                    <div style={{ display:"flex", alignItems:"center", gap:6, fontSize:13, color:"var(--gray-600)" }}>
                      <Icon name="umbrella" size={13} color="var(--gray-400)" />
                      {r.type}
                    </div>
                  </td>
                  <td style={{ fontSize:13, color:"var(--gray-600)", fontFamily:"monospace" }}>{r.from}</td>
                  <td style={{ fontSize:13, color:"var(--gray-600)", fontFamily:"monospace" }}>{r.to}</td>
                  <td style={{ fontWeight:700, color:"var(--gray-800)" }}>{r.days}d</td>
                  <td>
                    <div style={{ maxWidth:180, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", fontSize:13, color:"var(--gray-500)" }} title={r.reason}>{r.reason}</div>
                  </td>
                  <td><StatusBadge status={r.status} /></td>
                  <td>
                    {adminState && r.status === "Pending" ? (
                      <div style={{ display:"flex", gap:5 }}>
                        <button className="btn btn-success btn-xs" onClick={()=>approve(r.id)}>
                          <Icon name="check" size={12} />Approve
                        </button>
                        <button className="btn btn-danger btn-xs" onClick={()=>reject(r.id)}>
                          <Icon name="x" size={12} />Reject
                        </button>
                      </div>
                    ) : (
                      <span style={{ fontSize:12, color:"var(--gray-400)" }}>{adminState ? "No action" : (r.status === "Pending" ? "Pending Approval" : "Resolved")}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="empty-state">
              <div className="empty-icon-wrap"><Icon name="umbrella" size={24} color="var(--gray-300)" /></div>
              <div className="empty-title">No {tab === "All" ? "" : tab.toLowerCase()} requests</div>
              <div className="empty-desc">Leave requests will appear here</div>
            </div>
          )}
        </div>
      </div>

      {modal && <ApplyModal onClose={()=>setModal(false)} onSubmit={handleSubmit} />}
    </div>
  );
}
