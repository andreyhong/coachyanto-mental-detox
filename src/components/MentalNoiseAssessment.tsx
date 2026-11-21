import { useState } from "react";
import { CheckCircle2, AlertCircle, ArrowRight, RotateCcw, BrainCircuit } from "lucide-react";

interface Question {
  id: number;
  text: string;
  options: { label: string; score: number }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "Ketika hari kerja selesai atau Anda hendak tidur, bagaimana kondisi pikiran Anda?",
    options: [
      { label: "Pikiran tenang, mudah terlelap dalam 10-15 menit", score: 0 },
      { label: "Kadang mengingat sedikit tugas, namun bisa dialihkan", score: 1 },
      { label: "Pikiran masih aktif memikirkan skenario kerja & sulit tidur nyenyak", score: 3 },
    ],
  },
  {
    id: 2,
    text: "Seberapa sering Anda menunda keputusan penting karena takut salah langkah (Analysis Paralysis)?",
    options: [
      { label: "Jarang, saya bisa mengambil keputusan dengan percaya diri", score: 0 },
      { label: "Kadang-kadang, terutama pada proyek bernilai tinggi", score: 1 },
      { label: "Sangat sering, saya terus menimbang risiko hingga kehilangan momentum", score: 3 },
    ],
  },
  {
    id: 3,
    text: "Apakah Anda sering merasa lelah mental (Brain Fog) meski aktivitas fisik tidak berat?",
    options: [
      { label: "Hampir tidak pernah, energi saya stabil sepanjang hari", score: 0 },
      { label: "Hanya saat beban kerja sedang padat di akhir bulan", score: 1 },
      { label: "Sering sekali, kepala terasa penuh dan sulit berkonsentrasi lama", score: 3 },
    ],
  },
  {
    id: 4,
    text: "Bagaimana respon emosional Anda saat rencana mendadak berubah atau ada krisis?",
    options: [
      { label: "Tetap tenang dan fokus mencari solusi logis", score: 0 },
      { label: "Sedikit panik sebentar, kemudian bisa kembali tenang", score: 1 },
      { label: "Sangat cemas, overthinking hal terburuk, dan emosi reaktif", score: 3 },
    ],
  },
];

export function MentalNoiseAssessment() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const totalScore = Object.values(answers).reduce((acc, curr) => acc + curr, 0);
  const maxScore = questions.length * 3;
  const isComplete = Object.keys(answers).length === questions.length;

  const handleSelect = (questionId: number, score: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
  };

  const getResultTier = () => {
    if (totalScore <= 2) {
      return {
        level: "Tingkat Kebisingan Rendah (Optimal Clarity)",
        color: "text-primary dark:text-[#a3c9b0] border-primary/30 dark:border-[#a3c9b0]/30 bg-primary/10 dark:bg-black/40",
        message: "Pikiran Anda berada dalam kondisi relatif tenang. Masterclass ini akan mempertajam 'decision velocity' dan ketahanan emosional Anda ke level eksekutif tertinggi.",
      };
    }
    if (totalScore <= 6) {
      return {
        level: "Tingkat Kebisingan Sedang (Mild Mental Clutter)",
        color: "text-accent dark:text-[#d4b27d] border-accent/30 dark:border-[#d4b27d]/30 bg-accent/10 dark:bg-black/40",
        message: "Anda mulai merasakan tanda-tanda kelelahan kognitif dan overthinking sporadis. Sangat disarankan untuk segera menerapkan framework Mental Detox sebelum berkembang menjadi burnout.",
      };
    }
    return {
      level: "Tingkat Kebisingan Tinggi (Chronic Overthinking Trap)",
      color: "text-destructive dark:text-[#e0988a] border-destructive/30 dark:border-[#e0988a]/30 bg-destructive/10 dark:bg-black/40",
      message: "Kapasitas mental Anda sudah terbebani oleh loop pikiran berlebih. Anda membutuhkan teknik 'Neural Pattern Interrupt' segera untuk merestart kejernihan dan kesehatan mental Anda.",
    };
  };

  return (
    <div id="assessment" className="w-full max-w-4xl mx-auto my-12 p-6 sm:p-10 rounded-3xl zen-glass zen-glass-shimmer shadow-2xl">
      <div className="flex items-center gap-3.5 mb-4 group cursor-default">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-white/10 border border-primary/20 dark:border-white/20 text-primary dark:text-[#a3c9b0] flex items-center justify-center transition-all duration-300 group-hover:scale-115 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:shadow-md">
          <BrainCircuit className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div>
          <span className="text-xs font-semibold tracking-wider uppercase text-primary dark:text-[#a3c9b0]">Self-Assessment Mandiri</span>
          <h3 className="text-2xl font-bold tracking-tight text-foreground">Kalkulator Tingkat Mental Noise & Overthinking</h3>
        </div>
      </div>
      <p className="text-foreground/85 text-sm mb-8 font-normal">
        Jawab 4 pertanyaan singkat berikut untuk mendiagnosa seberapa berat beban kebisingan mental yang sedang Anda bawa setiap hari.
      </p>

      {!submitted ? (
        <div className="space-y-6">
          {questions.map((q, idx) => (
            <div key={q.id} className="p-4 sm:p-5 rounded-2xl bg-secondary/60 dark:bg-black/25 border border-border/80 dark:border-white/15 hover:border-primary/40 transition-all duration-300">
              <p className="text-sm font-semibold mb-3 text-foreground flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/15 text-primary text-xs font-bold mr-2.5 transition-transform duration-200 hover:scale-115 hover:rotate-6">
                  {idx + 1}
                </span>
                {q.text}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {q.options.map((opt) => {
                  const selected = answers[q.id] === opt.score;
                  return (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => handleSelect(q.id, opt.score)}
                      className={`text-left p-3.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border cursor-pointer backdrop-blur-sm ${
                        selected
                          ? "bg-primary text-primary-foreground border-primary shadow-md font-semibold"
                          : "bg-background/80 dark:bg-black/30 hover:bg-secondary/90 dark:hover:bg-black/50 border-border text-foreground hover:border-primary/40"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-foreground/75">
              Dijawab {Object.keys(answers).length} dari {questions.length} pertanyaan
            </span>
            <button
              type="button"
              disabled={!isComplete}
              onClick={() => setSubmitted(true)}
              className={`px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 group ${
                isComplete
                  ? "bg-gradient-to-r from-[#3e664c] via-[#4d7b5d] to-[#3a5d46] hover:from-[#497558] hover:via-[#598c6a] hover:to-[#426a50] text-[#f7faf8] shadow-lg border border-white/20 cursor-pointer hover:-translate-y-0.5"
                  : "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
              }`}
            >
              <span>Lihat Hasil Analisis Kejernihan</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      ) : (
        <div className="p-6 rounded-2xl border border-border/80 dark:border-white/15 bg-secondary/50 dark:bg-black/30 space-y-5 animate-in fade-in duration-300">
          {(() => {
            const res = getResultTier();
            return (
              <>
                <div className={`p-4 rounded-xl border ${res.color} group cursor-default backdrop-blur-sm`}>
                  <div className="flex items-center gap-2 font-bold text-sm mb-1">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                    Hasil Diagnosa: {res.level}
                  </div>
                  <p className="text-xs sm:text-sm opacity-90 leading-relaxed font-normal">{res.message}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center py-2">
                  <div className="p-4 rounded-xl bg-background/80 dark:bg-black/40 border border-border/80 dark:border-white/15 group hover:border-primary transition-all duration-300 shadow-sm">
                    <div className="text-3xl font-black text-primary group-hover:scale-110 transition-transform duration-200">{totalScore} / {maxScore}</div>
                    <div className="text-xs text-foreground/75 mt-1 font-medium">Indeks Mental Noise</div>
                  </div>
                  <div className="p-4 rounded-xl bg-background/80 dark:bg-black/40 border border-border/80 dark:border-white/15 group hover:border-primary transition-all duration-300 shadow-sm">
                    <div className="text-3xl font-black text-foreground group-hover:scale-110 transition-transform duration-200">
                      {Math.round(((maxScore - totalScore) / maxScore) * 100)}%
                    </div>
                    <div className="text-xs text-foreground/75 mt-1 font-medium">Skor Clarity Saat Ini</div>
                  </div>
                </div>

                <div className="bg-primary/5 dark:bg-black/40 p-4 rounded-xl border border-primary/20 dark:border-white/15 text-xs text-foreground/90 space-y-2 group">
                  <div className="font-semibold text-primary flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 transition-transform duration-300 group-hover:scale-125" />
                    <span>Solusi Rekomendasi Coach Yanto:</span>
                  </div>
                  <p className="leading-relaxed font-normal">
                    Gunakan <strong>Pilar 1 (Neural Pattern Interrupt)</strong> dan <strong>Pilar 2 (Cognitive De-Cluttering)</strong> pada Masterclass ini untuk menurunkan beban kortisol dan mengembalikan kendali penuh atas pikiran Anda dalam 7 hari.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="#pricing"
                    className="flex-1 text-center py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#3e664c] via-[#4d7b5d] to-[#3a5d46] hover:from-[#497558] hover:via-[#598c6a] hover:to-[#426a50] text-[#f7faf8] font-semibold text-sm shadow-lg border border-white/20 transition-all duration-300"
                  >
                    Ikuti Masterclass & Dapatkan Pemulihan
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setAnswers({});
                    }}
                    className="py-3.5 px-4 rounded-xl border border-border bg-background/80 dark:bg-black/30 hover:bg-secondary text-foreground font-medium text-sm flex items-center gap-2 group transition-all duration-200 cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-90 group-hover:text-primary" />
                    <span>Ulangi Kuis</span>
                  </button>
                </div>
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
}
