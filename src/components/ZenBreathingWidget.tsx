import { useState, useEffect } from "react";
import { Wind, Play, Pause, RotateCcw } from "lucide-react";

export function ZenBreathingWidget() {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<"Tarik Napas (4s)" | "Tahan Napas (7s)" | "Hembuskan Perlahan (8s)">("Tarik Napas (4s)");
  const [secondsLeft, setSecondsLeft] = useState(4);
  const [cycleCount, setCycleCount] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isActive) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev > 1) return prev - 1;

          // Transition between 4-7-8 phases
          if (phase === "Tarik Napas (4s)") {
            setPhase("Tahan Napas (7s)");
            return 7;
          } else if (phase === "Tahan Napas (7s)") {
            setPhase("Hembuskan Perlahan (8s)");
            return 8;
          } else {
            setPhase("Tarik Napas (4s)");
            setCycleCount((c) => c + 1);
            return 4;
          }
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isActive, phase]);

  const handleReset = () => {
    setIsActive(false);
    setPhase("Tarik Napas (4s)");
    setSecondsLeft(4);
    setCycleCount(0);
  };

  const getCircleScale = () => {
    if (!isActive) return "scale-100";
    if (phase.startsWith("Tarik")) return "scale-125 duration-[4000ms]";
    if (phase.startsWith("Tahan")) return "scale-125 duration-1000";
    return "scale-90 duration-[8000ms]";
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8 p-6 sm:p-8 rounded-3xl zen-glass zen-glass-shimmer relative overflow-hidden group">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 dark:bg-black/30 border border-primary/20 dark:border-white/20 text-xs font-semibold text-primary dark:text-[#a3c9b0]">
            <Wind className="w-3.5 h-3.5" />
            <span>Interactive Clarity Tool</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Latihan Relaksasi Saraf 4-7-8
          </h3>
          <p className="text-xs sm:text-sm text-foreground/85 max-w-md font-normal">
            Teknik pernapasan parasimpatis untuk menurunkan denyut jantung dan memutus sinyal panik overthinking dalam 60 detik.
          </p>
        </div>

        {/* Breathing Orb Visualization */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative flex items-center justify-center w-36 h-36">
            {/* Outer Ripple Rings */}
            <div
              className={`absolute inset-0 rounded-full border border-primary/30 transition-transform ease-in-out ${getCircleScale()} ${
                isActive ? "opacity-100" : "opacity-40"
              }`}
            />
            <div
              className={`absolute inset-3 rounded-full border border-dashed border-accent/40 transition-transform ease-in-out ${getCircleScale()} ${
                isActive ? "opacity-100 animate-spin [animation-duration:20s]" : "opacity-30"
              }`}
            />

            {/* Core Orb */}
            <div
              className={`w-24 h-24 rounded-full zen-glass flex flex-col items-center justify-center transition-all ease-in-out shadow-lg ${getCircleScale()} ${
                isActive ? "border-primary shadow-[0_0_25px_rgba(110,163,128,0.35)]" : ""
              }`}
            >
              <span className="text-2xl font-black text-foreground">{secondsLeft}s</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">
                {isActive ? (phase.startsWith("Tarik") ? "Inhale" : phase.startsWith("Tahan") ? "Hold" : "Exhale") : "Ready"}
              </span>
            </div>
          </div>

          <div className="text-xs font-semibold text-center text-primary dark:text-[#a3c9b0]">
            {phase} • Siklus: {cycleCount}
          </div>

          {/* Interactive Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsActive(!isActive)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#3e664c] to-[#4d7b5d] hover:from-[#497558] hover:to-[#598c6a] text-[#f7faf8] text-xs font-bold shadow-md shadow-[#1e3325]/40 border border-white/20 flex items-center gap-1.5 transition-all duration-200 cursor-pointer hover:scale-105"
            >
              {isActive ? (
                <>
                  <Pause className="w-3.5 h-3.5" /> Jeda
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" /> Mulai Napas Zen
                </>
              )}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="p-2 rounded-xl zen-glass hover:bg-black/10 dark:hover:bg-white/10 text-foreground transition-all duration-200 cursor-pointer hover:scale-105"
              title="Reset"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
