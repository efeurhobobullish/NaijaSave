import ModeToggle from "@/components/ui/mode-toggle";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="h-[100dvh] w-full flex flex-col items-center justify-center gap-8 px-6 text-center"
      style={{ backgroundColor: "var(--color-background)", color: "var(--color-main)" }}
    >
      {/* BRAND */}
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold" style={{ color: "var(--color-main)" }}>
          Fintech App
        </h1>
        <p className="text-small">Fast · Secure · Modern</p>
      </div>

      {/* CTA */}
      <button
        className="btn-primary px-7 py-3 flex items-center gap-2 text-[15px]"
      >
        Get Started
        <ArrowRight size={18} />
      </button>

      {/* FOOTER / MODE TOGGLE */}
      <div className="absolute bottom-12 flex flex-col items-center gap-4">
        <ModeToggle />
        <p className="text-small">Powered by React & TypeScript</p>
      </div>
    </div>
  );
}