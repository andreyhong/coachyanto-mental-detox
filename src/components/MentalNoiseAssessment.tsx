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
        color: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
        message: "Pikiran Anda berada dalam kondisi relatif tenang. Masterclass ini akan mempertajam 'decision velocity' dan ketahanan emosional Anda ke level eksekutif tertinggi.",
      };
    }
    if (totalScore <= 6) {
      return {
        level: "Tingkat Kebisingan Sedang (Mild Mental Clutter)",
        color: "text-amber-500 border-amber-500/30 bg-amber-500/10",
        message: "Anda mulai merasakan tanda-tanda kelelahan kognitif dan overthinking sporadis. Sangat disarankan untuk segera menerapkan framework Mental Detox sebelum berkembang menjadi burnout.",
      };
    }
    return {
      level: "Tingkat Kebisingan Tinggi (Chronic Overthinking Trap)",
      color: "text-rose-500 border-rose-500/30 bg-rose-500/10",
      message: "Kapasitas mental Anda sudah terbebani oleh loop pikiran berlebih. Anda membutuhkan teknik 'Neural Pattern Interrupt' segera untuk merestart kejernihan dan kesehatan mental Anda.",
    };
  };

  return (
    <div id="assessment" className="w-full max-w-4xl mx-auto my-12 p-6 sm:p-10 rounded-3xl bg-card/60 backdrop-blur-xl border border-border shadow-xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
          <BrainCircuit className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs font-semibold tracking-wider uppercase text-primary">Self-Assessment Mandiri</span>
          <h3 className="text-2xl font-bold tracking-tight">Kalkulator Tingkat Mental Noise & Overthinking</h3>
        </div>
      </div>
      <p className="text-muted-foreground text-sm mb-8">
        Jawab 4 pertanyaan singkat berikut untuk mendiagnosa seberapa berat beban kebisingan mental yang sedang Anda bawa setiap hari.
      </p>

      {!submitted ? (
        <div className="space-y-6">
          {questions.map((q, idx) => (
            <div key={q.id} className="p-4 sm:p-5 rounded-2xl bg-secondary/30 border border-border/50">
              <p className="text-sm font-semibold mb-3 text-foreground">
                <span className="inline-block w-6 h-6 rounded-full bg-primary/20 text-primary text-xs text-center leading-6 mr-2">
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
                      className={`text-left p-3.5 rounded-xl text-xs sm:text-sm font-medium transition-all border ${
                        selected
                          ? "bg-primary text-primary-foreground border-primary shadow-sm"
                          : "bg-background/80 hover:bg-secondary/80 border-border text-foreground"
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
            <span className="text-xs text-muted-foreground">
              Dijawab {Object.keys(answers).length} dari {questions.length} pertanyaan
            </span>
            <button
              type="button"
              disabled={!isComplete}
              onClick={() => setSubmitted(true)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 ${
                isComplete
                  ? "bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/20 cursor-pointer"
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              }`}
            >
              Lihat Hasil Analisis Kejernihan <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="p-6 rounded-2xl border space-y-5 animate-in fade-in duration-300">
          {(() => {
            const res = getResultTier();
            return (
              <>
                <div className={`p-4 rounded-xl border ${res.color}`}>
                  <div className="flex items-center gap-2 font-bold text-sm mb-1">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    Hasil Diagnosa: {res.level}
                  </div>
                  <p className="text-xs sm:text-sm opacity-90 leading-relaxed">{res.message}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center py-2">
                  <div className="p-3 rounded-xl bg-secondary/50 border border-border">
                    <div className="text-2xl font-black text-primary">{totalScore} / {maxScore}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Indeks Mental Noise</div>
                  </div>
                  <div className="p-3 rounded-xl bg-secondary/50 border border-border">
                    <div className="text-2xl font-black text-foreground">
                      {Math.round(((maxScore - totalScore) / maxScore) * 100)}%
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">Skor Clarity Saat Ini</div>
                  </div>
                </div>

                <div className="bg-primary/5 p-4 rounded-xl border border-primary/20 text-xs text-foreground/80 space-y-2">
                  <div className="font-semibold text-primary flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Solusi Rekomendasi Coach Yanto:
                  </div>
                  <p>
                    Gunakan <strong>Pilar 1 (Neural Pattern Interrupt)</strong> dan <strong>Pilar 2 (Cognitive De-Cluttering)</strong> pada Masterclass ini untuk menurunkan beban kortisol dan mengembalikan kendali penuh atas pikiran Anda dalam 7 hari.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="#pricing"
                    className="flex-1 text-center py-3 px-5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-md transition"
                  >
                    Ikuti Masterclass & Dapatkan Pemulihan
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setAnswers({});
                    }}
                    className="py-3 px-4 rounded-xl border border-border bg-background text-foreground font-medium text-sm hover:bg-secondary flex items-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" /> Ulangi Kuis
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
