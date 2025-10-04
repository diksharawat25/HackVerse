import React from "react";

export default function Navbar({ onNavigate, onOpenLogin, isLoggedIn, user, onLogout }) {
  const centerItems = [
    { name: "Home", page: "home" },
    { name: "About", page: "about" },
    { name: "Contact", page: "contact" },
  ];

  return (
    <nav style={{
      display: "flex", alignItems: "center", gap: 20,
      padding: "12px 32px", background: "white", boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
      position: "sticky", top: 0, zIndex: 50
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ fontWeight: 800, fontSize: 20 }}>🎯 Opphora</div>
      </div>

      <div style={{ flex: 1, display: "flex", justifyContent: "center", gap: 24 }}>
        {centerItems.map((it, idx) => (
          <button key={idx}
            onClick={() => onNavigate(it.page)}
            style={{
              background: "transparent", border: "none", cursor: "pointer",
              fontWeight: 700, color: "#0b1d51", padding: "8px 12px"
            }}>
            {it.name}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {!isLoggedIn ? (
          <button
            onClick={onOpenLogin}
            style={{
              padding: "8px 16px", borderRadius: 8, border: "none", cursor: "pointer",
              background: "linear-gradient(90deg,#ff69b4,#1e90ff)", color: "white", fontWeight: 700
            }}
          >
            Login / Signup
          </button>
        ) : (
          <>
            <div style={{ fontWeight: 600 }}>{user?.name || "User"}</div>
            <button onClick={onLogout} style={{ padding: "6px 10px", cursor: "pointer" }}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
