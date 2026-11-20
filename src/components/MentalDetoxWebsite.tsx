import { useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Award,
  BookOpen,
  Calendar,
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
} from "lucide-react";
import { masterclassData } from "../data/masterclassData";
import { MentalNoiseAssessment } from "./MentalNoiseAssessment";

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
    <div className="w-full text-foreground pb-24 space-y-24">
      {/* ================= HERO SECTION ================= */}
      <section id="overview" className="relative pt-6 sm:pt-12 scroll-mt-20">
        <div className="relative mx-auto max-w-5xl rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-card/90 via-card/60 to-card/40 border border-border/80 backdrop-blur-2xl shadow-2xl overflow-hidden">
          {/* Ambient background glows */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4" />
              <span>{masterclassData.hero.badge}</span>
            </div>

            <div className="space-y-4 max-w-3xl">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                Hentikan Overthinking, Raih{" "}
                <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
                  Mental Clarity
                </span>{" "}
                di Bawah Tekanan
              </h1>
              <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
                {masterclassData.hero.subtitle}
              </p>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={masterclassData.hero.contactWhatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-base hover:opacity-95 shadow-lg shadow-primary/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <MessageCircle className="w-5 h-5" />
                Daftar Batch 12 Sekarang
              </a>
              <a
                href="#assessment"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-secondary/80 hover:bg-secondary border border-border text-foreground font-semibold text-base transition-all text-center"
              >
                Cek Skor Mental Noise Anda
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Social Proof Metric Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border/60">
              {masterclassData.hero.stats.map((stat, i) => (
                <div key={i} className="p-3">
                  <div className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE OVERTHINKING TRAP ================= */}
      <section id="overthinking-trap" className="max-w-5xl mx-auto scroll-mt-20 px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 text-rose-500 text-xs font-semibold">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>The Silent Career Killer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Apakah Pikiran Anda Mengalami 4 Gejala Ini?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Banyak leader dan profesional mengira overthinking adalah tanda kehati-hatian. Faktanya, ini adalah kebocoran energi kognitif yang menggerus performa dan kesehatan mental Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {masterclassData.symptoms.map((symptom) => (
            <div
              key={symptom.id}
              className="p-6 rounded-2xl bg-card/60 backdrop-blur-md border border-border hover:border-primary/40 transition-all space-y-2 group"
            >
              <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-xs mb-3 group-hover:scale-110 transition-transform">
                0{symptom.id}
              </div>
              <h3 className="text-lg font-bold text-foreground">{symptom.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{symptom.desc}</p>
            </div>
          ))}
        </div>

        {/* Contrast Comparison */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 p-6 sm:p-8 rounded-3xl bg-secondary/30 border border-border">
          <div className="space-y-3 border-b md:border-b-0 md:border-r border-border pb-4 md:pb-0 md:pr-6">
            <span className="text-xs font-bold text-rose-500 tracking-wider uppercase">Tanpa Mental Detox</span>
            <ul className="text-xs sm:text-sm space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">✕</span> Kepala terasa ramai bahkan saat liburan bersama keluarga
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">✕</span> Ragu-ragu menetapkan langkah bisnis krusial
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">✕</span> Emosi gampang terpancing saat situasi tidak sesuai rencana
              </li>
            </ul>
          </div>
          <div className="space-y-3 pt-4 md:pt-0 md:pl-6">
            <span className="text-xs font-bold text-emerald-500 tracking-wider uppercase">Setelah Mental Detox Framework</span>
            <ul className="text-xs sm:text-sm space-y-2 text-foreground font-medium">
              <li className="flex items-start gap-2">
                <Check className="text-emerald-500 w-4 h-4 flex-shrink-0 mt-0.5" /> Mampu 'switch-off' pikiran seketika saat jam kerja berakhir
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-emerald-500 w-4 h-4 flex-shrink-0 mt-0.5" /> Kecepatan dan ketepatan keputusan (Decision Velocity) meningkat
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-emerald-500 w-4 h-4 flex-shrink-0 mt-0.5" /> Ketenangan batin (Calm Confidence) yang menular positif ke seluruh tim
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE ASSESSMENT ================= */}
      <MentalNoiseAssessment />

      {/* ================= 3-PILLAR FRAMEWORK ================= */}
      <section id="framework" className="max-w-5xl mx-auto scroll-mt-20 px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>The Proprietary Method</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            The 3-Pillar Mental Detox Framework
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Dikembangkan oleh Coach Yanto berbasis integrasi neurosains terapan dan teknik Neuro-Linguistic Programming (NLP) presisi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {masterclassData.pillars.map((pillar) => (
            <div
              key={pillar.step}
              className="relative p-7 rounded-3xl bg-card/70 backdrop-blur-xl border border-border hover:border-primary/50 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-4">
                <div className="text-4xl font-black text-primary/30 group-hover:text-primary transition-colors">
                  {pillar.step}
                </div>
                <h3 className="text-xl font-bold text-foreground leading-snug">{pillar.title}</h3>
                <div className="inline-block px-2.5 py-1 rounded-md bg-secondary text-primary font-semibold text-xs">
                  {pillar.tagline}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pt-2">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CURRICULUM MODULES ================= */}
      <section id="curriculum" className="max-w-5xl mx-auto scroll-mt-20 px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Silabus & Kurikulum Komprehensif</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            4 Modul Utama Masterclass
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Bukan sekadar ceramah motivasi, melainkan workshop interaktif yang membedah teknik neurologis langkah demi langkah.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {masterclassData.modules.map((mod, idx) => {
            const isOpen = openModule === idx;
            return (
              <div
                key={mod.number}
                className="rounded-2xl border border-border bg-card/60 backdrop-blur-md overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleModule(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-secondary/40 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary font-bold flex items-center justify-center text-sm flex-shrink-0">
                      M{mod.number}
                    </span>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg text-foreground">{mod.title}</h4>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                        <Clock className="w-3.5 h-3.5" /> {mod.duration}
                      </span>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-secondary text-foreground">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 sm:p-6 pt-0 border-t border-border/40 space-y-4 text-sm bg-secondary/15 animate-in fade-in duration-200">
                    <p className="text-muted-foreground leading-relaxed">{mod.summary}</p>
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                        Keluaran Pembelajaran (Key Takeaways):
                      </span>
                      <ul className="space-y-1.5">
                        {mod.takeaways.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-foreground/90 text-xs sm:text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
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

      {/* ================= COACH YANTO PROFILE ================= */}
      <section id="coach" className="max-w-5xl mx-auto scroll-mt-20 px-4">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-card/90 via-card/50 to-card/70 border border-border backdrop-blur-xl shadow-xl flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          <div className="relative flex-shrink-0">
            <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl relative">
              <img
                src={masterclassData.coach.image}
                alt="Coach Yanto"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-lg flex items-center gap-1.5">
              <Award className="w-4 h-4" /> NLP Master
            </div>
          </div>

          <div className="space-y-4 text-left flex-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-primary text-xs font-bold uppercase tracking-wider">
              Lead Master Facilitator
            </div>
            <h3 className="text-3xl font-extrabold text-foreground">{masterclassData.coach.name}</h3>
            <p className="text-sm font-semibold text-primary">{masterclassData.coach.title}</p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {masterclassData.coach.bio}
            </p>

            <div className="space-y-2 pt-2">
              {masterclassData.coach.credentials.map((cred, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/90">
                  <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{cred}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= VIP BONUSES ================= */}
      <section id="bonuses" className="max-w-5xl mx-auto scroll-mt-20 px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-semibold">
            <FileCheck className="w-3.5 h-3.5" />
            <span>Bonus Suite Eksklusif</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Fasilitas Tambahan Senilai Rp 1.850.000
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Seluruh peserta terdaftar otomatis mendapatkan perlengkapan pendukung penuh tanpa biaya tambahan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {masterclassData.bonuses.map((bonus, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-card/60 backdrop-blur-md border border-border flex items-start gap-4 hover:border-primary/40 transition"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                {idx === 0 && <BookOpen className="w-5 h-5" />}
                {idx === 1 && <Video className="w-5 h-5" />}
                {idx === 2 && <Award className="w-5 h-5" />}
                {idx === 3 && <MessageCircle className="w-5 h-5" />}
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm sm:text-base text-foreground">{bonus.title}</h4>
                </div>
                <span className="text-xs font-semibold text-primary block">{bonus.value}</span>
                <p className="text-xs text-muted-foreground leading-relaxed">{bonus.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ALUMNI TESTIMONIALS ================= */}
      <section id="testimonials" className="max-w-5xl mx-auto scroll-mt-20 px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <Quote className="w-3.5 h-3.5" />
            <span>Alumni Transformation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Apa Kata Mereka yang Telah Meraih Mental Clarity?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Kisah nyata dari para leader dan profesional yang berhasil mengatasi overthinking kronis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {masterclassData.testimonials.map((testi, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-card/60 backdrop-blur-md border border-border flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: testi.rating }).map((_, r) => (
                    <Star key={r} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground italic leading-relaxed">
                  "{testi.content}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-border/50">
                <img
                  src={testi.image}
                  alt={testi.name}
                  className="w-10 h-10 rounded-full object-cover border border-primary/30"
                />
                <div>
                  <h5 className="font-bold text-xs sm:text-sm text-foreground">{testi.name}</h5>
                  <p className="text-[11px] text-muted-foreground">{testi.role} • {testi.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRICING & REGISTRATION ================= */}
      <section id="pricing" className="max-w-4xl mx-auto scroll-mt-20 px-4">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-card via-card/80 to-secondary/30 border-2 border-primary/40 backdrop-blur-2xl shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 px-6 py-2 bg-primary text-primary-foreground font-black text-xs uppercase tracking-widest rounded-bl-2xl">
            Early Bird Batch 12
          </div>

          <div className="space-y-8 text-center max-w-xl mx-auto">
            <div className="space-y-2">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                Investasi Terbaik Dimulai Dari Cara Anda Merawat Pikiran
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Mental Detox Masterclass
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Satu sesi pelatihan transformatif yang mengubah cara kerja pikiran Anda selamanya.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/80 space-y-2">
              <div className="text-xs text-muted-foreground line-through">Harga Normal: Rp 1.500.000</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-primary">
                Penawaran Khusus Batch 12
              </div>
              <p className="text-xs text-muted-foreground">
                *Slot dibatasi hanya untuk 30 peserta agar sesi interaksi dan tanya jawab berlangsung optimal.
              </p>
            </div>

            <div className="space-y-3 text-left max-w-md mx-auto">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Live Zoom Masterclass bersama Coach Yanto</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Akses Rekaman Penuh Seumur Hidup</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>E-Workbook & Practical Toolkits Harian</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Official E-Certificate Mind Mastery Academy</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <a
                href={masterclassData.hero.contactWhatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 px-8 rounded-2xl bg-primary text-primary-foreground font-bold text-base hover:opacity-95 shadow-xl shadow-primary/30 transition flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-5 h-5" />
                Daftar via WhatsApp Admin Resmi
              </a>
              <span className="text-[11px] text-muted-foreground block">
                Konfirmasi instan ke WhatsApp Mind Mastery Academy (+62 811-8178-971)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section id="faq" className="max-w-4xl mx-auto scroll-mt-20 px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="text-sm text-muted-foreground">
            Jawaban lengkap seputar mekanisme kelas, jadwal, dan fasilitas masterclass.
          </p>
        </div>

        <div className="space-y-3">
          {masterclassData.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card/60 backdrop-blur-md overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-foreground hover:bg-secondary/40"
                >
                  <span>{faq.question}</span>
                  <div className="p-1.5 rounded-lg bg-secondary text-foreground flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40 bg-secondary/10 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="max-w-5xl mx-auto px-4 pt-12 border-t border-border text-center text-xs text-muted-foreground space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-6 text-foreground/80 font-medium">
          <a href="#overview" className="hover:text-primary transition">Overview</a>
          <a href="#framework" className="hover:text-primary transition">Framework</a>
          <a href="#curriculum" className="hover:text-primary transition">Kurikulum</a>
          <a href="#coach" className="hover:text-primary transition">Coach Yanto</a>
          <a href="#pricing" className="hover:text-primary transition">Investasi</a>
          <a href={masterclassData.hero.contactWhatsapp} target="_blank" rel="noreferrer" className="hover:text-primary transition">
            WhatsApp Admin
          </a>
        </div>
        <p>
          © {new Date().getFullYear()} Mind Mastery Academy by Coach Yanto. All rights reserved.
        </p>
        <p className="text-[11px] opacity-70">
          Program pelatihan ini berfokus pada teknik Neuro-Linguistic Programming (NLP) dan self-mastery untuk pengembangan profesional & mental clarity.
        </p>
      </footer>
    </div>
  );
}
