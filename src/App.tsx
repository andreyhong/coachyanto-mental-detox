import { useState, useEffect, type MouseEvent } from "react";
import "@fontsource-variable/manrope";
import LiquidGlassExpandableSidebar, {
  type GlassNavItem,
  type GlassNavGroup,
} from "./components/ui/liquid-glass-expandable-sidebar";
import LiquidGlassExpandableSidebarDemo from "./components/ui/demo";
import { MentalDetoxWebsite } from "./components/MentalDetoxWebsite";
import {
  Brain,
  AlertTriangle,
  Sparkles,
  BookOpen,
  Compass,
  Award,
  Activity,
  Quote,
  CheckCircle2,
  HelpCircle,
  Sun,
  Moon,
  Layers,
  LayoutDashboard,
  MessageCircle,
} from "lucide-react";

const masterclassGroups: GlassNavGroup[] = [
  {
    label: "Masterclass Core",
    items: [
      { id: "overview", href: "#overview", label: "Ringkasan Program", icon: <Brain /> },
      { id: "overthinking-trap", href: "#overthinking-trap", label: "The Overthinking Trap", icon: <AlertTriangle /> },
      { id: "framework", href: "#framework", label: "3-Pillar Framework", icon: <Sparkles /> },
      {
        id: "curriculum",
        href: "#curriculum",
        label: "Silabus 4 Modul",
        icon: <BookOpen />,
        children: [
          { id: "mod1", href: "#curriculum", label: "Modul 1: Brain & DMN", icon: <Compass /> },
          { id: "mod2", href: "#curriculum", label: "Modul 2: NLP Pattern Interrupt", icon: <Compass /> },
          { id: "mod3", href: "#curriculum", label: "Modul 3: Decision Velocity", icon: <Compass /> },
          { id: "mod4", href: "#curriculum", label: "Modul 4: 15-Min Daily Ritual", icon: <Compass /> },
        ],
      },
      { id: "coach", href: "#coach", label: "Profil Coach Yanto", icon: <Award /> },
    ],
  },
  {
    label: "Aksi & Fasilitas",
    items: [
      { id: "assessment", href: "#assessment", label: "Kuis Mental Noise", icon: <Activity /> },
      { id: "testimonials", href: "#testimonials", label: "Kisah Alumni", icon: <Quote /> },
      { id: "pricing", href: "#pricing", label: "Daftar Batch 12", icon: <CheckCircle2 />, badge: "30 Slot" },
      { id: "faq", href: "#faq", label: "Tanya Jawab (FAQ)", icon: <HelpCircle /> },
    ],
  },
];

export function App() {
  const [activeTab, setActiveTab] = useState<"redesign" | "demo">("redesign");
  const [isDark, setIsDark] = useState<boolean>(true);
  const [activeId, setActiveId] = useState<string>("overview");

  // Sync theme with document class
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      root.dataset.theme = "dark";
    } else {
      root.classList.remove("dark");
      root.dataset.theme = "light";
    }
  }, [isDark]);

  const handleNavigate = (item: GlassNavItem, event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setActiveId(item.id);

    if (item.href.startsWith("#")) {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", item.href);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 font-sans relative selection:bg-[#3e664c] selection:text-[#f7faf8]">
      {/* Top Utility Bar */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-background/80 border-b border-[#2b3c31]/60 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3e664c] via-[#4d7b5d] to-[#2d4d38] border border-[#6b9979]/40 flex items-center justify-center text-[#f7faf8] font-black text-base shadow-md shadow-[#1e3325]/30 cursor-pointer transition-all duration-300 hover:scale-115 hover:rotate-6 hover:shadow-lg">
            CY
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-foreground leading-none flex items-center gap-1.5">
              <span>Coach Yanto</span>
              <span className="text-[#8fb49c] font-normal text-xs">• Mind Mastery Academy</span>
            </h1>
            <p className="text-[11px] text-muted-foreground mt-0.5 font-normal">
              Mental Detox Masterclass – Zen Redesign
            </p>
          </div>
        </div>

        {/* View Switcher & Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center p-1 rounded-xl bg-gradient-to-r from-[#1b2620]/90 to-[#141d18]/90 border border-[#2e4034]/70 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setActiveTab("redesign")}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                activeTab === "redesign"
                  ? "bg-gradient-to-r from-[#3e664c] to-[#4d7b5d] text-[#f7faf8] shadow-sm border border-[#6ea07d]/40"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110" />
              <span>Redesign Website</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("demo")}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                activeTab === "demo"
                  ? "bg-gradient-to-r from-[#3e664c] to-[#4d7b5d] text-[#f7faf8] shadow-sm border border-[#6ea07d]/40"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Layers className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110" />
              <span>Component Demo</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Dark/Light Mode"
            className="p-2.5 rounded-xl border border-[#2e4034]/70 bg-gradient-to-br from-[#1b2620] to-[#141d18] hover:border-[#4d6f58] text-foreground transition-all duration-300 hover:scale-110 hover:rotate-12 cursor-pointer"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-[#baa682]" />
            ) : (
              <Moon className="w-4 h-4 text-[#3e664c]" />
            )}
          </button>

          <a
            href="https://wa.me/628118178971?text=Halo%20Coach%20Yanto%20saya%20tertarik%20dengan%20Mental%20Detox%20Masterclass"
            target="_blank"
            rel="noreferrer"
            className="group hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#3e664c] via-[#4d7b5d] to-[#3a5d46] hover:from-[#497558] hover:via-[#598c6a] hover:to-[#426a50] text-[#f7faf8] font-semibold text-xs shadow-md shadow-[#1e3325]/30 border border-[#6ea07d]/35 transition-all duration-300"
          >
            <MessageCircle className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12" />
            <span>Chat WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      {activeTab === "demo" ? (
        <div className="w-full">
          <LiquidGlassExpandableSidebarDemo />
        </div>
      ) : (
        <div className="relative min-h-[calc(100vh-65px)] flex flex-col lg:flex-row items-start justify-start">
          {/* Zen Ambient Background Imagery with gentle mist overlay */}
          <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1920&q=80"
              alt="Zen Bamboo Mist Visual"
              className="w-full h-full object-cover opacity-10 filter blur-md dark:opacity-15 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/92 via-background/96 to-background" />
          </div>

          {/* Desktop Left Glass Sidebar */}
          <aside className="hidden lg:block sticky top-[76px] h-[calc(100vh-92px)] p-4 flex-shrink-0 z-40">
            <LiquidGlassExpandableSidebar
              groups={masterclassGroups}
              brand="Mind Mastery"
              brandDetail="Executive Coaching"
              brandIcon={<Brain className="w-4 h-4 text-[#a3c9b0]" />}
              account={{
                id: "coach",
                name: "Coach Yanto",
                detail: "NLP Master Practitioner",
                initials: "CY",
                href: "#coach",
              }}
              activeId={activeId}
              onNavigate={handleNavigate}
              defaultExpanded={true}
              theme={isDark ? "dark" : "light"}
              accent="#6c9a7d"
              glass={{
                blur: 24,
                opacity: 0.15,
                saturation: 1.25,
                edge: 0.85,
                distortion: 22,
              }}
            />
          </aside>

          {/* Main Website View */}
          <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-8 py-6">
            <MentalDetoxWebsite />
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
