import { useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Award,
  BookOpen,
  MessageCircle,
  Clock,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Star,
  Quote,
  Check,
  Video,
  FileCheck,
  Zap,
  Brain,
  Compass,
  Layers,
} from "lucide-react";
import { masterclassData } from "../data/masterclassData";
import { MentalNoiseAssessment } from "./MentalNoiseAssessment";
import { ZenBreathingWidget } from "./ZenBreathingWidget";

export function MentalDetoxWebsite() {
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleModule = (idx: number) => {
    setOpenModule(openModule === idx ? null : idx);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="w-full text-foreground pb-24 space-y-20">
      {/* ================= HERO SECTION (HIGH CONTRAST GLASSMORPHISM) ================= */}
      <section id="overview" className="relative pt-4 sm:pt-8 scroll-mt-20">
        <div className="relative mx-auto max-w-5xl rounded-3xl p-8 sm:p-14 zen-glass zen-glass-shimmer shadow-2xl overflow-hidden">
          {/* Subtle Organic Nature Light Ray */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#84a98c]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#d4a373]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            {/* Zen Glass Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-black/40 border border-primary/20 dark:border-white/20 text-primary dark:text-[#a3c9b0] text-xs sm:text-sm font-semibold tracking-wide shadow-sm group cursor-default backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-accent transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125" />
              <span>{masterclassData.hero.badge}</span>
            </div>

            <div className="space-y-4 max-w-3xl">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.18] text-foreground">
                Hentikan Overthinking, Raih{" "}
                <span className="bg-gradient-to-r from-[#254731] via-[#162f1f] to-[#523d24] dark:from-[#a3c9b0] dark:via-[#ffffff] dark:to-[#d4b27d] bg-clip-text text-transparent">
                  Mental Clarity
                </span>{" "}
                di Bawah Tekanan
              </h1>
              <p className="text-base sm:text-xl text-foreground/90 dark:text-foreground/85 leading-relaxed font-normal">
                {masterclassData.hero.subtitle}
              </p>
            </div>

            {/* Zen Glass CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={masterclassData.hero.contactWhatsapp}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#3e664c] via-[#4d7b5d] to-[#3a5d46] hover:from-[#497558] hover:via-[#598c6a] hover:to-[#426a50] text-[#f7faf8] font-bold text-base shadow-xl shadow-black/25 border border-white/20 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 text-center"
              >
                <div className="p-1 rounded-lg bg-black/20 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12">
                  <MessageCircle className="w-4 h-4 text-[#e0efe3]" />
                </div>
                <span>Daftar Batch 12 Sekarang</span>
              </a>
              <a
                href="#assessment"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-secondary/80 dark:bg-black/30 hover:bg-secondary border border-border text-foreground font-semibold text-base transition-all duration-300 text-center backdrop-blur-md hover:-translate-y-0.5 shadow-sm"
              >
                <span>Cek Skor Mental Noise Anda</span>
                <ArrowRight className="w-4 h-4 text-primary transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </div>

            {/* Social Proof Metric Grid in Glass Surface */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border/80 dark:border-white/15">
              {masterclassData.hero.stats.map((stat, i) => (
                <div key={i} className="p-3 group cursor-default">
                  <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#173021] to-[#33563f] dark:from-[#ffffff] dark:to-[#c9dacf] bg-clip-text text-transparent tracking-tight transition-transform duration-300 group-hover:scale-105 inline-block">
                    {stat.value}
                  </div>
                  <div className="text-xs text-foreground/80 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE ZEN BREATHING TOOL ================= */}
      <ZenBreathingWidget />

      {/* ================= THE OVERTHINKING TRAP (GLASSMORPHIC CARDS) ================= */}
      <section id="overthinking-trap" className="max-w-5xl mx-auto scroll-mt-20 px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-destructive/10 dark:bg-black/40 text-destructive dark:text-[#e0988a] border border-destructive/20 text-xs font-semibold group cursor-default backdrop-blur-md">
            <AlertTriangle className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
            <span>The Silent Career Killer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Apakah Pikiran Anda Mengalami 4 Gejala Ini?
          </h2>
          <p className="text-sm sm:text-base text-foreground/85">
            Banyak leader dan profesional mengira overthinking adalah tanda kehati-hatian. Faktanya, ini adalah kebocoran energi kognitif yang menggerus performa dan kedamaian batin Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {masterclassData.symptoms.map((symptom) => (
            <div
              key={symptom.id}
              className="zen-glass zen-glass-shimmer p-6 rounded-2xl transition-all duration-300 space-y-2 group cursor-default"
            >
              {/* Interactive Number Pill in Glass */}
              <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-white/10 border border-primary/20 dark:border-white/20 text-primary dark:text-[#a3c7ad] flex items-center justify-center font-black text-xs mb-3 transition-all duration-300 group-hover:scale-120 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:shadow-md">
                0{symptom.id}
              </div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                {symptom.title}
              </h3>
              <p className="text-sm text-foreground/85 leading-relaxed font-normal">
                {symptom.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Contrast Comparison Glass Box */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 p-6 sm:p-8 rounded-3xl zen-glass border-border/80 dark:border-white/15">
          <div className="space-y-3 border-b md:border-b-0 md:border-r border-border/80 dark:border-white/15 pb-4 md:pb-0 md:pr-6">
            <span className="text-xs font-bold text-destructive dark:text-[#e0988a] tracking-wider uppercase flex items-center gap-1.5">
              <span>✕</span> Tanpa Mental Detox
            </span>
            <ul className="text-xs sm:text-sm space-y-2 text-foreground/85">
              <li className="flex items-start gap-2">
                <span className="text-destructive dark:text-[#e0988a] font-bold">✕</span> Kepala terasa ramai bahkan saat beristirahat bersama keluarga
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive dark:text-[#e0988a] font-bold">✕</span> Ragu-ragu menetapkan langkah bisnis dan karier krusial
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive dark:text-[#e0988a] font-bold">✕</span> Emosi gampang terpancing saat situasi tidak sesuai rencana
              </li>
            </ul>
          </div>
          <div className="space-y-3 pt-4 md:pt-0 md:pl-6">
            <span className="text-xs font-bold text-primary dark:text-[#a3c9b0] tracking-wider uppercase flex items-center gap-1.5">
              <span>✓</span> Setelah Mental Detox Framework
            </span>
            <ul className="text-xs sm:text-sm space-y-2 text-foreground font-medium">
              <li className="flex items-start gap-2 group cursor-default">
                <div className="p-0.5 rounded-full bg-primary/15 text-primary mt-0.5 transition-transform duration-200 group-hover:scale-125">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Mampu 'switch-off' pikiran seketika saat jam kerja berakhir</span>
              </li>
              <li className="flex items-start gap-2 group cursor-default">
                <div className="p-0.5 rounded-full bg-primary/15 text-primary mt-0.5 transition-transform duration-200 group-hover:scale-125">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Kecepatan dan ketepatan keputusan (Decision Velocity) meningkat</span>
              </li>
              <li className="flex items-start gap-2 group cursor-default">
                <div className="p-0.5 rounded-full bg-primary/15 text-primary mt-0.5 transition-transform duration-200 group-hover:scale-125">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Ketenangan batin (Calm Confidence) yang menular positif ke seluruh tim</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE ASSESSMENT ================= */}
      <MentalNoiseAssessment />

      {/* ================= 3-PILLAR FRAMEWORK (FLOATING GLASS CARDS) ================= */}
      <section id="framework" className="max-w-5xl mx-auto scroll-mt-20 px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 dark:bg-black/40 text-primary dark:text-[#a3c9b0] border border-primary/20 dark:border-white/20 text-xs font-semibold group cursor-default backdrop-blur-md">
            <Zap className="w-3.5 h-3.5 text-accent transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
            <span>The Proprietary Method</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            The 3-Pillar Mental Detox Framework
          </h2>
          <p className="text-sm sm:text-base text-foreground/85">
            Dikembangkan oleh Coach Yanto berbasis integrasi neurosains terapan dan teknik Neuro-Linguistic Programming (NLP) presisi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {masterclassData.pillars.map((pillar, idx) => (
            <div
              key={pillar.step}
              className="zen-glass zen-glass-shimmer group relative p-7 sm:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Floating Glass Icon Vessel */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 dark:bg-white/10 border border-primary/20 dark:border-white/20 text-primary dark:text-[#a1cbb0] flex items-center justify-center transition-all duration-300 group-hover:scale-120 group-hover:-translate-y-2 group-hover:rotate-6 group-hover:shadow-lg cursor-pointer">
                  {idx === 0 && <Brain className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />}
                  {idx === 1 && <Layers className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />}
                  {idx === 2 && <Compass className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-foreground/30 dark:text-white/25 group-hover:text-primary transition-colors duration-200">
                    {pillar.step}
                  </span>
                  <div className="inline-block px-3 py-1 rounded-full bg-secondary/80 dark:bg-black/40 text-foreground dark:text-[#cde3d5] border border-border/80 dark:border-white/15 font-semibold text-xs backdrop-blur-sm">
                    {pillar.tagline}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-foreground/85 leading-relaxed pt-1 font-normal">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CURRICULUM MODULES (GLASS ACCORDION) ================= */}
      <section id="curriculum" className="max-w-5xl mx-auto scroll-mt-20 px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 dark:bg-black/40 text-primary dark:text-[#a3c9b0] border border-primary/20 dark:border-white/20 text-xs font-semibold group cursor-default backdrop-blur-md">
            <BookOpen className="w-3.5 h-3.5 text-accent transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
            <span>Silabus & Kurikulum Komprehensif</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            4 Modul Utama Masterclass
          </h2>
          <p className="text-sm sm:text-base text-foreground/85">
            Bukan sekadar teori motivasi, melainkan workshop interaktif yang membedah teknik neurologis langkah demi langkah.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {masterclassData.modules.map((mod, idx) => {
            const isOpen = openModule === idx;
            return (
              <div
                key={mod.number}
                className="rounded-2xl zen-glass overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleModule(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-11 h-11 rounded-xl bg-primary/10 dark:bg-white/10 border border-primary/20 dark:border-white/20 text-primary dark:text-[#a3c9b0] font-bold flex items-center justify-center text-sm flex-shrink-0 transition-all duration-300 group-hover:scale-115 group-hover:-translate-y-0.5 group-hover:rotate-3">
                      M{mod.number}
                    </span>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors">
                        {mod.title}
                      </h4>
                      <span className="inline-flex items-center gap-1.5 text-xs text-foreground/75 mt-0.5">
                        <Clock className="w-3.5 h-3.5 text-accent" /> {mod.duration}
                      </span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-secondary/80 dark:bg-black/40 text-foreground dark:text-[#a3c7ad] border border-border/80 dark:border-white/20 transition-all duration-200 group-hover:scale-115">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 sm:p-6 pt-0 border-t border-border/80 dark:border-white/15 space-y-4 text-sm bg-black/5 dark:bg-black/20 animate-in fade-in duration-200">
                    <p className="text-foreground/90 leading-relaxed font-normal pt-3">{mod.summary}</p>
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-primary dark:text-[#a3c9b0] uppercase tracking-wider block">
                        Keluaran Pembelajaran (Key Takeaways):
                      </span>
                      <ul className="space-y-2">
                        {mod.takeaways.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 text-foreground/95 text-xs sm:text-sm group cursor-default">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-125" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= COACH YANTO PROFILE (GLASSMORPHIC SHOWCASE) ================= */}
      <section id="coach" className="max-w-5xl mx-auto scroll-mt-20 px-4">
        <div className="p-8 sm:p-12 rounded-3xl zen-glass zen-glass-shimmer shadow-2xl flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          <div className="relative flex-shrink-0 group">
            <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-3xl overflow-hidden border-2 border-border/80 dark:border-white/30 shadow-2xl relative">
              <img
                src={masterclassData.coach.image}
                alt="Coach Yanto"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#3e664c] to-[#4d7b5d] text-[#f7faf8] text-xs font-bold shadow-xl border border-white/30 flex items-center gap-1.5 transition-transform duration-300 group-hover:scale-110 cursor-pointer">
              <Award className="w-4 h-4 text-[#d4b27d] transition-transform duration-300 group-hover:rotate-12" /> NLP Master
            </div>
          </div>

          <div className="space-y-4 text-left flex-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/80 dark:bg-black/30 border border-border/80 dark:border-white/20 text-primary dark:text-[#a3c9b0] text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              Lead Master Facilitator
            </div>
            <h3 className="text-3xl font-extrabold text-foreground">{masterclassData.coach.name}</h3>
            <p className="text-sm font-semibold text-primary">{masterclassData.coach.title}</p>
            <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed font-normal">
              {masterclassData.coach.bio}
            </p>

            <div className="space-y-2 pt-2">
              {masterclassData.coach.credentials.map((cred, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/95 group cursor-default">
                  <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0 transition-transform duration-200 group-hover:scale-125" />
                  <span>{cred}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= VIP BONUSES (GLASS TILES) ================= */}
      <section id="bonuses" className="max-w-5xl mx-auto scroll-mt-20 px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 dark:bg-black/40 text-primary dark:text-[#a3c9b0] border border-primary/20 dark:border-white/20 text-xs font-semibold group cursor-default backdrop-blur-md">
            <FileCheck className="w-3.5 h-3.5 text-accent transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
            <span>Bonus Suite Eksklusif</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Fasilitas Tambahan Senilai Rp 1.850.000
          </h2>
          <p className="text-sm sm:text-base text-foreground/85">
            Seluruh peserta terdaftar otomatis mendapatkan perlengkapan pendukung penuh tanpa biaya tambahan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {masterclassData.bonuses.map((bonus, idx) => (
            <div
              key={idx}
              className="zen-glass zen-glass-shimmer group p-6 rounded-2xl transition-all duration-300 flex items-start gap-4 cursor-default"
            >
              {/* Interactive Bonus Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-white/10 border border-primary/20 dark:border-white/20 text-primary dark:text-[#a3c9b0] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:shadow-md cursor-pointer">
                {idx === 0 && <BookOpen className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />}
                {idx === 1 && <Video className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />}
                {idx === 2 && <Award className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />}
                {idx === 3 && <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />}
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">
                    {bonus.title}
                  </h4>
                </div>
                <span className="text-xs font-semibold text-primary block">{bonus.value}</span>
                <p className="text-xs text-foreground/80 leading-relaxed font-normal">{bonus.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ALUMNI TESTIMONIALS (FROSTED GLASS PANELS) ================= */}
      <section id="testimonials" className="max-w-5xl mx-auto scroll-mt-20 px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 dark:bg-black/40 text-primary dark:text-[#a3c9b0] border border-primary/20 dark:border-white/20 text-xs font-semibold group cursor-default backdrop-blur-md">
            <Quote className="w-3.5 h-3.5 text-accent transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
            <span>Alumni Transformation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Apa Kata Mereka yang Telah Meraih Mental Clarity?
          </h2>
          <p className="text-sm sm:text-base text-foreground/85">
            Kisah nyata dari para leader dan profesional yang berhasil mengatasi overthinking kronis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {masterclassData.testimonials.map((testi, idx) => (
            <div
              key={idx}
              className="zen-glass zen-glass-shimmer group p-6 rounded-3xl transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: testi.rating }).map((_, r) => (
                    <Star key={r} className="w-4 h-4 fill-accent transition-transform duration-200 group-hover:scale-115" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-foreground/90 italic leading-relaxed font-normal">
                  "{testi.content}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-border/80 dark:border-white/15">
                <img
                  src={testi.image}
                  alt={testi.name}
                  className="w-10 h-10 rounded-full object-cover border border-border/80 dark:border-white/30 transition-transform duration-300 group-hover:scale-110 shadow"
                />
                <div>
                  <h5 className="font-bold text-xs sm:text-sm text-foreground">{testi.name}</h5>
                  <p className="text-[11px] text-foreground/75">{testi.role} • {testi.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRICING & REGISTRATION (MASTERPIECE GLASS BOX) ================= */}
      <section id="pricing" className="max-w-4xl mx-auto scroll-mt-20 px-4">
        <div className="relative rounded-3xl p-8 sm:p-14 zen-glass zen-glass-shimmer shadow-2xl overflow-hidden border-border/90 dark:border-white/25">
          <div className="absolute top-0 right-0 px-6 py-2 bg-gradient-to-r from-[#3e664c] to-[#4d7b5d] text-[#f7faf8] font-black text-xs uppercase tracking-widest rounded-bl-2xl border-l border-b border-white/20 shadow-md">
            Early Bird Batch 12
          </div>

          <div className="space-y-8 text-center max-w-xl mx-auto">
            <div className="space-y-2">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                Investasi Terbaik Dimulai Dari Cara Anda Merawat Pikiran
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
                Mental Detox Masterclass
              </h2>
              <p className="text-xs sm:text-sm text-foreground/85 font-normal">
                Satu sesi pelatihan transformatif yang mengubah cara kerja pikiran Anda selamanya.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/80 dark:bg-black/40 border border-border/80 dark:border-white/20 space-y-2 backdrop-blur-md shadow-inner">
              <div className="text-xs text-foreground/60 line-through">Harga Normal: Rp 1.500.000</div>
              <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#173021] to-[#2d523a] dark:from-[#ffffff] dark:to-[#a3c9b0] bg-clip-text text-transparent">
                Penawaran Khusus Batch 12
              </div>
              <p className="text-xs text-foreground/80 font-normal">
                *Slot dibatasi hanya untuk 30 peserta agar sesi interaksi dan tanya jawab berlangsung optimal.
              </p>
            </div>

            <div className="space-y-3 text-left max-w-md mx-auto">
              {[
                "Live Zoom Masterclass bersama Coach Yanto",
                "Akses Rekaman Penuh Seumur Hidup",
                "E-Workbook & Practical Toolkits Harian",
                "Official E-Certificate Mind Mastery Academy",
                "100% Satisfaction Guarantee",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm group cursor-default">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 transition-transform duration-200 group-hover:scale-125" />
                  <span className="text-foreground/95">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 space-y-3">
              <a
                href={masterclassData.hero.contactWhatsapp}
                target="_blank"
                rel="noreferrer"
                className="group w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-[#3e664c] via-[#528062] to-[#3a5d46] hover:from-[#477356] hover:via-[#5e9270] hover:to-[#436b51] text-[#f7faf8] font-bold text-base shadow-2xl shadow-black/35 border border-white/25 transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-1 active:translate-y-0"
              >
                <div className="p-1 rounded-lg bg-black/20 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12">
                  <MessageCircle className="w-5 h-5 text-[#e0efe3]" />
                </div>
                <span>Daftar via WhatsApp Admin Resmi</span>
              </a>
              <span className="text-[11px] text-foreground/75 block font-normal">
                Konfirmasi instan ke WhatsApp Mind Mastery Academy (+62 811-8178-971)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION (GLASS TILES) ================= */}
      <section id="faq" className="max-w-4xl mx-auto scroll-mt-20 px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="text-sm text-foreground/85 font-normal">
            Jawaban lengkap seputar mekanisme kelas, jadwal, dan fasilitas masterclass.
          </p>
        </div>

        <div className="space-y-3">
          {masterclassData.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl zen-glass overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-foreground hover:bg-black/5 dark:hover:bg-white/5 group cursor-pointer"
                >
                  <span className="group-hover:text-primary transition-colors">{faq.question}</span>
                  <div className="p-2 rounded-xl bg-secondary/80 dark:bg-black/40 text-foreground dark:text-[#a3c7ad] border border-border/80 dark:border-white/20 flex-shrink-0 transition-all duration-200 group-hover:scale-115">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-foreground/90 leading-relaxed border-t border-border/80 dark:border-white/15 bg-black/5 dark:bg-black/20 animate-in fade-in duration-200 font-normal">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="max-w-5xl mx-auto px-4 pt-12 border-t border-border/80 dark:border-white/15 text-center text-xs text-foreground/75 space-y-4 font-normal">
        <div className="flex flex-wrap items-center justify-center gap-6 text-foreground font-medium">
          <a href="#overview" className="hover:text-primary transition-colors">Overview</a>
          <a href="#framework" className="hover:text-primary transition-colors">Framework</a>
          <a href="#curriculum" className="hover:text-primary transition-colors">Kurikulum</a>
          <a href="#coach" className="hover:text-primary transition-colors">Coach Yanto</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Investasi</a>
          <a href={masterclassData.hero.contactWhatsapp} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            WhatsApp Admin
          </a>
        </div>
        <p>
          © {new Date().getFullYear()} Mind Mastery Academy by Coach Yanto. All rights reserved.
        </p>
        <p className="text-[11px] opacity-75">
          Program pelatihan ini berfokus pada teknik Neuro-Linguistic Programming (NLP) dan self-mastery untuk pengembangan profesional & mental clarity.
        </p>
      </footer>
    </div>
  );
}
