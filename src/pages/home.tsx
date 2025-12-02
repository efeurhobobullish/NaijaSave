export default function Home() {
  return (
    <div
      className="center"
      style={{
        minHeight: "100vh",
        background: "var(--color-primary)", // BLUE BACKGROUND (Opay style)
        padding: "20px",
      }}
    >
      {/* White mobile card */}
      <div
        className="card"
        style={{
          width: "100%",
          maxWidth: 380,
          background: "white",
          borderRadius: 20,
          padding: "35px 25px",
          textAlign: "center",
        }}
      >
        {/* Illustration circle */}
        <div
          style={{
            width: 90,
            height: 90,
            borderRadius: "50%",
            background: "var(--accent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 25px auto",
          }}
        >
          <h1 style={{ fontSize: 34, fontWeight: 700, color: "var(--color-primary)" }}>
            S
          </h1>
        </div>

        {/* Text */}
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 10 }}>Save Automatically</h2>
        <p className="text-small" style={{ marginBottom: 25 }}>
          Build a better savings habit with daily, weekly, or smart automated deposits.
        </p>

        {/* Button */}
        <button
          className="btn-primary"
          style={{
            width: "100%",
            padding: "14px 0",
            borderRadius: 12,
            fontSize: 15,
          }}
          onClick={() => (window.location.href = "/signup")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}