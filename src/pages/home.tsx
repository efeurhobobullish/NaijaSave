import ModeToggle from "@/components/ui/mode-toggle";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div
      className="h-[100dvh] w-full center flex-col px-8 relative"
      style={{ background: "var(--color-background)" }}
    >
      {/* APP LOGO */}
      <div
        className="w-20 h-20 rounded-2xl center"
        style={{
          background: "var(--accent)",
          color: "var(--color-primary)",
          fontWeight: 800,
          fontSize: 26,
        }}
      >
        FA
      </div>

      {/* TEXT */}
      <div className="flex flex-col items-center mt-6 gap-1">
        <h1
          className="text-3xl font-bold"
          style={{ color: "var(--color-main)" }}
        >
          Welcome to Fintech App
        </h1>

        <p className="text-small">
          Your money. Faster. Simpler.
        </p>
      </div>

      {/* PRIMARY CTA */}
      <button
        className="btn-primary mt-8 px-8 py-3 flex items-center gap-2"
        style={{ borderRadius: "12px", fontSize: "15px" }}
      >
        Get Started
        <ArrowRight size={18} />
      </button>

      {/* BOTTOM SECTION */}
      <div className="absolute bottom-12 flex flex-col items-center gap-3">
        <ModeToggle />
        <p className="text-small">Powered by React</p>
      </div>
    </div>
  );
}