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
  Image as ImageIcon,
} from "lucide-react";

const natureScenes = [
  {
    name: "Hutan Pinus & Kabut",
    icon: "🌲",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=2560&q=85",
  },
  {
    name: "Hutan Bambu Zen",
    icon: "🎋",
    image: "https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=2560&q=85",
  },
  {
    name: "Danau Tenang & Gunung",
    icon: "🏔️",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2560&q=85",
  },
];

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
  const [currentSceneIdx, setCurrentSceneIdx] = useState<number>(0);

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
    <div className="min-h-screen text-foreground transition-colors duration-500 font-sans relative selection:bg-primary selection:text-primary-foreground">
      {/* ================= IMMERSIVE NATURE BACKGROUND (EXACT 50% OPACITY) ================= */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <img
          key={natureScenes[currentSceneIdx].image}
          src={natureScenes[currentSceneIdx].image}
          alt={natureScenes[currentSceneIdx].name}
          className="w-full h-full object-cover object-center opacity-50 transition-opacity duration-1000 transform scale-105 zen-nature-pulse"
        />
        {/* Balanced Wash Overlay ensuring 100% text readability in both Light and Dark modes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f7f4]/88 via-[#f8f7f4]/76 to-[#f8f7f4]/92 dark:from-black/75 dark:via-black/60 dark:to-black/82 transition-colors duration-500" />
      </div>

      {/* Top Utility Bar with High-Contrast Glass Effect */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-background/85 dark:bg-black/55 border-b border-border px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4 shadow-sm transition-colors duration-300">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3e664c] via-[#4d7b5d] to-[#2d4d38] border border-white/25 flex items-center justify-center text-[#f7faf8] font-black text-base shadow-md cursor-pointer transition-all duration-300 hover:scale-115 hover:rotate-6">
            CY
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-foreground leading-none flex items-center gap-1.5">
              <span>Coach Yanto</span>
              <span className="text-primary font-medium text-xs">• Mind Mastery Academy</span>
            </h1>
            <p className="text-[11px] text-muted-foreground mt-0.5 font-normal">
              Mental Detox Masterclass – Zen Glassmorphism
            </p>
          </div>
        </div>

        {/* View Switcher, Nature Scene Selector & Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Interactive Nature Scene Switcher */}
          <div className="hidden md:flex items-center p-1 rounded-xl bg-secondary/80 dark:bg-black/45 border border-border text-xs font-semibold backdrop-blur-md">
            <span className="px-2 text-muted-foreground text-[11px] flex items-center gap-1">
              <ImageIcon className="w-3.5 h-3.5" /> Alam:
            </span>
            {natureScenes.map((scene, idx) => (
              <button
                key={scene.name}
                type="button"
                onClick={() => setCurrentSceneIdx(idx)}
                className={`px-2.5 py-1 rounded-lg transition-all duration-200 cursor-pointer text-xs flex items-center gap-1 ${
                  currentSceneIdx === idx
                    ? "bg-primary text-primary-foreground font-bold shadow-sm"
                    : "text-foreground/80 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10"
                }`}
                title={scene.name}
              >
                <span>{scene.icon}</span>
                <span className="hidden lg:inline">{scene.name.split(" ")[0]}</span>
              </button>
            ))}
          </div>

          {/* Mode Toggle Button */}
          <div className="flex items-center p-1 rounded-xl bg-secondary/80 dark:bg-black/45 border border-border text-xs font-semibold backdrop-blur-md">
            <button
              type="button"
              onClick={() => setActiveTab("redesign")}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                activeTab === "redesign"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-foreground/75 hover:text-foreground"
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Website</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("demo")}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                activeTab === "demo"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-foreground/75 hover:text-foreground"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Demo</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Dark/Light Mode"
            className="p-2.5 rounded-xl border border-border bg-secondary/80 dark:bg-black/45 hover:bg-secondary text-foreground transition-all duration-300 hover:scale-110 hover:rotate-12 cursor-pointer backdrop-blur-md"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-[#c9b798]" />
            ) : (
              <Moon className="w-4 h-4 text-[#3e664c]" />
            )}
          </button>

          <a
            href="https://wa.me/628118178971?text=Halo%20Coach%20Yanto%20saya%20tertarik%20dengan%20Mental%20Detox%20Masterclass"
            target="_blank"
            rel="noreferrer"
            className="group hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-xs shadow-md border border-white/20 transition-all duration-300 hover:opacity-95"
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
          {/* Desktop Left Glass Sidebar */}
          <aside className="hidden lg:block sticky top-[76px] h-[calc(100vh-92px)] p-4 flex-shrink-0 z-40">
            <LiquidGlassExpandableSidebar
              groups={masterclassGroups}
              brand="Mind Mastery"
              brandDetail="Executive Coaching"
              brandIcon={<Brain className="w-4 h-4 text-primary" />}
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
              accent={isDark ? "#6ea380" : "#3e664c"}
              glass={{
                blur: 24,
                opacity: isDark ? 0.2 : 0.7,
                saturation: 1.35,
                edge: 0.85,
                distortion: 22,
              }}
            />
          </aside>

          {/* Main Website View with True Glassmorphic Panels */}
          <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-8 py-6">
            <MentalDetoxWebsite />
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
