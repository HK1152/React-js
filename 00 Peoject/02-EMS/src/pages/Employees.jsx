import { useState } from "react";
import { employees } from "../data/mockData";
import { Icon } from "../components/ui/Icons";

const AV = { "av-blue":"linear-gradient(135deg,#1d4ed8,#60a5fa)", "av-teal":"linear-gradient(135deg,#0d9488,#2dd4bf)", "av-green":"linear-gradient(135deg,#16a34a,#4ade80)", "av-purple":"linear-gradient(135deg,#7c3aed,#c084fc)", "av-amber":"linear-gradient(135deg,#d97706,#fbbf24)", "av-red":"linear-gradient(135deg,#dc2626,#f87171)", "av-pink":"linear-gradient(135deg,#db2777,#f472b6)" };

function Avatar({ initials, colorClass, size=36 }) {
  return <div style={{ width:size, height:size, borderRadius:"50%", background:AV[colorClass]||AV["av-blue"], display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontSize:size*0.32, fontWeight:700, flexShrink:0 }}>{initials}</div>;
}

function StatusBadge({ status }) {
  const map = {
    active:   ["badge-green", "dot-green",  "Active"],
    inactive: ["badge-gray",  "dot-gray",   "Inactive"],
    leave:    ["badge-amber", "dot-amber",  "On Leave"],
  };
  const [cls,, label] = map[status] || ["badge-gray","","Unknown"];
  const dotColor = status==="active" ? "var(--color-success)" : status==="leave" ? "var(--color-warning)" : "var(--gray-400)";
  return (
    <span className={`badge ${cls}`}>
      <span style={{ width:6, height:6, borderRadius:"50%", background:dotColor, flexShrink:0 }} />
      {label}
    </span>
  );
}

const DEPTS    = ["All","Engineering","Marketing","HR","Design","Finance","Management"];
const STATUSES = ["All","active","inactive","leave"];

/* ── Employee Form Modal ─────────────────────────────────────── */
function EmpModal({ emp, isNew, onClose, onSave }) {
  const [form, setForm] = useState(emp || { name:"",email:"",phone:"",dept:"Engineering",role:"",status:"active",salary:"",location:"",manager:"" });
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const fields = [
    ["Full Name",     "name",     "text",   "Rahul Sharma"],
    ["Email",         "email",    "email",  "rahul@ems.io"],
    ["Phone",         "phone",    "text",   "+91 98765 43210"],
    ["Role",          "role",     "text",   "Software Engineer"],
    ["Salary (₹)",   "salary",   "number", "75000"],
    ["Location",      "location", "text",   "Mumbai"],
    ["Manager",       "manager",  "text",   "Hare Krishna"],
  ];

  return (
    <div className="modal-backdrop" onClick={e => e.target===e.currentTarget && onClose()}>
      <div className="modal-box anim-popIn" style={{ maxWidth:520 }}>
        <div className="modal-header">
          <span className="modal-title">{isNew ? "Add New Employee" : "Edit Employee"}</span>
          <button className="btn btn-ghost btn-icon btn-sm" onClick={onClose}>
            <Icon name="x" size={16} />
          </button>
        </div>
        <div className="modal-body">
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
            {fields.map(([label, key, type, ph]) => (
              <div key={key} className="form-group">
                <label className="form-label">{label}</label>
                <input className="form-input" type={type} value={form[key]||""} placeholder={ph} onChange={e=>set(key,e.target.value)} />
              </div>
            ))}
            <div className="form-group">
              <label className="form-label">Department</label>
              <select className="form-input" value={form.dept} onChange={e=>set("dept",e.target.value)}>
                {DEPTS.filter(d=>d!=="All").map(d => <option key={d}>{d}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Status</label>
              <select className="form-input" value={form.status} onChange={e=>set("status",e.target.value)}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="leave">On Leave</option>
              </select>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={()=>{ onSave(form); onClose(); }}>
            <Icon name="check" size={14} />
            {isNew ? "Add Employee" : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Profile Side Panel ──────────────────────────────────────── */
function ProfilePanel({ emp, onClose, onEdit }) {
  const fields = [
    { icon:"mail",     label:"Email",      val:emp.email },
    { icon:"phone",    label:"Phone",      val:emp.phone },
    { icon:"building", label:"Department", val:emp.dept },
    { icon:"map-pin",  label:"Location",   val:emp.location },
    { icon:"user",     label:"Manager",    val:emp.manager },
    { icon:"calendar", label:"Joined",     val:emp.joined },
    { icon:"dollar-sign", label:"Salary",  val:`₹${emp.salary?.toLocaleString("en-IN")}/mo` },
  ];
  return (
    <div style={{ position:"fixed", right:0, top:0, bottom:0, width:340, background:"white", borderLeft:"1px solid var(--gray-200)", zIndex:90, display:"flex", flexDirection:"column", boxShadow:"var(--shadow-lg)", animation:"slideIn 0.25s var(--ease)" }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 20px", borderBottom:"1px solid var(--gray-100)" }}>
        <span style={{ fontSize:15, fontWeight:700, color:"var(--gray-900)" }}>Employee Profile</span>
        <button className="btn btn-ghost btn-icon btn-sm" onClick={onClose}><Icon name="x" size={16} /></button>
      </div>
      <div style={{ flex:1, overflowY:"auto", padding:20 }}>
        {/* Header */}
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:10, marginBottom:22, textAlign:"center" }}>
          <Avatar initials={emp.avatar} colorClass={emp.avColor} size={66} />
          <div>
            <div style={{ fontSize:17, fontWeight:700, color:"var(--gray-900)" }}>{emp.name}</div>
            <div style={{ fontSize:13, color:"var(--gray-500)", marginTop:2 }}>{emp.role}</div>
            <div style={{ marginTop:8 }}><StatusBadge status={emp.status} /></div>
          </div>
        </div>

        {/* Fields */}
        {fields.map((f, i) => (
          <div key={i} style={{ display:"flex", gap:11, padding:"10px 0", borderBottom:"1px solid var(--gray-50)" }}>
            <div style={{ width:32, height:32, borderRadius:8, background:"var(--gray-50)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <Icon name={f.icon} size={15} color="var(--gray-400)" strokeWidth={1.7} />
            </div>
            <div>
              <div style={{ fontSize:11, color:"var(--gray-400)", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.06em" }}>{f.label}</div>
              <div style={{ fontSize:13.5, color:"var(--gray-700)", fontWeight:500, marginTop:2, wordBreak:"break-all" }}>{f.val}</div>
            </div>
          </div>
        ))}

        {/* Skills */}
        {emp.skills?.length > 0 && (
          <div style={{ marginTop:16 }}>
            <div style={{ fontSize:11, color:"var(--gray-400)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:8 }}>Skills</div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
              {emp.skills.map(s => <span key={s} className="badge badge-blue">{s}</span>)}
            </div>
          </div>
        )}
      </div>
      <div style={{ padding:"14px 20px", borderTop:"1px solid var(--gray-100)", display:"flex", gap:8 }}>
        <button className="btn btn-primary btn-sm" onClick={onEdit} style={{ flex:1 }}>
          <Icon name="edit" size={13} />
          Edit
        </button>
        <button className="btn btn-secondary btn-sm" onClick={onClose} style={{ flex:1 }}>
          Close
        </button>
      </div>
    </div>
  );
}

/* ── Main ────────────────────────────────────────────────────── */
export default function Employees() {
  const [list,        setList]        = useState(employees);
  const [search,      setSearch]      = useState("");
  const [dept,        setDept]        = useState("All");
  const [status,      setStatus]      = useState("All");
  const [view,        setView]        = useState("table");
  const [modal,       setModal]       = useState(null);  // null | "add" | emp
  const [profile,     setProfile]     = useState(null);

  const filtered = list.filter(e => {
    const q = search.toLowerCase();
    return (
      (e.name.toLowerCase().includes(q) || e.email.toLowerCase().includes(q) || e.role.toLowerCase().includes(q)) &&
      (dept   === "All" || e.dept   === dept) &&
      (status === "All" || e.status === status)
    );
  });

  const handleSave = form => {
    if (modal === "add") {
      const initials = form.name.split(" ").map(n=>n[0]).join("").slice(0,2).toUpperCase();
      setList(p => [...p, { ...form, id:Date.now(), avatar:initials, avColor:"av-blue", skills:[], joined:new Date().toISOString().split("T")[0] }]);
    } else {
      setList(p => p.map(e => e.id===modal.id ? { ...e, ...form } : e));
      if (profile?.id === modal.id) setProfile(prev => ({ ...prev, ...form }));
    }
  };

  const handleDelete = id => {
    if (window.confirm("Remove this employee from the system?")) {
      setList(p => p.filter(e => e.id !== id));
      if (profile?.id === id) setProfile(null);
    }
  };

  return (
    <div className="page-content anim-fadeIn">
      {/* ── Controls ───────────────────────────────────────────── */}
      <div style={{ display:"flex", gap:10, flexWrap:"wrap", marginBottom:16, alignItems:"center" }}>
        <div className="search-box" style={{ width:240, display:"flex" }}>
          <Icon name="search" size={15} color="var(--gray-400)" />
          <input type="text" placeholder="Search name, email, role..." value={search} onChange={e=>setSearch(e.target.value)} />
        </div>

        <div style={{ display:"flex", gap:8, alignItems:"center" }}>
          <Icon name="filter" size={15} color="var(--gray-400)" />
          <select className="form-input" value={dept} onChange={e=>setDept(e.target.value)} style={{ width:160, padding:"7px 28px 7px 10px" }}>
            {DEPTS.map(d => <option key={d}>{d}</option>)}
          </select>
          <select className="form-input" value={status} onChange={e=>setStatus(e.target.value)} style={{ width:140, padding:"7px 28px 7px 10px" }}>
            {STATUSES.map(s => <option key={s} value={s}>{s==="All" ? "All Status" : s.charAt(0).toUpperCase()+s.slice(1)}</option>)}
          </select>
        </div>

        <div style={{ marginLeft:"auto", display:"flex", gap:8, alignItems:"center" }}>
          <div className="tabs-pill" style={{ height:34 }}>
            <div className={`tab-pill ${view==="table"?"active":""}`} onClick={()=>setView("table")} style={{ display:"flex", alignItems:"center", gap:5, padding:"5px 10px" }}>
              <Icon name="list" size={14} />Table
            </div>
            <div className={`tab-pill ${view==="cards"?"active":""}`} onClick={()=>setView("cards")} style={{ display:"flex", alignItems:"center", gap:5, padding:"5px 10px" }}>
              <Icon name="grid" size={14} />Cards
            </div>
          </div>
          <button className="btn btn-primary" onClick={()=>setModal("add")}>
            <Icon name="plus" size={15} />Add Employee
          </button>
        </div>
      </div>

      {/* Counter */}
      <div style={{ fontSize:12.5, color:"var(--gray-400)", marginBottom:12 }}>
        Showing <strong style={{ color:"var(--gray-700)" }}>{filtered.length}</strong> of <strong style={{ color:"var(--gray-700)" }}>{list.length}</strong> employees
      </div>

      {/* ── Table View ─────────────────────────────────────────── */}
      {view === "table" && (
        <div className="card" style={{ overflow:"hidden" }}>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Department</th>
                  <th>Role</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Salary</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(emp => (
                  <tr key={emp.id}>
                    <td>
                      <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                        <Avatar initials={emp.avatar} colorClass={emp.avColor} size={36} />
                        <div>
                          <div style={{ fontWeight:600, color:"var(--gray-900)", fontSize:13.5 }}>{emp.name}</div>
                          <div style={{ fontSize:11.5, color:"var(--gray-400)", marginTop:1 }}>{emp.email}</div>
                        </div>
                      </div>
                    </td>
                    <td><span className="badge badge-blue">{emp.dept}</span></td>
                    <td style={{ color:"var(--gray-600)", fontSize:13 }}>{emp.role}</td>
                    <td>
                      <div style={{ display:"flex", alignItems:"center", gap:5, color:"var(--gray-500)", fontSize:13 }}>
                        <Icon name="map-pin" size={13} color="var(--gray-400)" />
                        {emp.location}
                      </div>
                    </td>
                    <td><StatusBadge status={emp.status} /></td>
                    <td style={{ fontWeight:700, color:"var(--gray-900)", fontSize:13.5, fontFamily:"monospace" }}>
                      ₹{emp.salary?.toLocaleString("en-IN")}
                    </td>
                    <td>
                      <div style={{ display:"flex", gap:5 }}>
                        <button className="btn btn-secondary btn-sm" onClick={()=>setProfile(emp)} data-tip="View Profile">
                          <Icon name="eye" size={13} />
                        </button>
                        <button className="btn btn-secondary btn-sm" onClick={()=>setModal(emp)} data-tip="Edit">
                          <Icon name="edit" size={13} />
                        </button>
                        <button className="btn btn-danger btn-sm" onClick={()=>handleDelete(emp.id)} data-tip="Delete">
                          <Icon name="trash" size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div className="empty-state">
                <div className="empty-icon-wrap"><Icon name="users" size={26} color="var(--gray-300)" /></div>
                <div className="empty-title">No employees found</div>
                <div className="empty-desc">Try adjusting your search or filter criteria</div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Card View ──────────────────────────────────────────── */}
      {view === "cards" && (
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))", gap:12 }}>
          {filtered.map(emp => (
            <div key={emp.id} className="card card-hoverable" style={{ padding:20, display:"flex", flexDirection:"column", alignItems:"center", gap:10, textAlign:"center" }}>
              <Avatar initials={emp.avatar} colorClass={emp.avColor} size={54} />
              <div>
                <div style={{ fontWeight:700, fontSize:14.5, color:"var(--gray-900)" }}>{emp.name}</div>
                <div style={{ fontSize:12, color:"var(--gray-400)", marginTop:2 }}>{emp.role}</div>
              </div>
              <span className="badge badge-blue">{emp.dept}</span>
              <StatusBadge status={emp.status} />
              <div style={{ display:"flex", alignItems:"center", gap:4, fontSize:12, color:"var(--gray-400)" }}>
                <Icon name="map-pin" size={12} color="var(--gray-400)" />
                {emp.location}
              </div>
              <div style={{ fontSize:13.5, fontWeight:700, color:"var(--gray-900)", fontFamily:"monospace" }}>
                ₹{emp.salary?.toLocaleString("en-IN")}/mo
              </div>
              <div style={{ display:"flex", gap:6, width:"100%", marginTop:2 }}>
                <button className="btn btn-secondary btn-sm" style={{ flex:1 }} onClick={()=>setProfile(emp)}>
                  <Icon name="eye" size={13} />View
                </button>
                <button className="btn btn-primary btn-sm" style={{ flex:1 }} onClick={()=>setModal(emp)}>
                  <Icon name="edit" size={13} />Edit
                </button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="empty-state" style={{ gridColumn:"1/-1" }}>
              <div className="empty-icon-wrap"><Icon name="users" size={26} color="var(--gray-300)" /></div>
              <div className="empty-title">No employees found</div>
              <div className="empty-desc">Try adjusting your search or filter criteria</div>
            </div>
          )}
        </div>
      )}

      {modal && (
        <EmpModal
          emp={modal === "add" ? null : modal}
          isNew={modal === "add"}
          onClose={() => setModal(null)}
          onSave={handleSave}
        />
      )}

      {profile && (
        <ProfilePanel
          emp={profile}
          onClose={() => setProfile(null)}
          onEdit={() => { setModal(profile); setProfile(null); }}
        />
      )}
    </div>
  );
}
