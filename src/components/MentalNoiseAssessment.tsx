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
        color: "text-[#7ea88d] border-[#43644f]/50 bg-gradient-to-r from-[#1c2c22]/70 to-[#14211a]/70",
        message: "Pikiran Anda berada dalam kondisi relatif tenang. Masterclass ini akan mempertajam 'decision velocity' dan ketahanan emosional Anda ke level eksekutif tertinggi.",
      };
    }
    if (totalScore <= 6) {
      return {
        level: "Tingkat Kebisingan Sedang (Mild Mental Clutter)",
        color: "text-[#baa682] border-[#5d4f3b]/50 bg-gradient-to-r from-[#2a241b]/70 to-[#1e1913]/70",
        message: "Anda mulai merasakan tanda-tanda kelelahan kognitif dan overthinking sporadis. Sangat disarankan untuk segera menerapkan framework Mental Detox sebelum berkembang menjadi burnout.",
      };
    }
    return {
      level: "Tingkat Kebisingan Tinggi (Chronic Overthinking Trap)",
      color: "text-[#c97b6e] border-[#5a3630]/50 bg-gradient-to-r from-[#291b19]/70 to-[#1e1312]/70",
      message: "Kapasitas mental Anda sudah terbebani oleh loop pikiran berlebih. Anda membutuhkan teknik 'Neural Pattern Interrupt' segera untuk merestart kejernihan dan kesehatan mental Anda.",
    };
  };

  return (
    <div id="assessment" className="w-full max-w-4xl mx-auto my-12 p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#18231c]/80 via-[#131b16]/75 to-[#0e1411]/85 backdrop-blur-xl border border-[#2e4034]/60 shadow-[0_20px_50px_-20px_rgba(10,16,13,0.7)]">
      <div className="flex items-center gap-3.5 mb-4 group cursor-default">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2a3c30] via-[#1f2d24] to-[#151f19] border border-[#3e5a48]/60 text-[#a3c9b0] flex items-center justify-center transition-all duration-300 group-hover:scale-115 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:shadow-[0_8px_20px_-4px_rgba(96,141,112,0.4)]">
          <BrainCircuit className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div>
          <span className="text-xs font-semibold tracking-wider uppercase text-[#a3c9b0]">Self-Assessment Mandiri</span>
          <h3 className="text-2xl font-bold tracking-tight text-foreground">Kalkulator Tingkat Mental Noise & Overthinking</h3>
        </div>
      </div>
      <p className="text-muted-foreground text-sm mb-8">
        Jawab 4 pertanyaan singkat berikut untuk mendiagnosa seberapa berat beban kebisingan mental yang sedang Anda bawa setiap hari.
      </p>

      {!submitted ? (
        <div className="space-y-6">
          {questions.map((q, idx) => (
            <div key={q.id} className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#1a251e]/60 to-[#131d17]/60 border border-[#2a392f]/50 hover:border-[#3d5445]/70 transition-all duration-300">
              <p className="text-sm font-semibold mb-3 text-foreground flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-[#2a3c30] to-[#1c2921] border border-[#44634f]/60 text-[#a3c9b0] text-xs font-bold mr-2.5 transition-transform duration-200 hover:scale-115 hover:rotate-6">
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
                      className={`text-left p-3.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border cursor-pointer ${
                        selected
                          ? "bg-gradient-to-r from-[#3e664c] via-[#4d7b5d] to-[#3a5d46] text-[#f7faf8] border-[#6ea07d]/60 shadow-[0_4px_16px_-2px_rgba(62,102,76,0.4)]"
                          : "bg-background/80 hover:bg-[#1f2b23]/80 border-[#2b3a30] text-foreground hover:border-[#425a4b]"
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
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 group ${
                isComplete
                  ? "bg-gradient-to-r from-[#3e664c] via-[#4d7b5d] to-[#3a5d46] hover:from-[#497558] hover:via-[#598c6a] hover:to-[#426a50] text-[#f7faf8] shadow-lg shadow-[#1e3325]/40 border border-[#689977]/35 cursor-pointer"
                  : "bg-muted text-muted-foreground cursor-not-allowed opacity-60"
              }`}
            >
              <span>Lihat Hasil Analisis Kejernihan</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      ) : (
        <div className="p-6 rounded-2xl border border-[#2b3c31]/60 bg-gradient-to-b from-[#18231c]/60 to-[#101713]/60 space-y-5 animate-in fade-in duration-300">
          {(() => {
            const res = getResultTier();
            return (
              <>
                <div className={`p-4 rounded-xl border ${res.color} group cursor-default`}>
                  <div className="flex items-center gap-2 font-bold text-sm mb-1">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                    Hasil Diagnosa: {res.level}
                  </div>
                  <p className="text-xs sm:text-sm opacity-90 leading-relaxed">{res.message}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center py-2">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[#1b2620]/70 to-[#131d17]/70 border border-[#2e4034]/60 group hover:border-[#4d6f58]/70 transition-all duration-300">
                    <div className="text-3xl font-black text-[#a3c9b0] group-hover:scale-110 transition-transform duration-200">{totalScore} / {maxScore}</div>
                    <div className="text-xs text-muted-foreground mt-1">Indeks Mental Noise</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[#1b2620]/70 to-[#131d17]/70 border border-[#2e4034]/60 group hover:border-[#4d6f58]/70 transition-all duration-300">
                    <div className="text-3xl font-black text-foreground group-hover:scale-110 transition-transform duration-200">
                      {Math.round(((maxScore - totalScore) / maxScore) * 100)}%
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Skor Clarity Saat Ini</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#1c2921]/70 to-[#141e18]/70 p-4 rounded-xl border border-[#3e5947]/50 text-xs text-foreground/90 space-y-2 group">
                  <div className="font-semibold text-[#a3c9b0] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 transition-transform duration-300 group-hover:scale-125 text-[#7ea88d]" />
                    <span>Solusi Rekomendasi Coach Yanto:</span>
                  </div>
                  <p className="leading-relaxed">
                    Gunakan <strong>Pilar 1 (Neural Pattern Interrupt)</strong> dan <strong>Pilar 2 (Cognitive De-Cluttering)</strong> pada Masterclass ini untuk menurunkan beban kortisol dan mengembalikan kendali penuh atas pikiran Anda dalam 7 hari.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="#pricing"
                    className="flex-1 text-center py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#3e664c] via-[#4d7b5d] to-[#3a5d46] hover:from-[#497558] hover:via-[#598c6a] hover:to-[#426a50] text-[#f7faf8] font-semibold text-sm shadow-md shadow-[#1e3325]/40 border border-[#6ea07d]/40 transition-all duration-300"
                  >
                    Ikuti Masterclass & Dapatkan Pemulihan
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setAnswers({});
                    }}
                    className="py-3.5 px-4 rounded-xl border border-[#304437] bg-gradient-to-r from-[#1b2620] to-[#141d18] hover:from-[#24332b] hover:to-[#1b2620] text-foreground font-medium text-sm flex items-center gap-2 group transition-all duration-200 cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-90 group-hover:text-[#a3c9b0]" />
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
