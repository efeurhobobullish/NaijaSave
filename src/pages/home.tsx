export default function Home() {
  return (
    <div
      className="page center"
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "var(--color-primary)", // BLUE BACKGROUND
        color: "white",
        flexDirection: "column",
        gap: "30px",
        padding: "20px"
      }}
    >
      {/* Logo circle */}
      <div
        style={{
          width: 90,
          height: 90,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: 34, fontWeight: 800, color: "white" }}>S</h1>
      </div>

      {/* Text */}
      <div style={{ textAlign: "center", maxWidth: 280 }}>
        <h1 style={{ fontSize: 30, fontWeight: 800, lineHeight: "1.2" }}>
          Save Automatically
        </h1>
        <p style={{ marginTop: 10, opacity: 0.9 }}>
          Build better savings habits with automated daily or weekly deposits.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col items-center gap-3 w-full">
        <button
          className="btn"
          style={{
            width: 260,
            padding: "13px 0",
            background: "white",
            color: "var(--color-primary)",
            fontWeight: 700,
            borderRadius: 10,
          }}
          onClick={() => (window.location.href = "/signup")}
        >
          Create Account
        </button>

        <button
          className="btn"
          style={{
            width: 260,
            padding: "13px 0",
            background: "transparent",
            color: "white",
            border: "1px solid rgba(255,255,255,0.7)",
            fontWeight: 600,
            borderRadius: 10
          }}
          onClick={() => (window.location.href = "/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
}