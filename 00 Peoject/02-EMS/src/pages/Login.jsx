import { useState, useEffect } from "react";
import { Icon } from "../components/ui/Icons";
import { getLocalStorages, setLocalStorages } from "../Utils/LocalStorage";

const FEATURES = [
  { icon: "users",       text: "Manage your entire workforce in one place" },
  { icon: "calendar",    text: "Track attendance and time-off with ease" },
  { icon: "dollar-sign", text: "Transparent payroll processing" },
  { icon: "bar-chart",   text: "Actionable insights with real-time analytics" },
];

export default function Login({ onLogin }) {
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [error,    setError]    = useState("");
  const [loading,  setLoading]  = useState(false);
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    // Initialize localStorage if empty or admin is outdated
    const adminData = localStorage.getItem("admin");
    if (!localStorage.getItem("employees") || !adminData || !adminData.includes("hk1152@hk.com")) {
      setLocalStorages();
    }
  }, []);

  const fill = (role) => {
    if (role === "admin") { 
      setEmail("hk1152@hk.com"); 
      setPassword("123"); 
    } else { 
      setEmail("employee1@example.com"); 
      setPassword("123"); 
    }
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 
    setLoading(true);
    
    // Simulate network delay
    await new Promise(r => setTimeout(r, 800));
    setLoading(false);

    const { emp, admin } = getLocalStorages();

    // Check Admin
    const isAdmin = admin.find(a => a.email === email && a.password === password);
    if (isAdmin) {
      onLogin("admin", isAdmin);
      return;
    }

    // Check Employee
    const isEmployee = emp.find(e => e.email === email && e.password === password);
    if (isEmployee) {
      onLogin("employee", isEmployee);
      return;
    }

    setError("Invalid email or password. Please try again.");
  };

  return (
    <div style={{
      minHeight: "100vh", display: "flex",
      fontFamily: "'Inter', sans-serif",
      background: "#f8fafc",
    }}>
      {/* ── Left Panel ─────────────────────────────────────────── */}
      <div style={{
        flex: 1, minWidth: 0,
        background: "linear-gradient(150deg, #1e3a8a 0%, #1d4ed8 55%, #2563eb 100%)",
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "48px 44px",
        position: "relative", overflow: "hidden",
      }}>
        {/* Background blobs */}
        <div style={{ position:"absolute", top:-100, right:-100, width:360, height:360, borderRadius:"50%", background:"rgba(255,255,255,0.05)" }} />
        <div style={{ position:"absolute", bottom:-140, left:-80, width:440, height:440, borderRadius:"50%", background:"rgba(255,255,255,0.04)" }} />
        <div style={{ position:"absolute", top:"45%", left:-60, width:240, height:240, borderRadius:"50%", background:"rgba(255,255,255,0.05)" }} />

        <div style={{ position:"relative", zIndex:1, width:"100%", maxWidth:400 }}>
          {/* Logo */}
          <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:40 }}>
            <div style={{
              width:52, height:52, borderRadius:14,
              background:"rgba(255,255,255,0.15)", backdropFilter:"blur(8px)",
              border:"1px solid rgba(255,255,255,0.2)",
              display:"flex", alignItems:"center", justifyContent:"center",
              fontSize:24, fontWeight:800, color:"white",
            }}>HK</div>
            <div>
              <div style={{ fontSize:24, fontWeight:800, color:"white", letterSpacing:"-0.5px" }}>HK Pro</div>
              <div style={{ fontSize:13, color:"rgba(255,255,255,0.65)", marginTop:1 }}>Employee Management System</div>
            </div>
          </div>

          <h2 style={{ fontSize:32, fontWeight:800, color:"white", lineHeight:1.2, letterSpacing:"-0.5px", marginBottom:12 }}>
            Manage your team<br />with confidence.
          </h2>
          <p style={{ fontSize:15, color:"rgba(255,255,255,0.7)", lineHeight:1.65, marginBottom:36 }}>
            A unified platform for HR, payroll, attendance, and analytics — built for modern organizations.
          </p>

          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{
                display:"flex", alignItems:"center", gap:12,
                background:"rgba(255,255,255,0.08)",
                border:"1px solid rgba(255,255,255,0.12)",
                borderRadius:10, padding:"11px 14px",
                backdropFilter:"blur(6px)",
              }}>
                <div style={{
                  width:32, height:32, borderRadius:8,
                  background:"rgba(255,255,255,0.15)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  flexShrink:0,
                }}>
                  <Icon name={f.icon} size={16} color="white" strokeWidth={1.7} />
                </div>
                <span style={{ fontSize:13.5, color:"rgba(255,255,255,0.88)", fontWeight:500 }}>{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right Panel ────────────────────────────────────────── */}
      <div style={{
        width:480, flexShrink:0,
        display:"flex", flexDirection:"column", justifyContent:"center",
        alignItems:"center", padding:"40px 44px",
        background:"white",
      }}>
        <div style={{ width:"100%", maxWidth:360 }}>
          {/* Heading */}
          <div style={{ marginBottom:28 }}>
            <h2 style={{ fontSize:26, fontWeight:800, color:"var(--gray-900)", letterSpacing:"-0.5px" }}>
              Welcome back
            </h2>
            <p style={{ fontSize:13.5, color:"var(--gray-400)", marginTop:4 }}>
              Sign in to your HK Pro account
            </p>
          </div>

          {/* Quick Sign-in */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:22 }}>
            {[
              { role:"admin", label:"Admin Demo", icon:"shield", color:"var(--blue-700)", bg:"var(--blue-50)", border:"var(--blue-200)" },
              { role:"emp",   label:"Employee Demo", icon:"user", color:"var(--gray-600)", bg:"var(--gray-50)", border:"var(--gray-200)" },
            ].map(({ role, label, icon, color, bg, border }) => (
              <button
                key={role}
                onClick={() => fill(role)}
                style={{
                  display:"flex", alignItems:"center", justifyContent:"center", gap:7,
                  padding:"9px 12px", borderRadius:9, border:`1.5px solid ${border}`,
                  background:bg, color:color, fontSize:12.5, fontWeight:600, cursor:"pointer",
                  transition:"var(--transition)", fontFamily:"inherit",
                }}
              >
                <Icon name={icon} size={14} color={color} />
                {label}
              </button>
            ))}
          </div>

            <div className="divider-text" style={{ marginBottom:20, fontSize:11 }}>or continue with email</div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:14 }}>
            <div className="form-group">
              <label className="form-label">
                <Icon name="mail" size={13} color="var(--gray-400)" />
                Email Address
              </label>
              <div className="input-wrap">
                <Icon name="mail" size={15} className="input-icon" color="var(--gray-400)" />
                <input
                  className="form-input" type="email" required autoComplete="email"
                  placeholder="you@ems.io" value={email}
                  onChange={e => { setEmail(e.target.value); setError(""); }}
                />
              </div>
            </div>

            <div className="form-group">
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <label className="form-label">
                  <Icon name="lock" size={13} color="var(--gray-400)" />
                  Password
                </label>
                <span
                  style={{ fontSize:12, color:"var(--blue-700)", cursor:"pointer", fontWeight:600 }}
                  onClick={() => alert("Password reset email sent! (demo)")}
                >
                  Forgot password?
                </span>
              </div>
              <div className="input-wrap">
                <Icon name="lock" size={15} className="input-icon" color="var(--gray-400)" />
                <input
                  className="form-input" type={showPass ? "text" : "password"} required autoComplete="current-password"
                  placeholder="••••••••" value={password}
                  onChange={e => { setPassword(e.target.value); setError(""); }}
                  style={{ paddingRight: 36 }}
                />
                <span
                  className="input-icon-right"
                  onClick={() => setShowPass(s => !s)}
                  style={{ right: 0, padding:"0 10px", height:"100%", display:"flex", alignItems:"center" }}
                >
                  <Icon name={showPass ? "eye-off" : "eye"} size={15} color="var(--gray-400)" />
                </span>
              </div>
            </div>

            {error && (
              <div className="alert alert-error">
                <Icon name="alert" size={16} color="var(--color-error)" style={{ flexShrink:0, marginTop:1 }} />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary btn-lg"
              style={{ width:"100%", marginTop:4 }}
            >
              {loading ? (
                <>
                  <span style={{
                    width:16, height:16, border:"2px solid rgba(255,255,255,0.35)",
                    borderTopColor:"white", borderRadius:"50%",
                    display:"inline-block",
                    animation:"spin 0.7s linear infinite",
                  }} />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <Icon name="arrow-right" size={16} color="white" />
                </>
              )}
            </button>
          </form>

          {/* Demo hint */}
          <div style={{
            marginTop:22, padding:"12px 14px",
            background:"var(--gray-50)", borderRadius:10,
            border:"1px solid var(--gray-100)",
          }}>
            <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:4 }}>
              <Icon name="info" size={13} color="var(--gray-400)" />
              <span style={{ fontSize:11.5, fontWeight:700, color:"var(--gray-600)" }}>Demo Credentials</span>
            </div>
            <div style={{ fontSize:12, color:"var(--gray-500)", display:"flex", flexDirection:"column", gap:2 }}>
              <span><strong style={{ color:"var(--gray-700)" }}>Admin:</strong> hk1152@hk.com / 123</span>
              <span><strong style={{ color:"var(--gray-700)" }}>Employee:</strong> employee1@example.com / 123</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="flex: 1"][style*="linear-gradient"] { display: none; }
          div[style*="width: 480px"] { width: 100%; padding: 28px 24px; }
        }
      `}</style>
    </div>
  );
}
