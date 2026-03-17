import { useState } from "react";
import { Icon } from "../components/ui/Icons";
import { isAdmin } from "../Utils/roles";

function Toggle({ on, onToggle }) {
  return <div className={`toggle ${on?"on":""}`} onClick={onToggle} role="switch" aria-checked={on} />;
}

const TABS = [
  { id:"profile",  icon:"user",     label:"Profile" },
  { id:"security", icon:"shield",   label:"Security" },
  { id:"notifs",   icon:"bell",     label:"Notifications" },
  { id:"account",  icon:"settings", label:"Account" },
];

export default function Settings({ user }) {
  const adminState = isAdmin(user);
  const [tab,    setTab]    = useState("profile");
  const [saved,  setSaved]  = useState(false);
  const [profile, setProfile] = useState({
    name: user?.name || "Hare Krishna",
    email: user?.email || "hk@hk.com",
    role: user?.role === "admin" ? "CEO & Founder" : (user?.role || "Employee"),
    dept: user?.dept || "Management",
    bio: user?.role === "admin"
      ? "Visionary leader with a passion for building scalable systems and empowering teams. Focused on creating a positive workplace culture and driving innovation through technology."
      : "Dedicated team member contributing to company growth and innovation."
  });
  const [pwd, setPwd] = useState({ current:"", newPwd:"", confirm:"" });
  const [notifs, setNotifs] = useState({
    emailLeave:true, emailPayroll:true, emailPerf:false,
    pushAttend:true, pushAnnounce:true, pushTask:false, smsOtp:true,
  });
  const [showCur,   setShowCur]  = useState(false);
  const [showNew,   setShowNew]  = useState(false);
  const [twoFA,     setTwoFA]    = useState(false);

  const set    = (k, v) => setProfile(p => ({...p, [k]:v}));
  const setP   = (k, v) => setPwd(p => ({...p, [k]:v}));
  const toggleN = k => setNotifs(p => ({...p, [k]:!p[k]}));

  const saveFn = () => { setSaved(true); setTimeout(()=>setSaved(false), 2500); };

  const pwdStrength = pwd.newPwd.length > 10 ? 100 : pwd.newPwd.length > 6 ? 60 : pwd.newPwd.length > 2 ? 30 : 0;
  const pwdColor    = pwdStrength===100 ? "var(--color-success)" : pwdStrength>=60 ? "var(--color-warning)" : "var(--color-error)";
  const pwdLabel    = pwdStrength===100 ? "Strong" : pwdStrength>=60 ? "Medium" : pwdStrength>0 ? "Weak" : "";

  const depts = ["Engineering","Marketing","HR","Design","Finance","Management"];

  return (
    <div className="page-content anim-fadeIn">
      <div style={{ display:"grid", gridTemplateColumns:"216px 1fr", gap:18, alignItems:"start" }}>

        {/* ── Tab Sidebar ─────────────────────────────────────── */}
        <div className="card" style={{ padding:8, position:"sticky", top:78 }}>
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                width:"100%", display:"flex", alignItems:"center", gap:9,
                padding:"9px 11px", borderRadius:9, cursor:"pointer",
                background: tab===t.id ? "var(--blue-50)" : "transparent",
                color: tab===t.id ? "var(--blue-700)" : "var(--gray-600)",
                border:"none", fontSize:13.5, fontWeight: tab===t.id ? 600 : 500,
                transition:"all 0.15s", fontFamily:"inherit", textAlign:"left",
              }}
            >
              <Icon name={t.icon} size={16} color={tab===t.id ? "var(--blue-700)" : "var(--gray-400)"} strokeWidth={tab===t.id ? 2.2 : 1.8} />
              {t.label}
            </button>
          ))}
        </div>

        {/* ── Content ─────────────────────────────────────────── */}
        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>

          {/* Profile */}
          {tab === "profile" && (
            <div className="card" style={{ overflow:"hidden" }}>
              {/* Cover */}
              <div style={{ height:90, background:"linear-gradient(135deg,var(--blue-900),var(--blue-700),var(--blue-500))", position:"relative" }}>
                <div style={{ position:"absolute", bottom:-32, left:24, width:64, height:64, borderRadius:"50%", background:"#161616", border:"3px solid white", display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontSize:26, fontWeight:800, boxShadow:"var(--shadow-md)" }}>HK</div>
              </div>
              <div style={{ padding:"44px 24px 20px" }}>
                <div style={{ fontSize:18, fontWeight:800, color:"var(--gray-900)" }}>{profile.name}</div>
                <div style={{ fontSize:13, color:"var(--gray-400)", marginTop:2 }}>{profile.role} · {profile.dept}</div>
              </div>

              <div style={{ padding:"0 24px 24px" }}>
                <div style={{ fontSize:11.5, fontWeight:700, color:"var(--gray-400)", textTransform:"uppercase", letterSpacing:"0.07em", marginBottom:14, display:"flex", alignItems:"center", gap:6 }}>
                  <Icon name="user" size={13} color="var(--gray-400)" />
                  Personal Information
                </div>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
                  {[
                    ["Full Name",   "name",     "text",  "Rahul Sharma"],
                    ["Email",       "email",    "email", "you@ems.io"],
                    ["Phone",       "phone",    "text",  "+91 98765 43210"],
                    ["Location",    "location", "text",  "Mumbai"],
                    ["Role / Title","role",     "text",  "Senior Developer"],
                  ].map(([lbl,key,type,ph]) => (
                    <div key={key} className="form-group">
                      <label className="form-label">{lbl}</label>
                      <input className="form-input" type={type} value={profile[key]||""} placeholder={ph} onChange={e=>set(key,e.target.value)} disabled={(!adminState && (key === "role" || key === "email")) || false} />
                    </div>
                  ))}
                  <div className="form-group">
                    <label className="form-label">Department</label>
                    <select className="form-input" value={profile.dept} onChange={e=>set("dept",e.target.value)} disabled={!adminState}>
                      {depts.map(d=><option key={d}>{d}</option>)}
                    </select>
                  </div>
                  <div className="form-group" style={{ gridColumn:"span 2" }}>
                    <label className="form-label">Bio</label>
                    <textarea className="form-input" rows={3} value={profile.bio} onChange={e=>set("bio",e.target.value)} placeholder="Tell us about yourself..." />
                  </div>
                </div>
                <div style={{ display:"flex", gap:8, marginTop:18, alignItems:"center" }}>
                  <button className="btn btn-primary" onClick={saveFn}>
                    <Icon name="check" size={13} />Save Changes
                  </button>
                  <button className="btn btn-secondary" onClick={()=>setSaved(false)}>
                    <Icon name="refresh" size={13} />Reset
                  </button>
                  {saved && (
                    <span style={{ display:"flex", alignItems:"center", gap:5, fontSize:13, color:"var(--color-success)", fontWeight:600 }}>
                      <Icon name="check-circle" size={15} color="var(--color-success)" />
                      Saved successfully!
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Security */}
          {tab === "security" && (
            <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
              {/* Change Password */}
              <div className="card" style={{ padding:22 }}>
                <div style={{ fontSize:15, fontWeight:700, color:"var(--gray-900)", marginBottom:18, display:"flex", alignItems:"center", gap:8 }}>
                  <Icon name="lock" size={16} color="var(--gray-400)" />
                  Change Password
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:13, maxWidth:400 }}>
                  {[
                    ["Current Password","current",showCur,()=>setShowCur(s=>!s)],
                    ["New Password",    "newPwd",  showNew,()=>setShowNew(s=>!s)],
                    ["Confirm New Password","confirm",false,null],
                  ].map(([lbl,key,show,toggle]) => (
                    <div key={key} className="form-group">
                      <label className="form-label">{lbl}</label>
                      <div className="input-wrap">
                        <Icon name="lock" size={15} className="input-icon" color="var(--gray-400)" />
                        <input className="form-input" type={show?"text":"password"} value={pwd[key]} onChange={e=>setP(key,e.target.value)} placeholder="••••••••" style={{ paddingRight:toggle?36:12 }} />
                        {toggle && (
                          <span className="input-icon-right" onClick={toggle} style={{ right:0,padding:"0 10px",height:"100%",display:"flex",alignItems:"center",cursor:"pointer" }}>
                            <Icon name={show?"eye-off":"eye"} size={15} color="var(--gray-400)" />
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                  {pwd.newPwd && (
                    <div>
                      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:5, fontSize:12, fontWeight:600, color:"var(--gray-400)" }}>
                        <span>Password Strength</span>
                        <span style={{ color:pwdColor }}>{pwdLabel}</span>
                      </div>
                      <div className="progress-track"><div className="progress-fill" style={{ width:`${pwdStrength}%`, background:pwdColor }} /></div>
                    </div>
                  )}
                  {pwd.confirm && pwd.newPwd !== pwd.confirm && (
                    <div className="form-error"><Icon name="alert" size={13} />Passwords do not match</div>
                  )}
                  <button className="btn btn-primary" style={{ width:"fit-content" }} onClick={()=>{ alert("Password updated! (demo)"); setPwd({current:"",newPwd:"",confirm:""}); }}>
                    <Icon name="lock" size={13} />Update Password
                  </button>
                </div>
              </div>

              {/* 2FA */}
              <div className="card" style={{ padding:22 }}>
                <div style={{ fontSize:14, fontWeight:700, color:"var(--gray-900)", marginBottom:14, display:"flex", gap:8, alignItems:"center" }}>
                  <Icon name="shield" size={16} color="var(--gray-400)" />
                  Two-Factor Authentication
                </div>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 16px", background:"var(--gray-50)", borderRadius:10 }}>
                  <div>
                    <div style={{ fontSize:13.5, fontWeight:600, color:"var(--gray-800)" }}>Authenticator App</div>
                    <div style={{ fontSize:12, color:"var(--gray-400)", marginTop:2 }}>Extra layer of security for your account</div>
                  </div>
                  <Toggle on={twoFA} onToggle={()=>setTwoFA(s=>!s)} />
                </div>
                {twoFA && (
                  <div className="alert alert-info" style={{ marginTop:12 }}>
                    <Icon name="info" size={15} color="var(--blue-700)" />
                    <span style={{ fontSize:13 }}>2FA has been enabled. Download an authenticator app to get your codes.</span>
                  </div>
                )}
              </div>

              {/* Sessions */}
              <div className="card" style={{ padding:22 }}>
                <div style={{ fontSize:14, fontWeight:700, color:"var(--gray-900)", marginBottom:14 }}>Active Sessions</div>
                {[
                  { device:"Chrome on Windows", ip:"192.168.1.1", time:"Now · Mumbai, India",   icon:"cpu",  current:true  },
                  { device:"Mobile App (Android)",ip:"10.0.0.5", time:"2 days ago · Delhi, India",icon:"phone",current:false },
                ].map((s, i) => (
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 0", borderBottom:"1px solid var(--gray-50)" }}>
                    <div style={{ width:38, height:38, borderRadius:9, background:"var(--gray-50)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                      <Icon name={s.icon} size={18} color="var(--gray-400)" />
                    </div>
                    <div style={{ flex:1 }}>
                      <div style={{ fontSize:13.5, fontWeight:600, color:"var(--gray-800)" }}>{s.device}</div>
                      <div style={{ fontSize:11.5, color:"var(--gray-400)", marginTop:2 }}>{s.ip} · {s.time}</div>
                    </div>
                    {s.current
                      ? <span className="badge badge-green"><Icon name="check-circle" size={11} color="var(--color-success)" />Current</span>
                      : <button className="btn btn-danger btn-xs" onClick={()=>alert("Session revoked (demo)")}>
                          <Icon name="x" size={12} />Revoke
                        </button>
                    }
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notifications */}
          {tab === "notifs" && (
            <div className="card" style={{ padding:22 }}>
              <div style={{ fontSize:15, fontWeight:700, color:"var(--gray-900)", marginBottom:20 }}>Notification Preferences</div>
              {[
                { section:"Email Notifications", icon:"mail", items:[
                  ["emailLeave",  "Leave request updates",     "Notified when leave is approved or rejected"],
                  ["emailPayroll","Payroll & salary updates",   "Monthly payslip and salary change notifications"],
                  ["emailPerf",   "Performance reviews",        "Quarterly performance report notifications"],
                ]},
                { section:"Push Notifications", icon:"bell", items:[
                  ["pushAttend",  "Attendance reminders",       "Daily check-in/check-out reminders"],
                  ["pushAnnounce","Company announcements",       "Company-wide news and updates"],
                  ["pushTask",    "Task assignments",            "When you are assigned a new task"],
                ]},
                { section:"SMS", icon:"phone", items:[
                  ["smsOtp",      "OTP & Security alerts",      "One-time passwords and security events"],
                ]},
              ].map(grp => (
                <div key={grp.section} style={{ marginBottom:22 }}>
                  <div style={{ fontSize:11.5, fontWeight:700, color:"var(--gray-400)", textTransform:"uppercase", letterSpacing:"0.07em", marginBottom:10, display:"flex", alignItems:"center", gap:6 }}>
                    <Icon name={grp.icon} size={13} color="var(--gray-400)" />
                    {grp.section}
                  </div>
                  {grp.items.map(([key, title, desc]) => (
                    <div key={key} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 0", borderBottom:"1px solid var(--gray-50)" }}>
                      <div>
                        <div style={{ fontSize:13.5, fontWeight:600, color:"var(--gray-800)" }}>{title}</div>
                        <div style={{ fontSize:12, color:"var(--gray-400)", marginTop:2 }}>{desc}</div>
                      </div>
                      <Toggle on={notifs[key]} onToggle={()=>toggleN(key)} />
                    </div>
                  ))}
                </div>
              ))}
              <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                <button className="btn btn-primary" onClick={saveFn}>
                  <Icon name="check" size={13} />Save Preferences
                </button>
                {saved && <span style={{ display:"flex", alignItems:"center", gap:5, fontSize:13, color:"var(--color-success)", fontWeight:600 }}>
                  <Icon name="check-circle" size={15} color="var(--color-success)" />Saved!
                </span>}
              </div>
            </div>
          )}

          {/* Account */}
          {tab === "account" && (
            <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
              <div className="card" style={{ padding:22 }}>
                <div style={{ fontSize:15, fontWeight:700, color:"var(--gray-900)", marginBottom:16 }}>Account Preferences</div>
                {[
                  { icon:"globe",       label:"Language",    value:"English (India)" },
                  { icon:"clock",       label:"Timezone",    value:"IST — Asia/Kolkata (UTC+5:30)" },
                  { icon:"calendar",    label:"Date Format", value:"DD/MM/YYYY" },
                  { icon:"dollar-sign", label:"Currency",    value:"INR (₹)" },
                ].map(p => (
                  <div key={p.label} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 0", borderBottom:"1px solid var(--gray-50)" }}>
                    <div style={{ display:"flex", gap:10, alignItems:"center" }}>
                      <div style={{ width:34, height:34, borderRadius:8, background:"var(--gray-50)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <Icon name={p.icon} size={16} color="var(--gray-400)" strokeWidth={1.7} />
                      </div>
                      <div>
                        <div style={{ fontSize:13.5, fontWeight:600, color:"var(--gray-800)" }}>{p.label}</div>
                        <div style={{ fontSize:12, color:"var(--gray-400)" }}>{p.value}</div>
                      </div>
                    </div>
                    <button className="btn btn-secondary btn-sm">
                      <Icon name="edit" size={12} />Change
                    </button>
                  </div>
                ))}
              </div>

              <div className="card" style={{ padding:22, borderTop:"3px solid var(--color-error-bg)" }}>
                <div style={{ fontSize:15, fontWeight:700, color:"var(--color-error)", marginBottom:6, display:"flex", alignItems:"center", gap:7 }}>
                  <Icon name="alert" size={16} color="var(--color-error)" />
                  Danger Zone
                </div>
                <div style={{ fontSize:13, color:"var(--gray-500)", marginBottom:16 }}>
                  These actions are permanent and cannot be undone.
                </div>
                <div style={{ display:"flex", gap:10 }}>
                  <button className="btn btn-danger" onClick={()=>alert("Account deactivation request sent (demo)")}>
                    <Icon name="x-circle" size={14} />Deactivate Account
                  </button>
                  <button className="btn btn-secondary" onClick={()=>alert("Data export initiated (demo)")}>
                    <Icon name="download" size={14} />Export My Data
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
