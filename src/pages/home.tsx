export default function Home() {
  return (
    <div className="page center" style={{ minHeight: "100vh" }}>
      <div className="flex flex-col items-center text-center gap-6">
        
        {/* Logo Circle */}
        <div
          className="flex items-center justify-center"
          style={{
            width: 90,
            height: 90,
            borderRadius: "50%",
            backgroundColor: "var(--accent)",
          }}
        >
          <h1
            style={{
              color: "var(--color-primary)",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            S
          </h1>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-1">
          <h1 style={{ fontSize: 30, fontWeight: 800 }}>
            Save Automatically
          </h1>

          <p className="text-small" style={{ maxWidth: 320 }}>
            Build better money habits with automated daily or weekly savings.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col w-full items-center gap-3 mt-2">
          <button
            className="btn-primary"
            style={{ width: 260, padding: "13px 0" }}
            onClick={() => (window.location.href = "/signup")}
          >
            Create an Account
          </button>

          <button
            className="btn-ghost"
            style={{
              width: 260,
              padding: "13px 0",
              fontWeight: 600,
              borderRadius: 10,
              borderColor: "var(--color-primary)",
              color: "var(--color-primary)",
            }}
            onClick={() => (window.location.href = "/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}