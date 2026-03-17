import React from "react";
import { Icon } from "../ui/Icons";

export default function Unauthorized({ onBack }) {
  return (
    <div className="page-content anim-fadeIn" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", padding: "40px 20px" }}>
      <div style={{ width: 80, height: 80, borderRadius: "50%", background: "var(--color-error-bg)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, boxShadow: "0 8px 24px rgba(220, 38, 38, 0.15)" }}>
        <Icon name="shield" size={40} color="var(--color-error)" strokeWidth={1.5} />
      </div>
      <h1 style={{ fontSize: 28, fontWeight: 800, color: "var(--gray-900)", marginBottom: 12 }}>Access Denied</h1>
      <p style={{ fontSize: 15, color: "var(--gray-500)", maxWidth: 420, lineHeight: 1.5, marginBottom: 32 }}>
        You don't have permission to view this page. This area is restricted to administrators only.
      </p>
      <button className="btn btn-primary" onClick={onBack} style={{ padding: "10px 24px", fontSize: 14 }}>
        <Icon name="arrow-left" size={16} />
        Return to Dashboard
      </button>
    </div>
  );
}
